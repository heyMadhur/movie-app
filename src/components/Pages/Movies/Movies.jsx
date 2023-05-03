import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
import Genres from "../../Genre/Genres";
import useGenre from "../../../hooks/useGenre";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    // console.log(data);

    setContent(data.results);
    setNumOfPages(data.total_pages);

    //
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

  return (
    <>
      <span className="pageTitle">Movies</span>

      <Genres
        type={"movie"}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

      <div className="movies">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              date={c.first_air_date || c.release_date}
              media_type={"movie"}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </>
  );
};

export default Movies;
