import {Field, Form} from 'react-final-form'
import st from './LoginPage.module.css'
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {EmailField, PasswordField, RememberMeCheckBox} from "../forForms/Fields";
import {userLogin} from "../../redux/authReducer";

const LoginContainer = ({userLogin, isAuth, captchaURL}) => {
    if (isAuth) {
        return <Navigate to={'/dialogs'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm userLogin={userLogin} captchaURL={captchaURL}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        captchaURL: state.authData.captchaURL,
    }
}
export default connect(mapStateToProps, {userLogin})(LoginContainer)


// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
// const onSubmit = async values => {
//     await sleep(300)
//     window.alert(JSON.stringify(values, 0, 2))
// }
const onSubmit = (values) => {
    console.log(values)
}


const LoginForm = ({userLogin, captchaURL}) => {
    return (
        <Form
            onSubmit={(values) => {
                userLogin(values.email, values.password, values.rememberMe, values.captcha)
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <EmailField />
                    <PasswordField />
                    <RememberMeCheckBox />
                    {(captchaURL) && <img src={captchaURL} alt='captcha'/> }
                    {(captchaURL) && <Field name='captcha' type="text">
                        {({input, meta}) => (
                            <div>
                                <input {...input}  />
                                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                            </div>
                        )}
                    </Field>}
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    );
}

