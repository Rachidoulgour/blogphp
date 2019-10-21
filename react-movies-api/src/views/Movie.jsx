import React from 'react';
import ApiRequestService from '../sevices/services'

class Movie extends React.Component{
    state={
        movie: null
    }
    constructor(p) {
    super(p);
    this.componentDidMount = this.getMovie;
    this.componentDidUpdate = this.getMovie;
  }
    // componentDidUpdate(){
    //     this.getMovie(props)
    // }
    async getMovie(){
        const movieId = this.props.match.params.id;
        console.log(movieId)
        const data = await ApiRequestService.getMovieDetail(movieId)
        
        this.setState({
            movie: data,
            movieId
            })
            
        
        
    }
    

    render(){
        const movie = this.state;
        return(
            <div>
                {movie.title}
            </div>
        )
    }
    
}
export default Movie;