import st from './Postcreator.module.css'
import {Form, Field} from "react-final-form";
import React from "react";


const PostCreator = ({addNewPost}) => {
    const required = (value) => {
        if (value) return undefined
        return "This field is required"
    }
    const maxLength10 = (value) => {
        if (value && value.length > 10) return 'max length is 10'
        return undefined
    }
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <Form  onSubmit={formObj => {
            console.log(formObj)
            addNewPost(formObj.postText)
        }}>
            {
                ({handleSubmit}) => (
                    <form className={st.post_creator_wrapper} onSubmit={handleSubmit}>
                        <Field name={'postText'} type='text' component='textarea'
                               validate={composeValidators(required, maxLength10)}/>
                        <button type={'submit'}>Send</button>
                    </form>
                )
            }
              </Form>
    )
}
export default PostCreator