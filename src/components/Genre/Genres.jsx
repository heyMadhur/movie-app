import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {

  const handleAdd=(g)=>{
    // console.log("Clicked");
    // console.log(g);
    setSelectedGenres([...selectedGenres, g]);
    setGenres(genres.filter((genre)=> genre.id !==g.id ));
    setPage(1);
  }

  const handleRemove= (g)=>{
    setSelectedGenres(selectedGenres.filter((selected)=> selected.id!= g.id));
    setGenres([...genres, g]);
    setPage(1);

  }
  
  
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      
      // console.log(data);
      setGenres(data.genres);
    };
    
    //   console.log(genres);
    useEffect(() => {
      fetchGenres();
      
      // This is a cleanup function that gets executed when the component is unmounted or re-rendered. In this case, the cleanup function sets the genres state of the component to an empty object. This is used to clear the genres state when the component is no longer needed, which can help prevent memory leaks or other issues in your application.
      return () => {
        setGenres([]);
      };
    }, []);
    // console.log("selected= "+selectedGenres)
    
    return (
      <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((g) => (
          <Chip
          label={g.name}
          style={{ margin: 2 }}
          clickable
          color="success"
          size="small"
          key={g.id}
          onDelete={()=>handleRemove(g)}
          />
          ))}
      {genres &&
        genres.map((g) => (
          <Chip
            label={g.name}
            style={{ margin: 2 }}
            clickable
            color="primary"
            size="small"
            key={g.id}
            on
            onClick={()=>handleAdd(g)}
          />
        ))}
    </div>
  );
};

export default Genres;
