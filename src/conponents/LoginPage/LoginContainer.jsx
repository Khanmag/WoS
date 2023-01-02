import {Field, Form} from 'react-final-form'

const LoginContainer = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}
export default LoginContainer

const LoginForm = () => {
    return (
        <Form
            onSubmit={formObj => {
                console.log(formObj);
            }}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name">
                        {({ input }) => (
                            <input
                                placeholder="Name"
                                type="text"
                                {...input}
                            />
                        )}
                    </Field>
                    <Field name="email">
                        {({ input }) => (
                            <input
                                placeholder="Email"
                                type="email"
                                {...input}
                            />
                        )}
                    </Field>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Form>
    );
}
