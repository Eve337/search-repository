import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";

const RepositoryPage = (props: any) => {
  const [currRepInfo, setCurrRepInfo] = useState<{
    owner?: any;
    property?: any;
  }>({});
  const { username, reponame } =
    useParams<{ username?: string; reponame?: string }>();
  const [countOfLoads, setCountOfLoads] = useState(0);
  //console.log(username, reponame,props);

  const getCurrentRepository = async (user: any, rep: any) => {
    await fetch(`https://api.github.com/repos/${user}/${rep}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrRepInfo({ ...data });
        console.log(currRepInfo, "state");
        setCountOfLoads((prev) => prev + 1);
      });
  };

  useEffect(() => {
    if (countOfLoads < 1) {
      getCurrentRepository(username, reponame);
    }
  });

  if (Object.keys(currRepInfo).length !== 0) {
    return (
      <>
        <AdditionalInfo currRepInfo={currRepInfo} />
      </>
    );
  } else {
    return <>Loading</>;
  }
};

export default RepositoryPage;
