import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASEURL = import.meta.env.VITE_TMDB_API_BASEURL

export default async function fetchByEndpoint(endpoint, options = {}) {
    
    // * The endpoint must start with a slash so that it can addresses to the correct API endpoint
    if (!endpoint.startsWith('/')) endpoint = '/' + endpoint
    
    const queryParams = new URLSearchParams(options).toString()
    
    const fullURL = `${BASEURL}${endpoint}?api_key=${API_KEY}`.concat(options? `&${queryParams}` : '')
    
    // console.log(fullURL)
    
    try {
        const response = await axios.get(fullURL)
        return response
    }
    
    catch (err) {
        console.error('Error fetching data', err)
        throw err
    }
}
