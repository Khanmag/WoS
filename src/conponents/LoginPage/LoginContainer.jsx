import {Field, Form} from 'react-final-form'
import st from './LoginPage.module.css'

const LoginContainer = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}
export default LoginContainer

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minLength = min => value => value.length >= min ? undefined : `Should be greater than ${min}`
const maxLength = max => value => value.length <= max ? undefined : `Should be less than ${max}`
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


const LoginForm = () => {
    return (
        // <Form
        //     onSubmit={formObj => {
        //         console.log(formObj);
        //     }}
        // >
        //     {({ handleSubmit }) => (
        //         <form onSubmit={handleSubmit} className={st.form_wrapper}>
        //             <Field name={'name'} type="text" placeholder="Name" component={'input'} />
        //             <Field name="email" type="text" placeholder="Email" component={'input'} />
        //             <Field name="rememberMe" type="checkbox" component={'input'} />
        //             <button type="submit">Submit</button>
        //         </form>
        //     )}
        // </Form>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name" validate={composeValidators(required, minLength(3), maxLength(10))}>
                        {({ input, meta }) => (
                            <div>
                                <label>First Name</label>
                                <input className={meta.error ? st.error : ""} {...input} type="text" placeholder="First Name" />
                                {meta.error && meta.touched && <span
                                    style={{color: 'red', paddingLeft: 10}}>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="email" validate={required} >
                        {({ input, meta }) => (
                            <div>
                                <label>Email</label>
                                <input {...input} type="text" placeholder="example@mail.com" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
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
