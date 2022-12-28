import st from './PersonalInfo.module.css'
import facebookImg from '../../../localImage/contacts_logo/facebook.png'
import twitterImg from '../../../localImage/contacts_logo/twitter.png'
import vkImg from '../../../localImage/contacts_logo/vk.png'
import githubImg from '../../../localImage/contacts_logo/github.png'
import instagramImg from '../../../localImage/contacts_logo/instagram.png'
import main_linkImg from '../../../localImage/contacts_logo/main_link.png'
import youtubeImg from '../../../localImage/contacts_logo/youtube.png'
import webImg from '../../../localImage/contacts_logo/web.png'

const PersonalInfo = ({profileInfo}) => {
    let defaultImage = 'https://ru-static.z-dn.net/files/de9/253ede6117ef0934be62af55bc2b5ecd.png'
    return (
        <div className={st.personalinfowrapper}>
            <div className={st.banner}>
                <img src={'https://russia-dropshipping.ru/800/600/https/pbs.twimg.com/media/DWeheedWsAAo2_R.jpg'} />
            </div>
            <div className={st.avaplusdescr}>
                <div className={st.avatar} >
                    <img src={profileInfo.photos.large || defaultImage}/>
                </div>
                <div className={st.description}>
                    <div>{profileInfo.fullName}</div>
                    <div>{profileInfo.aboutMe}</div>
                    {/*<div>on the Samuray's way</div>*/}
                    <Contacts contacts={profileInfo.contacts} />
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo


const Contacts = ({contacts}) => {
    return (
        <div className={st.contacts_container}>
            <a href={contacts.facebook} alt={contacts.facebook}><img src={facebookImg} /></a>
            <a href={contacts.website} ><img src={webImg} /></a>
            <a href={contacts.vk} title={contacts.vk}><img src={vkImg} /></a>
            <a href={contacts.twitter} ><img src={twitterImg} /></a>
            <a href={contacts.instagram} ><img src={instagramImg} /></a>
            <a href={contacts.youtube} ><img src={youtubeImg} /></a>
            <a href={contacts.github} ><img src={githubImg} /></a>
            <a href={contacts.mainLink} ><img src={main_linkImg} /></a>
        </div>
    )
}