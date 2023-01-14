import st from "./Paginator.module.css";
import {useNavigate} from "react-router-dom";

const Paginator = ({page, totalUsersCount, pageSize, isFetching}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pagesArray
    if (page < 3) pagesArray = [1, 2, 3, 4, 5]
    else if (page > (pagesCount - 2)) {
        pagesArray = [pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
    } else pagesArray = [page - 2, page - 1, page, page + 1, page + 2]

    return (
        <div className={st.paginator_wrapper}>

            <CreateNavButton pageNum={1} disabled={isFetching} name={'first'} page={page} />
            {
                pagesArray.map(item => (
                    <CreateNavButton key={item} pageNum={item} disabled={isFetching} page={page}/>
                ))
            }
            <CreateNavButton pageNum={pagesCount} disabled={isFetching} name={'last'} page={page} />

        </div>
    )
}
const CreateNavButton = ({pageNum, disabled, name, page}) => {
    const navigate = useNavigate()
    const onHandleClick = () => navigate(`/users/${pageNum}`)
    const styles = (page === pageNum) ? `${st.current_page} ${st.usual_btn}`: st.usual_btn
    return(
        <button className={styles} disabled={disabled} onClick={onHandleClick}>
            {name || pageNum}
        </button>
    )
}
export {Paginator}