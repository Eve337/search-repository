import React from "react";
import "./ResultsRepos.css";
import SimpleCard from "./Card";

const ResultRepos: React.FC<{ repositories: object }> = (props: any) => {
  const { repositories } = props;
  const listRepositories =
    repositories.length > 0 &&
    repositories.map((el: any, index: number) => (
      <SimpleCard
        className='card'
        name={el.name}
        index={el.number}
        key={el.id}
        url={el.html_url}
        creator={el.owner.login}
        description={el.description}
      />
    ));

  return (
    <div>
      <ul className='repoList'>{listRepositories}</ul>
    </div>
  );
};

export default ResultRepos;
