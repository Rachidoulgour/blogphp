import React from 'react'
import ApiRequestService from '../sevices/services';
import './ByGenre.css'


class ByGenre extends React.Component{
    constructor(props) {
	super(props);
	this.state = {
        genres: [
            {
                id: 28,
                name: "Acción"
            }
        ],
        movies: []
	};
}
componentDidMount() {
    
        
	this.setState({
		genres: [
			{
    id: 28,
    name: "Acción"
    },
    {
    id: 12,
    name: "Aventura"
    },
    {
    id: 16,
    name: "Animación"
    },
    {
    id: 35,
    name: "Comedia"
    },
    {
    id: 80,
    name: "Crimen"
    },
    {
    id: 99,
    name: "Documental"
    },
    {
    id: 18,
    name: "Drama"
    },
    {
    id: 10751,
    name: "Familia"
    },
    {
    id: 14,
    name: "Fantasía"
    },
    {
    id: 36,
    name: "Historia"
    },
    {
    id: 27,
    name: "Terror"
    },
    {
    id: 10402,
    name: "Música"
    },
    {
    id: 9648,
    name: "Misterio"
    },
    {
    id: 10749,
    name: "Romance"
    },
    {
    id: 878,
    name: "Ciencia ficción"
    },
    {
    id: 10770,
    name: "Película de TV"
    },
    {
    id: 53,
    name: "Suspense"
    },
    {
    id: 10752,
    name: "Bélica"
    },
    {
    id: 37,
    name: "Western"
    }
		]
	});
}
// componentDidUpdate(){
//         this.selectGenre();
//     }
// componentDidMount(){
//         this.selectGenre()
//     }
selectGenre=(e)=>{
    const movieid = e.target.value
    console.log(movieid)
    ApiRequestService.getMovieByGenres(movieid)
    
        .then(data =>{this.setState({
                movies: data.results})
                console.log ({data})
            })
    
}

    render(){
        const {genres} = this.state;
        console.log(this.state)
        let genresList = genres.map(genre=>{
            return (
                
                <option value={genre.id}>{genre.name}</option>   
            )
            
        })
        
        return(
            <div>
                <select onChange={(e)=>this.selectGenre(e)}>
                    {genresList}
                </select>
                <div  className='homeMovies'>
                    
                        {this.state.movies.map(movie =>(
                            <div className='peliculas'>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
                                <div>

                                </div>
                                <div>
                                    {movie.title}
                                </div>
                                <div>
                                    <span>Release date: </span>{movie.release_date}
                                </div>
                                <div>
                                    <span>Vote avrage: </span>{movie.vote_average}
                                </div>
                                </div>
                            </div>
                        ))}
                    
                </div>
		    </div>
        )

    }
}
export default ByGenre;