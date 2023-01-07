import preloader from '../../localImage/preloader.svg'

const Preloader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{maxWidth: 100}} src={preloader} alt={'preloader'} />
        </div>
    )
}

export default Preloader