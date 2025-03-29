import fetchByEndpoint from './ServiceProvider'

export async function getMoviesSpecific(endpoint, options = {}) {
    
    return await fetchByEndpoint(endpoint, options)
}

export async function getPopularMovies(options = { page: 1 }) {
    
    const endpoint = '/discover/movie'
    
    return fetchByEndpoint(endpoint, options)
}

export async function getTrendingMovies(options = { time_window: 'day' }) {
    
    const endpoint = `/trending/movie/`
    
    return fetchByEndpoint(endpoint, options)
}

// TODO: Add more useful functions here...
