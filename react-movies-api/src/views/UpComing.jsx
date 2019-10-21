import React from 'react';
import ApiRequestService from '../sevices/services';
import './UpComing.css'


class UpComing extends React.Component{
    state ={
        movies: []
    }
    componentDidMount(){
        this.upComingMovies()
    }
    upComingMovies=()=>{
        ApiRequestService.getUpcomingMovies()
        .then(data =>{this.setState({
            movies: data.results})
            console.log ({data})
        })
        
    }
    render(){
        return(
            <div className="UpComing">
                <h2>Soon in cinemas</h2>
                <h4>Be ready to get your ticket</h4>
                <div className="homeMovies">
                    
                    {this.state.movies.map(movie =>(
                        <div className="peliculas">
                            
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
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
export default UpComing;