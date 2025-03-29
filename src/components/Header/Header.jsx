export default function Header({ children }) {

    return (
        <div className='container-fluid bg-dark mt-0'>
            <div className='navbar text-white gap-3 px-3'>
                <span className='navbar-brand text-white fs-2'>
                    <i className='bi bi-film'></i>&nbsp;
                    <span className='fw-bold text-danger'>
                        W<span className='fw-light text-white'>atcha</span>!
                    </span>
                </span>
                <span className='d-flex gap-2 ms-auto'>
                    <span className='d-inline fs-6 fw-light'>
                        Powered by
                    </span>
                    <a href='https://themoviedb.org' target='_blank'>
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='TMDB Logo' width={132} />
                    </a>
                </span>
                { children }
            </div>
        </div>
    )
}
