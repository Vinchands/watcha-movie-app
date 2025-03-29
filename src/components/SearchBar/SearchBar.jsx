import { useState } from 'react'

export default function SearchBar({ onSearch }) {
    
    const [query, setQuery] = useState('')
    
    function handleKeyDown(e) {
        if (e.key === 'Enter') onSearch(query)
    }
    
    return (
        <div className='input-group flex-grow-1 gap-0 mt-5'>
            <span className='input-group-text bg-white border-0 rounded-start-pill'>
                <i className='bi bi-search'></i>
            </span>
            <input type='text' 
                className='flex-grow-1 fw-semibold bg-white border-0' 
                value={ query } 
                onChange={ e => setQuery(e.target.value) } 
                onKeyDown={ e => handleKeyDown(e) }
                placeholder='Search a movie...' />
            <button className='btn btn btn-danger rounded-end-pill' onClick={ () => onSearch(query) }>Search</button>
        </div>
    )
}
