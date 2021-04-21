import React from "react";
import PropTypes from "prop-types";

// state를 필요로 하지 않을때는 class로 정의하지 않아도 된다
function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

// validation
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;