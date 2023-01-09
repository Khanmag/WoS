import {useState} from "react";
import st from "./PersonalInfo.module.css";
import {Formik} from "formik";


const EditDescrWindow = ({profileInfo, setEditMode, saveChange}) => {
    // let [contacts, setContacts] = useState({})
    // setContacts({...profileInfo.contacts})
    return (
        <div className={st.modal_window_wrapper}>
            <Formik initialValues={{
                fullName: profileInfo.fullName,
                lookingForAJob: profileInfo.lookingForAJob,
                lookingForAJobDescription: profileInfo.lookingForAJobDescription,
            }}
                    onSubmit={(values) => {
                        console.log('description value: ',values);
                        saveChange(values)
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
                        <input type="text" name="fullName" onChange={handleChange}
                               onBlur={handleBlur} value={values.fullName} />
                        <input type="checkbox" name="lookingForAJob" onChange={handleChange}
                               onBlur={handleBlur}/>
                        <input type="text" name="lookingForAJobDescription" onChange={handleChange}
                               onBlur={handleBlur} value={values.lookingForAJobDescription}/>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
export default EditDescrWindow