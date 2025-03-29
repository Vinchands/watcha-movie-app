import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageLimit = 5
    const pages = []
    const halfLimit = Math.floor(pageLimit / 2)
    
    if (currentPage > halfLimit + 1) {
        pages.push(1)
        if (currentPage > halfLimit + 2) pages.push('...')
    }
    
    for (let i = Math.max(1, currentPage - halfLimit); i <= Math.min(totalPages, currentPage + halfLimit); i++) {
        pages.push(i)
    }
    
    if (currentPage < totalPages - halfLimit) {
        if (currentPage < totalPages - halfLimit - 1) pages.push('...')
        pages.push(totalPages)
    }
    
    console.log(currentPage)

    return (
        <div className='btn-group bg-dark text-danger rounded-0' role='group' aria-label='Pagination'>
            <button className='btn btn-outline-danger rounded-0'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                title='Previous'>
                <i className='bi bi-chevron-left'></i>
                <span className='d-none d-sm-inline'>Prev</span>
            </button>
            
            {pages.map((page, index) =>
                typeof page === 'number'
                ? (
                    <button key={index}
                        className={`btn ${page === currentPage ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={() => onPageChange(page)}>
                        {page}
                    </button>
                ) 
                : (
                    <button key={index} className='btn btn-outline-danger' disabled>
                        ...
                    </button>
                )
            )}
            
            <button className='btn btn-outline-danger rounded-0'
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                title='Next'>
                <span className='d-none d-sm-inline'>Next</span>
                <i className='bi bi-chevron-right'></i>
            </button>
        </div>
    )
}
