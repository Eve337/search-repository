import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdditionalInfo from "./AdditionalInfo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { fetchCurrRepository } from "../actions/repos";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Card.css";

const RepositoryPage = (props: any) => {
  const dispatch = useDispatch();
  const currRepInfo = useSelector((state: RootState) => state.repos.currentRepo);
  const { username, reponame } = useParams<{ username?: string; reponame?: string }>();

  useEffect(() => {
    dispatch(fetchCurrRepository(username, reponame));
  }, []);

  if (Object.keys(currRepInfo).length !== 0) {
    return (
      <>
        <div className='wrapperFlex'>
          <div className='imgArrow'>
            <ArrowBackIcon onClick={() => props.history.goBack()} />
          </div>
          <h1 className='titleRep'>Repository Info</h1>
        </div>
        <AdditionalInfo currRepInfo={currRepInfo} />
      </>
    );
  } else {
    return <>Loading</>;
  }
};

export default RepositoryPage;
