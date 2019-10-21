import React from 'react';
import {Link} from 'react-router-dom'
import ApiRequestService from '../sevices/services';
import ByGenre from './ByGenre'
import './Home.css'

class Home extends React.Component{
    state ={
        movies: []
    }
    componentDidMount(){
        this.Movies()
    }
    
    Movies=()=>{
            ApiRequestService.getMovies()
            .then(data =>{this.setState({
                movies: data.results})
                console.log ({data})
            })
            
        }
    render(){
        return(
            <div>
            <h4>Select your movies by genre</h4>
            <ByGenre/>
            <div className='homeMovies'>
                {this.state.movies.map(movie =>(
                    <div className='peliculas'>
                        
                        <Link to={'/Movie/' + movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
                        </Link>
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
                ))}
            </div>
            </div>
        ) 
    }
    
}
export default Home;