export default function Alert({ children }) {
    
    return (
        <div className='p-3'>
            <div className='alert alert-secondary alert-dismissible rounded-0 fade show mx-auto' role='alert'>
                <button type='button' className='btn-close' data-bs-dismiss='alert'></button>
                { children }
            </div>
        </div>
    )
}
