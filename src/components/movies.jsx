/*===========================================
            components/movies.jsx
===========================================*/
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {

   state = {
      movies: getMovies()
   };

   handleDelete = (movie) => {
      console.log(movie);
      const newMovies = this.state.movies.filter(item => item._id !== movie._id);
      this.setState({movies: newMovies});
   };

   render() {
      if (this.state.movies.length === 0) {
         return (
            <div className="mt-4">
               <h2 className="text-center">There are no movies in the database!</h2>
            </div>
         );

      } else {
         return (
            <div className="mt-4">
               <h2 className="text-center mb-3">Showing {this.state.movies.length} movies in the database</h2>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                           <td>{movie.title}</td>
                           <td>{movie.genre.name}</td>
                           <td>{movie.numberInStock}</td>
                           <td>{movie.dailyRentalRate}</td>
                           <td>
                              <button
                                 className="btn btn-danger btn-sm"
                                 onClick={() => this.handleDelete(movie)}>
                                 Delete
                           </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         );
      }
   }
}

export default Movies;