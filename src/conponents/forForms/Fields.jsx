import {Field} from 'react-final-form'

export const EmailField = ({validators}) => {
    return <Field name="email" validate={validators}>
        {({input, meta}) => (
            <div>
                <label>Email</label>
                <input {...input}
                       type="text" placeholder="example@mail.com"/>
                {meta.error && meta.touched && <span
                    style={{color: 'red', paddingLeft: 10}}>{meta.error}</span>}
            </div>
        )}
    </Field>
}
export const PasswordField = ({validators}) => {
    return <Field name="password" validate={validators}>
        {({input, meta}) => (
            <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="*********"/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
        )}
    </Field>
}

export const RememberMeCheckBox = () => {
    return <Field name="rememberMe" type="checkbox">
        {({input, meta}) => (
            <div>
                <label>Remember me</label>
                <input {...input}  />
                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
            </div>
        )}
    </Field>
}