import axios from 'axios';

class ApiRequestService {

    async getMovies(){
        
            const {data} = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=47ce42f4cd0ee261f3474783a3783198')
            return data;        
    }
    async getUpcomingMovies(pages=1){
        
        const {data} = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=47ce42f4cd0ee261f3474783a3783198')
        return data;        
    }
    async getMovieDetail(movieId){
        
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=47ce42f4cd0ee261f3474783a3783198&language=en-US`)
        return data;    
    }    
    async getMovieByGenres(movieid){
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=47ce42f4cd0ee261f3474783a3783198&sort_by=popularity.desc&with_genres=${movieid}`)
        // for (const genre of genres.id) {
        //   url=url+genre.id+',';
        // }
        return data;
    }
    async getTvSeries(){
        const {data} = await axios.get('https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=47ce42f4cd0ee261f3474783a3783198');
        return data;
    }
}
export default new ApiRequestService();