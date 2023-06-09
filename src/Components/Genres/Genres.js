import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    //eslint-disable-next-line
  }, []);

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  return (
    <>
      <div style={{ padding: "6px 0" }}>
        {selectedGenres &&
          Object.values(selectedGenres).map((genre) => (
            <Chip
              key={genre.id}
              style={{ margin: 2 }}
              label={genre.name}
              clickable
              size="small"
              color="primary"
              onDelete={() => handleRemove(genre)}
            />
          ))}
        {genres &&
          Object.values(genres).map((genre) => (
            <Chip
              key={genre.id}
              style={{ margin: 2 }}
              label={genre.name}
              clickable
              size="small"
              onClick={() => handleAdd(genre)}
            />
          ))}
      </div>
    </>
  );
};

export default Genres;
