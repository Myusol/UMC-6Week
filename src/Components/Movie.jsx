import React from "react";
import { MovieContents, MoviePoster, MovieInfo, MovieDetail } from './Movie.style'
import { useNavigate } from 'react-router-dom';

export default function Movie(props) {
    const navigate = useNavigate();

    const onClickMovie = () => {
      // Movie를 클릭했을 때, 해당 영화의 상세 페이지로 이동합니다.
      navigate(`/Movies/${props.title}`, {
        state: {
          title: props.title,
          poster: props.poster
        },
      });
    };

    return (
        <MovieContents onClick={onClickMovie}>
            <MoviePoster src={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={`${props.title} 포스터`} />
            <MovieInfo>
                <div className="movie-title">{props.title}</div>
                <div className="movie-rate">{props.voteAverage}</div>
            </MovieInfo>
            <MovieDetail>
                <div className="detail-title">{props.title}</div>
                <div className="detail-overview">{props.overview}</div>
            </MovieDetail>
        </MovieContents>
    );
};