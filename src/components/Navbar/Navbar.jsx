export default function Navbar() {
    return (
        <nav className='nav gap-2 mx-auto mx-md-0 ms-md-auto'>
            <a href='' className='nav-item btn fw-semibold text-decoration-none text-white border-bottom border-1 rounded-0'>Popular</a>
            <a href='' className='nav-item btn fw-semibold text-decoration-none text-white border-bottom border-1 rounded-0'>Trending</a>
            <div className='dropdown'>
                <button href='' className='nav-item btn dropdown-toggle fw-semibold text-decoration-none text-white border-bottom border-1 rounded-0' data-bs-toggle='dropdown' data-bs-target='#category-dropdown'>Categories</button>
                <div className='dropdown-menu dropdown-menu-dark' id='category-dropdown'>
                    <a href='' className='dropdown-item'>Action</a>
                    <a href='' className='dropdown-item'>Adventure</a>
                    <a href='' className='dropdown-item'>Comedy</a>
                    <a href='' className='dropdown-item'>Drama</a>
                    <a href='' className='dropdown-item'>Family</a>
                    <a href='' className='dropdown-item'>Fantasy</a>
                    <a href='' className='dropdown-item'>Horror</a>
                    <a href='' className='dropdown-item'>Mystery</a>
                    <a href='' className='dropdown-item'>Romance</a>
                    <a href='' className='dropdown-item'>Science Fiction</a>
                    <a href='' className='dropdown-item'>Thriller</a>
                    <a href='' className='dropdown-item'>War</a>
                </div>
            </div>
            <a href='' className='nav-item btn fw-semibold text-decoration-none text-white border-bottom border-1 rounded-0'>Log In</a>
            <a href='' className='nav-item btn btn-danger fw-semibold text-decoration-none text-white rounded-pill glow-danger'>Register Now</a>
        </nav>
    )
}
