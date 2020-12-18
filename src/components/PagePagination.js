import React from 'react'

const PagePagination = ({page, setPage}) => {
    return (
            <ul className='pagination'>
                <li className='page-item'><span aria-hidden="true">&laquo;</span></li>
                <li className="page-item">
                {page}
                </li>
            </ul>   
     
    )
}

export default PagePagination
