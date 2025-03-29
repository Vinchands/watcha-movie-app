export default function SearchStatus({ query, results }) {
    return (
        <div className='text-white'>
            <h3 className='fw-semibold'>Search results for "{ query }"</h3>
            <h5 className='fw-normal fst-italic'>Showing { `${results} result${results === 1? '' : 's'}` }</h5>
        </div>
    )
}