import React from 'react';
import './ResultsRepos.css';
import SimpleCard from './Card';

const ResultRepos = (props : any) => {
    const { repositories } = props;
    console.log(repositories);
    const listRepositories = repositories.length > 0 && 
     repositories.map((el:any, index: number) => 
     
     <SimpleCard 
        className = "card"
        name = {el.name}
        index = {el.number} 
        key = {el.id} 
        url = {el.html_url} 
        creator = {el.owner.login}
        description = {el.description}/>);
        
        console.log(listRepositories + ' here');

    return (
        <>
        <ul className="repoList" onScroll={props.handleScroll}>
            {listRepositories}
        </ul>
        </>
    )
}


export default ResultRepos;

//<li>{ el.html_url }</li>