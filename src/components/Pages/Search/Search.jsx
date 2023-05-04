import React, { useEffect, useState } from "react";
import { Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import CustomPagination from "../../Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import SearchBar from "../../SearchBar/SearchBar";

const Search = () => {

  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();


  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearch();
  };

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      palette: {
        primary: "#fff",
      },
    },
  });

  const fetchSearch= async()=>{
    const {data}= await axios.get(
      `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    )
    setContent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(()=>{
    window.scroll(0,0);
    fetchSearch()

  },[type, page])

  return (
    <>

      <SearchBar handleSearch={handleSearch} searchText={searchText} setSearchText={setSearchText} />

      <ThemeProvider theme={darkTheme}>
        <Tabs
          value={type}
          indicatorColor="secondary"
          textColor="white"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{paddingBottom: 5}}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>

      <div className="search">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              date={c.first_air_date || c.release_date}
              media_type={type?"tv":"movie"}
              vote_average={c.vote_average}
            />
          ))}
          {/* {searchText && !content && (type? <h2>No Series Found</h2> : <h2>No Movies Found </h2>)} */}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </>
  );
};

export default Search;
