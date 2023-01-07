import {Field, Form} from 'react-final-form'
import st from './LoginPage.module.css'
import {connect} from "react-redux";
import {userLogin} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {EmailField, PasswordField, RememberMeCheckBox} from "../forForms/Fields";

const LoginContainer = ({userLogin, isAuth}) => {
    if (isAuth) {
        return <Navigate to={'/dialogs'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginForm userLogin={userLogin}/>
    </div>
}

const mapStateToProps = (state) => {
    return {isAuth: state.authData.isAuth}
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

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minLength = min => value => value.length >= min ? undefined : `Should be greater than ${min}`
const maxLength = max => value => value.length <= max ? undefined : `Should be less than ${max}`
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


const LoginForm = ({userLogin}) => {

    return (
        <Form
            onSubmit={(values) => {
                userLogin(values.email, values.password, values.rememberMe)
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <EmailField  validators={composeValidators(required, minLength(3), maxLength(20))}/>
                    <PasswordField validators={required} />
                    <RememberMeCheckBox />
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

