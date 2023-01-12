import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import st from './Login.module.css'
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../../redux/authReducer";
import { useState } from 'react';

const LoginContainer = ({ userLogin, isAuth, captchaURL }) => {
    if (isAuth) {
        return <Navigate to={'/dialogs'} />
    }

    return <div className={st.login_form_wrapper}>
        <h2>Login</h2>
        <LoginForm userLogin={userLogin} captchaURL={captchaURL} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        captchaURL: state.authData.captchaURL,
    }
}
export default connect(mapStateToProps, { userLogin })(LoginContainer)





const LoginForm = ({ userLogin, captchaURL }) => {
    let [formReady, setFormReady] = useState(false)
    const onLoginSubmit = (values) => {
        userLogin(values.email, values.password, values.rememberMe)
    }
    const validate = (values) => {
        const errors = {}
        if (!values.email) errors.email = 'Required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (Object.keys(errors).length) setFormReady(true)
        else setFormReady(false)
        return errors
    }
    return (
        <Formik initialValues={{ email: '', password: '', rememberMe: true }}
            // validationSchema={Yup.object({
            //     email: Yup.string().email('Invalid email address').required('Required')
            // })}
            validate={validate}
            onSubmit={onLoginSubmit}>
                <Form className={st.login_form}>

                    <LoginElement name='email' label='Email Address' />
                    <LoginElement name='password' label='Password' type='password' />
                    <LoginElement name='rememberMe' label='Remember me!' type="checkbox" className={st.checkbox}/>

                    <button disabled={formReady} type="submit">Submit</button>

                    {(captchaURL) && <p>Слишком много попыток. Доступ заблокирован</p>}
                </Form>
        </Formik>
    );
}

const LoginElement = ({ name, label, type, className}) => {
    return (
        <div className={st.login_element + ' ' + (className || null)}>
            <label htmlFor={name}>{label}</label>
            <Field name={name} type={type || 'input'} />
            <ErrorMessage className={st.error_message} component='div' name={name} />
        </div>
    )
}
