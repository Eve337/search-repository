import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories } from "./actions/repos";
import { RootState } from "./index";
import { Repo } from "./repo/Repo";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { setCurrentPage, setReposClear } from "./reducers/reposReducer";
import "./Search.css";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Search: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();
  const repos = useSelector((state: RootState) => state.repos.items);
  const count = useSelector((state: RootState) => state.repos.currentPage);

  function scrollHandler() {
    console.log(
      "Formula:" + Math.ceil(document.body.offsetHeight - (window.scrollY + window.innerHeight))
    );

    if (Math.ceil(document.body.offsetHeight - (window.scrollY + window.innerHeight)) < 100) {
      console.log("here");
      dispatch(setCurrentPage(1));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleClick = () => {
    dispatch(setReposClear());
    dispatch(fetchRepositories(searchString));
  };

  const checkSearch = (searchWord: string) => {
    if (searchWord && searchWord.trim()) {
      return true;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    console.log("added");
    return () => {
      console.log("removed");
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchRepositories(searchString, count, 15));
  }, [count]);

  return (
    <>
      <div className='searchWrapper'>
        <div className='wrapper-favourite-link'>
          <NavLink className='FavouriteLink' to={`/Favourite`}>
            <FavoriteIcon />
          </NavLink>
        </div>
        <div className='temp2'>
          <h1>Search</h1>
          <form autoComplete='off'>
            <TextField
              value={searchString}
              onChange={handleChange}
              id='standard-basic'
              placeholder='Write repository name'
              required
            />
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                if (checkSearch(searchString)) {
                  handleClick();
                } else {
                  setSearchString("Dont be a fool");
                }
              }}>
              Search
            </Button>
          </form>
        </div>
      </div>
      {repos.map((repo: any) => (
        <Repo repo={repo} />
      ))}
    </>
  );
};

export default Search;
