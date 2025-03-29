import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import Alert from '@/components/Alert/Alert'
import HeroSection from '@/components/HeroSection/HeroSection'
import SearchStatus from '@/components/SearchStatus/SearchStatus'
import SearchBar from '@/components/SearchBar/SearchBar'
import MovieCard from '@/components/MovieCard/MovieCard'
import Pagination from '@/components/Pagination/Pagination'
import { getPopularMovies, getMoviesSpecific } from '@/services/Utils'
import { useState, useEffect } from 'react'
import './MovieApp.css'

export default function MovieApp() {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    
    async function foo(page = 1, query = '') {
        try {
            if (query) {
                const movies = await getMoviesSpecific('/search/movie', { page: page, query: searchQuery })
                setMovies(movies.data.results)
                setTotalPages(movies.data.total_pages)
                setLoading(false)
            }
            
            else {
                const movies = await getPopularMovies({ page: page })
                setMovies(movies.data.results)
                setTotalPages(movies.data.total_pages)
                setLoading(false)
            }
            
        }
        
        catch (err) {
            console.error('Error fetching data', err)
        }
    }
    
    function handleSearch(query) {
        setSearchQuery(query)
        setCurrentPage(1)
    }
    
    useEffect(() => {
        setLoading(true)
        foo(currentPage, searchQuery)
    }, [currentPage, searchQuery])
    
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <Alert>
                <span className='fw-semibold'>Welcome! </span>
                Please <a href='' className='text-decoration-none'>register</a> or <a href='' className='text-decoration-none'>log in</a> with your account to start watching movies.
            </Alert>
            <HeroSection>
                <h1 className='h1 fw-bold text-white'>Popular</h1>
                <h3 className='h3 fst-italic'>Our recommendation movies for you. Discover more.</h3>
                <SearchBar onSearch={ handleSearch } />
            </HeroSection>
            <div className='container mt-5'>
                {
                    searchQuery && 
                    <SearchStatus query={ searchQuery } results={ movies.length } />
                }
                <div className='movie-row row justify-content-center gap-3'>
                    { 
                        loading
                        ? <h1 className='text-white'>Loading...</h1>
                        : movies.map((movie, i) => (
                            <MovieCard key={ i } movie={ movie } />
                        ))
                    }
                </div>
            </div>
            {
                movies.length &&
                <div className='d-flex justify-content-center mb-3'>
                    <Pagination 
                        currentPage={ currentPage }
                        totalPages={ totalPages }
                        onPageChange={ page => setCurrentPage(page) } />
                </div>
            }
        </>
    )
}
