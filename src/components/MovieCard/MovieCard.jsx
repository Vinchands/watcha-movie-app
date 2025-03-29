import './MovieCard.css'

export default function MovieCard({ movie }) {
    
    return (
        <div className='movie-card d-flex col-6 col-md-3 mb-3 p-3' title={ movie.original_title }>
            <div className='flex-fill align-items-center text-white bg-dark'>
                <img className='movie-poster img-fluid' src={ import.meta.env.VITE_TMDB_API_IMGURL + '/' + movie.poster_path } alt={ movie.original_title } />
                <div className='p-2'>
                    <h5 className='movie-title text-center text-truncate mt-3' title={ movie.original_title }>{ movie.original_title }</h5>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                        <span className='fst-italic' title={ `Average rating: ${movie.vote_average}` }>
                            <i className='bi bi-star-fill'></i>
                            &nbsp;{ Math.floor(10*movie.vote_average)/10 }
                        </span>
                        <span className='fw-bold' title={ `Release date: ${movie.release_date}` }>{ movie.release_date }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
