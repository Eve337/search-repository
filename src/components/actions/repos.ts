import axios from "axios";
import { Dispatch } from "redux";
import { setFetchError, setIsFetching, setRepos, setCurrRepo } from "../reducers/reposReducer";
import { RepositoryAction } from "../types/types";

export const fetchRepositories = (search = "stars:%3E1", currentPage = 1, perPage = 15) => {
  if (search === "") {
    search = "stars:&3E1";
  }
  return async (dispatch: Dispatch<RepositoryAction>) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setRepos(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 2000);
    }
  };
};

export const fetchCurrRepository = (user: string | undefined, rep: string | undefined) => {
  return async (dispatch: Dispatch<RepositoryAction>) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(`https://api.github.com/repos/${user}/${rep}`);
      dispatch(setCurrRepo(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 2000);
    }
  };
};
