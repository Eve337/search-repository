import React from 'react';
import './ResultsRepos.css';
import SimpleCard from './Card';

const ResultRepos = (props : any) => {
    const { repositories } = props;
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
        

    return (
        <div className="scroll" onScroll={(e) => props.handleScroll(e)} >
            <ul className="repoList">
                {listRepositories}
            </ul>
        </div>
    )
}


export default ResultRepos;

//<li>{ el.html_url }</li>