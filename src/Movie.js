import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state를 필요로 하지 않을때는 class로 정의하지 않아도 된다
function Movie({id, year, title, summary, poster}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

// validation
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;