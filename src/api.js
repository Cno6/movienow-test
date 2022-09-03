import axios from 'axios';

export async function getAllMovieFromAPI() {
  try {
    const response = await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMovieFromAPI(movieId) {
  try {
    const response = await axios.get(
      `https://floating-sierra-20135.herokuapp.com/api/movie/${movieId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
