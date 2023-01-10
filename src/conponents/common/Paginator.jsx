import st from "./Paginator.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


const Paginator = ({pagesCount, setCurrentPage, currentPage}) => {
    return (
        <div className={st.paginator_wrapper}>

            {(currentPage > 2)
                ? <CreatePageButton pageNum={1} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                : <div></div>
            }

            <div>
                {(currentPage > 2) && <span>...</span>}
            </div>

            {(currentPage > 1)
                ? <CreatePageButton pageNum={currentPage - 1} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                : <div></div>
            }
            <CreatePageButton pageNum={currentPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

            {(currentPage < pagesCount)
                ? <CreatePageButton pageNum={+currentPage + 1} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                : <div></div>
            }
            <div>
                {(currentPage < (pagesCount - 1)) && <span>...</span>}
            </div>

            {(currentPage < pagesCount - 1)
                ? <CreatePageButton pageNum={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                : <div></div>
            }
        </div>
    )
}
export default Paginator


const CreatePageButton = ({pageNum, currentPage, setCurrentPage}) => {
    let activeLink = st.current_page + " " + st.usual_link
    let usualLink = st.usual_link
    return <div onClick={() => {setCurrentPage(pageNum)}}>
        <NavLink to={`/users/${pageNum}`}
                 className={(pageNum === currentPage) ? activeLink : usualLink}>
            {pageNum}
        </NavLink>
    </div>
}