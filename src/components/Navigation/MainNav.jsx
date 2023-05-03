import React, { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import "./MainNav.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate= useNavigate();

  useEffect(()=>{
    if(value===0){
      // navigate.pushState("/");     Do not use this
      navigate({pathname: '/'})
    }
    if(value===1){
      navigate({pathname: '/movies'})
    }
    if(value===2){
      navigate({pathname: '/series'})
    }
    if(value===3){
      navigate({pathname: '/search'})
    }
  },[value,navigate])

  return (
    <div className="bottom-nav">
      <BottomNavigation
        className="navBar"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default MainNav;
