import st from "./Paginator.module.css";
import React from "react";


const Paginator = ({pagesNum, onCurrentPageChange, currentPage}) => {
    let pages = []
    for (let i = 1; i <= pagesNum; i++) {
        pages.push(i)
    }
    return (
        <div className={st.paginator_wrapper}>
            <CreateRef number={pages[0]} onCurrentPageChange={onCurrentPageChange} currentPage={currentPage}/>
            {(currentPage > 3) && <span>...</span>}
            {(currentPage > 2) &&
                <CreateRef number={pages[currentPage - 2]} onCurrentPageChange={onCurrentPageChange}
                           currentPage={currentPage}/>}
            {(currentPage > 1 && currentPage < pages.length - 1) &&
                <CreateRef number={pages[currentPage - 1]} onCurrentPageChange={onCurrentPageChange}
                           currentPage={currentPage}/>}
            {(currentPage < pages.length) &&
                <CreateRef number={pages[currentPage]} onCurrentPageChange={onCurrentPageChange}
                           currentPage={currentPage}/>}
            {(currentPage < pages.length - 2) && <span>...</span>}
            <CreateRef number={pages[pages.length - 1]} onCurrentPageChange={onCurrentPageChange}
                       currentPage={currentPage}/>
        </div>
    )
}
export default Paginator

const CreateRef = ({number, onCurrentPageChange, currentPage}) => {
    return <a onClick={() => onCurrentPageChange(number)}
              className={(number === currentPage) ? st.currentPage : ""}>
        {number}
    </a>
}