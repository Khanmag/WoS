import {Field} from 'react-final-form'
import {useState} from "react";


const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minLength = min => value => value.length >= min ? undefined : `Should be greater than ${min}`
const maxLength = max => value => value.length <= max ? undefined : `Should be less than ${max}`
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const EmailField = () => {
    return <Field name="email" validate={composeValidators(required, minLength(3), maxLength(20))}>
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
export const PasswordField = () => {
    return <Field name="password" validate={required}>
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
export const FullNameField = () => {
    return <Field name="fullName" validate={composeValidators(required, minLength(3), maxLength(40))}>
        {({input, meta}) => (
            <div>
                <label>Full Name</label>
                <input {...input}
                       type="text" placeholder="Khan Solo"/>
                {meta.error && meta.touched && <span
                    style={{color: 'red', paddingLeft: 10}}>{meta.error}</span>}
            </div>
        )}
    </Field>
}
export const ClassicCheckBox = ({labelText, name, stateValue}) => {
    return <Field name={name} type="checkbox">
        {({input, meta}) => (
            <div>
                <label>{labelText}</label>
                <input {...input}  />
                {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
            </div>
        )}
    </Field>
}
export const DescriptionField = ({name}) => {
    return <Field name={name}>
        {({input, meta}) => (
            <div>
                <label>Description</label>
                <input {...input}
                       type="text" placeholder="about you"/>
                {meta.error && meta.touched && <span
                    style={{color: 'red', paddingLeft: 10}}>{meta.error}</span>}
            </div>
        )}
    </Field>
}
export const LinkField = ({name, stateValue}) => {
    return <Field name={name} >
        {({input, meta}) => {
            return (
                <div>
                    <label>{name}</label>
                    <input {...input}
                           type="text" placeholder="https://.." defaultValue={stateValue}/>
                    {meta.error && meta.touched && <span
                        style={{color: 'red', paddingLeft: 10}}>{meta.error}</span>}
                </div>
            )
        }}
    </Field>
}