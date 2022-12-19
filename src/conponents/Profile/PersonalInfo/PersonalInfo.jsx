import st from './PersonalInfo.module.css'

const PersonalInfo = () => {
    return (
        <div className={st.personalinfowrapper}>
            <div className={st.banner}>
                <img src={'https://russia-dropshipping.ru/800/600/https/pbs.twimg.com/media/DWeheedWsAAo2_R.jpg'} />
            </div>
            <div className={st.avaplusdescr}>
                <div className={st.avatar} >
                    <img src={'https://ru-static.z-dn.net/files/de9/253ede6117ef0934be62af55bc2b5ecd.png'}/>
                </div>
                <div className={st.description}>
                    <div>Solo Developer</div>
                    <div>Lerning React</div>
                    <div>on the Samuray's way</div>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo