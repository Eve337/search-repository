export interface TypeState {
  items: any[];
  isFetching: boolean;
  currentPage: number;
  perPage: number;
  totalCount: number;
  isFetchError: boolean;
  currentRepo: object;
}

export enum RepositoryActionTypes {
  SET_REPOS = "SET_REPOS",
  SET_IS_FETCHING = "SET_IS_FETCHING",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_FETCH_ERROR = "SET_FETCH_ERROR",
  SET_REPOS_CLEAR = "SET_REPOS_CLEAR",
  SET_CURR_REPO = "SET_CURR_REPO",
}

export interface SetReposAction {
  type: RepositoryActionTypes.SET_REPOS;
  payload: any;
}
export interface SetReposFetchingAction {
  type: RepositoryActionTypes.SET_IS_FETCHING;
  payload: any;
}
export interface SetCurrentPageAction {
  type: RepositoryActionTypes.SET_CURRENT_PAGE;
  payload: any;
}
export interface SetFetchErrorAction {
  type: RepositoryActionTypes.SET_FETCH_ERROR;
  payload: any;
}
export interface SetReposClearAction {
  type: RepositoryActionTypes.SET_REPOS_CLEAR;
}
export interface SetCurrentRepositoryAction {
  type: RepositoryActionTypes.SET_CURR_REPO;
  payload: any;
}

export type RepositoryAction =
  | SetReposAction
  | SetReposFetchingAction
  | SetCurrentPageAction
  | SetFetchErrorAction
  | SetReposClearAction
  | SetCurrentRepositoryAction;
