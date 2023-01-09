import st from "./PersonalInfo.module.css";
import {Formik} from "formik";


const EditContactsWindow = ({contacts, setEditMode, saveChange}) => {
    return (
        <div className={st.modal_window_wrapper}>
            <Formik initialValues={contacts}
                    onSubmit={(values) => {
                        console.log('contacts value: ', values);
                        saveChange(undefined, values)
                        setEditMode(false)
                    }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit} className={st.modal_window}>
                        <ContactsEditor contacts={contacts} handleChange={handleChange}
                                        handleBlur={handleBlur} values={values} />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
export default EditContactsWindow

const ContactsEditor = ({contacts, handleChange, handleBlur, values}) => {
    let contactsKeys = Object.keys(contacts)
    return contactsKeys.map(item => <input type="text" name={item} onChange={handleChange} key={item}
                                           onBlur={handleBlur} value={values[item]}/>)
}