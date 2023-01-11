import preloader from '../../localImage/Ellipsis-1.8s-800px.svg'
import st from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={st.preloader_block}>
            <img src={preloader} alt={'preloader'} />
        </div>
    )
}

export default Preloader