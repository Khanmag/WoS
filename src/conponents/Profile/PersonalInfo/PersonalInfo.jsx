import st from './PersonalInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useEffect, useState} from "react";
import EditDescrWindow from "./EditDescrWindow";
import EditContactsWindow from "./EditContactsWindow";
import Contacts from "./Contacts";
import defaultPhoto from '../../../localImage/defaultUser.png'

const PersonalInfo = ({profileInfo, status, updateStatus, isOwner, isAuth, updatePhoto, saveProfileData}) => {
    const onChangeMainPhoto = (e) => {
        if (e.target.files.length) updatePhoto(e.target.files[0])
    }

    let {userId, fullName, lookingForAJob, lookingForAJobDescription} = profileInfo
    let initialDescription = {userId, fullName, lookingForAJob, lookingForAJobDescription}

    const saveChange = (description = initialDescription, contacts = profileInfo.contacts) => {
        let profileData = {...description, aboutMe: 'i am', contacts}
        console.log('saveChange value: ', profileData)
        saveProfileData(profileData)
    }

    const [editModeDescription, setEditModeDescription] = useState(false)
    const [editModeContacts, setEditModeContacts] = useState(false)

    return (
        <div className={st.personal_info_wrapper}>
            <AvatarBlock profileInfo={profileInfo}
                         isOwner={isOwner}
                         onChange={onChangeMainPhoto}/>

            <div className={st.description}>
                <DescriptionBlock fullName={profileInfo?.fullName}
                                  lookingForAJob={profileInfo?.lookingForAJob}
                                  lookingForAJobDescription={profileInfo?.lookingForAJobDescription}
                                  setEditModeDescription={setEditModeDescription}
                                  isOwner={isOwner}
                />

                <Contacts contacts={profileInfo?.contacts}
                          setEditModeContacts={setEditModeContacts}
                          isOwner={isOwner}
                />
                {/*{(isOwner) && <button onClick={() => setEditModeContacts(true)}>edit</button>}*/}
                {/*{editModeContacts &&*/}
                {/*    <EditContactsWindow contacts={profileInfo.contacts}*/}
                {/*                        setEditMode={setEditModeContacts}*/}
                {/*                        saveChange={saveChange}*/}
                {/*    />*/}
                {/*}*/}

                {/*{(editModeDescription && isOwner) &&*/}
                {/*    <EditDescrWindow setEditMode={setEditModeDescription}*/}
                {/*                     profileInfo={profileInfo}*/}
                {/*                     saveChange={saveChange}*/}
                {/*    />*/}
                {/*}*/}
                {/*<ProfileStatusWithHooks isAuth={isAuth} statusText={status} updateStatus={updateStatus}/>*/}
            </div>
        </div>
    )
}
export default PersonalInfo


const AvatarBlock = ({profileInfo, isOwner, onChange}) => {
    return <div className={st.avatar}>
        <img src={profileInfo?.photos.large || defaultPhoto}/>
        {isOwner && <input className={st.add_photo} type={"file"}
                           onChange={onChange}/>}
    </div>
}
const DescriptionBlock = ({
                              fullName, lookingForAJob, lookingForAJobDescription,
                              setEditModeDescription, isOwner
                          }) => {
    return <div className={st.basic_info_wrapper}>
        <div>
            <h6>name:</h6>
            <p>{fullName}</p>
        </div>
        {lookingForAJob && <div>
            <h6>looking for a job!</h6>
        </div>}
        <div>
            <h6>description:</h6>
            <p>{lookingForAJobDescription}</p>
        </div>
        {isOwner && <button className={st.edit_mode_button}
            onClick={() => {setEditModeDescription(true)}}>edit</button>}
    </div>
}







