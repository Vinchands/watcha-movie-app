import './HeroSection.css'

export default function HeroSection({ children }) {
    
    return (
        <div className='container-fluid col-12 col-sm-10 hero-section bg-secondary bg-opacity-50 text-white rounded-0 mt-3 p-5'>
            { children }
        </div>
    )
}
