import React from 'react';
import {Link} from 'react-router-dom'
import ApiRequestService from '../sevices/services';
import './Series.css'


class Series extends React.Component{
    state ={
        series: []
    }
    componentDidMount(){
        this.getSeries()
    }
    
    getSeries=()=>{
            ApiRequestService.getTvSeries()
            .then(data =>{this.setState({
                series: data.results})
                console.log ({data})
            })
            
        }
    render(){
        return(
            <div className="homeMovies">
            
            <div className="homeMovies">
                {this.state.series.map(serie =>(
                    <div className='peliculas'>
                        
                        <Link to={'/Serie/' + serie.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`} alt=""/>
                        </Link>
                        <div>
                        {serie.name}
                        </div>
                        <div>
                        <span>First air date: </span>{serie.first_air_date}
                        </div>
                        <div>
                            <span>Vote avrage: </span>{serie.vote_average}
                        </div> 
                    </div>
                ))}
            </div>
            </div>
        )
    }
    
}
export default Series;