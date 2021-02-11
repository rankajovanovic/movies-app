import http from './BaseService';

class MovieService {
    async getAll(){
        try {
            const response = await http.get('movies')    
            return response.data     
        } catch (error) {
            console.log(error)
        }
        
    }

   add(data) {
        http.post('movies', data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
   }
  
}
const movieService = new MovieService();
export default movieService;