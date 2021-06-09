import { RepositoryAction, RepositoryActionTypes, TypeState } from "../types/types";

const defaultState: TypeState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
  isFetchError: false,
  currentRepo: {},
};

export default function repositoriesReducer(state = defaultState, action: RepositoryAction) {
  switch (action.type) {
    case RepositoryActionTypes.SET_REPOS:
      return {
        ...state,
        items: state.items.concat(action.payload.items),
        totalCount: action.payload.total_count,
        isFetching: false,
      };
    case RepositoryActionTypes.SET_CURR_REPO:
      return {
        ...state,
        currentRepo: action.payload,
        isFetching: false,
      };
    case RepositoryActionTypes.SET_REPOS_CLEAR:
      return {
        ...state,
        items: [],
        totalCount: 0,
        isFetching: false,
      };
    case RepositoryActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case RepositoryActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + action.payload,
      };
    case RepositoryActionTypes.SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };

    default:
      return state;
  }
}

export const setRepos = (repos: any[]) => ({
  type: RepositoryActionTypes.SET_REPOS,
  payload: repos,
});
export const setIsFetching = (bool: boolean) => ({
  type: RepositoryActionTypes.SET_IS_FETCHING,
  payload: bool,
});
export const setCurrentPage = (page: number) => ({
  type: RepositoryActionTypes.SET_CURRENT_PAGE,
  payload: page,
});
export const setFetchError = (bool: boolean) => ({
  type: RepositoryActionTypes.SET_FETCH_ERROR,
  payload: bool,
});
export const setReposClear = () => ({ type: RepositoryActionTypes.SET_REPOS_CLEAR });
export const setCurrRepo = (repo: object) => ({
  type: RepositoryActionTypes.SET_CURR_REPO,
  payload: repo,
});
