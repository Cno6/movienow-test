import axios from 'axios';

export async function getAllMovie() {
  try {
    const response = await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMovie(movieId) {
  try {
    const response = await axios.get(
      `https://floating-sierra-20135.herokuapp.com/api/movie/${movieId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
