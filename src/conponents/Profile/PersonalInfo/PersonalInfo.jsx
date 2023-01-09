import st from './PersonalInfo.module.css'
import facebookImg from '../../../localImage/contacts_logo/facebook.png'
import twitterImg from '../../../localImage/contacts_logo/twitter.png'
import vkImg from '../../../localImage/contacts_logo/vk.png'
import githubImg from '../../../localImage/contacts_logo/github.png'
import instagramImg from '../../../localImage/contacts_logo/instagram.png'
import main_linkImg from '../../../localImage/contacts_logo/main_link.png'
import youtubeImg from '../../../localImage/contacts_logo/youtube.png'
import webImg from '../../../localImage/contacts_logo/web.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useEffect, useState} from "react";
import {Field, Form} from "react-final-form";
import {ClassicCheckBox, DescriptionField, FullNameField, LinkField} from "../../forForms/Fields";
import {Formik} from "formik";
import EditDescrWindow from "./EditDescrWindow";
import EditContactsWindow from "./EditContactsWindow";

const PersonalInfo = ({profileInfo, status, updateStatus, isOwner, isAuth, updatePhoto, saveProfileData}) => {
    let defaultImage = 'https://ru-static.z-dn.net/files/de9/253ede6117ef0934be62af55bc2b5ecd.png'
    const onChangeMainPhoto = (e) => {
        if (e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }

    let {userId, fullName, lookingForAJob, lookingForAJobDescription} = profileInfo
    let initialDescription = {userId, fullName, lookingForAJob, lookingForAJobDescription}
    const saveChange = (description = initialDescription, contacts = profileInfo.contacts) => {
        let profileData = {...description, aboutMe: 'i am', contacts}
        console.log('saveChange value: ',profileData)
        saveProfileData(profileData)
    }

    let [editModeDescription, setEditModeDescription] = useState(false)
    let [editModeContacts, setEditModeContacts] = useState(false)
    return (
        <div className={st.personal_info_wrapper}>
            <div className={st.avatar_plus_description}>
                <div className={st.avatar}>
                    <img src={profileInfo?.photos.large || defaultImage}/>
                    {isOwner && <input className={st.add_photo} type={"file"}
                                       onChange={onChangeMainPhoto}/>}
                </div>

                <div className={st.description}>
                    {(!editModeDescription && isOwner) &&
                        <div className={st.basic_descr}>
                            <div>full name: {profileInfo?.fullName}</div>
                            <div>looking for a job: {profileInfo?.lookingForAJob}</div>
                            <div>description: {profileInfo?.lookingForAJobDescription}</div>
                            {(!editModeDescription && isOwner) && <button onClick={() => {
                                setEditModeDescription(true)
                            }}>edit</button>}
                        </div>
                    }
                    <Contacts contacts={profileInfo?.contacts}/>
                    {(isOwner) && <button onClick={()=>setEditModeContacts(true)}>edit</button>}
                    {editModeContacts &&
                        <EditContactsWindow contacts={profileInfo.contacts}
                                            setEditMode={setEditModeContacts}
                                            saveChange={saveChange}
                        />
                    }

                    {(editModeDescription && isOwner) &&
                        <EditDescrWindow setEditMode={setEditModeDescription}
                                         profileInfo={profileInfo}
                                         saveChange={saveChange}
                        />
                    }
                    <ProfileStatusWithHooks isAuth={isAuth} statusText={status} updateStatus={updateStatus}/>

                </div>
            </div>
        </div>
    )
}
export default PersonalInfo


const Contacts = ({contacts}) => {
    return (
        (contacts) ? <div className={st.contacts_container}>
                <a href={contacts.facebook}><img alt={contacts.facebook} src={facebookImg}/></a>
                <a href={contacts.website}><img alt={contacts.facebook} src={webImg}/></a>
                <a href={contacts.vk} title={contacts.vk}><img alt={contacts.facebook} src={vkImg}/></a>
                <a href={contacts.twitter}><img alt={contacts.facebook} src={twitterImg}/></a>
                <a href={contacts.instagram}><img alt={contacts.facebook} src={instagramImg}/></a>
                <a href={contacts.youtube}><img alt={contacts.facebook} src={youtubeImg}/></a>
                <a href={contacts.github}><img alt={contacts.facebook} src={githubImg}/></a>
                <a href={contacts.mainLink}><img alt={contacts.facebook} src={main_linkImg}/></a>
            </div>
            : null
    )
}




