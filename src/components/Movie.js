import React from "react";
// import React, { Component } from "react"; // for ClassComponent method un-comment this
import { useParams } from "react-router-dom";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrum from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Image
import NoImage from "../images/no_image.jpg";

//API
// import API from "../API"; // for ClassComponent method un-comment this

// Using functional components method
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrum movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

// Using Class components method
/*
class Movie extends Component {
  state = {
    movie: {},
    loading: true,
    error: false,
  };

  fetchMovie = async () => {
    const { movieId } = this.props.params;

    try {
      this.setState({ error: false, loading: true });

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      // Get directors only
      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );

      this.setState({
        movie: {
          ...movie,
          actors: credits.cast,
          directors,
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movie, loading, error } = this.state;

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    return (
      <>
        <BreadCrum movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Grid header="Actors">
          {movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
        </Grid>
      </>
    );
  }
}

const MovieWithParams = (props) => <Movie {...props} params={useParams()} />;

export default MovieWithParams;*/
export default Movie;