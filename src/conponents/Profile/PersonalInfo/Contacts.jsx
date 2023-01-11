import st from './PersonalInfo.module.css'
import facebook from '../../../localImage/contacts_logo/facebook.png'
import twitter from '../../../localImage/contacts_logo/twitter.png'
import vk from '../../../localImage/contacts_logo/vk.png'
import github from '../../../localImage/contacts_logo/github.png'
import instagram from '../../../localImage/contacts_logo/instagram.png'
import mainLink from '../../../localImage/contacts_logo/main_link.png'
import youtube from '../../../localImage/contacts_logo/youtube.png'
import website from '../../../localImage/contacts_logo/web.png'

let contactsImage = {facebook, twitter, website, vk, github, instagram, mainLink, youtube}

const Contacts = ({contacts, setEditModeContacts, isOwner}) => {
    let contactArray = Object.keys(contacts)
    let result = contactArray.map(item => {
        return (
            <a title={contacts[item]} href={contacts[item]} key={item}
               className={(contacts[item]) ? '' : st.disabled_link}>
                <img alt={item + 'link'} src={contactsImage[item]}/>
            </a>
        )
    })
    return <div className={st.contacts_wrapper}>
        <h4>Contacts:</h4>
        <div className={st.contacts_container}>
            {(contacts) ? result : null}
            {isOwner && <button className={st.edit_mode_button}
                                onClick={() => {
                                    setEditModeContacts()
                                }}>
                edit
            </button>
            }
        </div>
    </div>
}
export default Contacts