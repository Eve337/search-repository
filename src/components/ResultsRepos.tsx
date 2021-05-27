import React from 'react';
import { useState } from 'react';
import './ResultsRepos.css';
import SimpleCard from './Card';

const ResultRepos = (props : any) => {
    const { repositories } = props;
    console.log(repositories);
    const listRepositories = repositories.length !== 0 ? 
     repositories.items.map((el:any, index: number) => 
     
     <SimpleCard 
        className = "card"
        name = {el.name}
        index = {el.number} 
        key = {el.id} 
        url = {el.html_url} 
        creator = {el.owner.login}
        description = {el.description}/>) : <li>No repositories was found</li>

    return (
        <>
        <ul className="repoList">
            {listRepositories}
        </ul>
        
        </>
    )
}

export default ResultRepos;

//<li>{ el.html_url }</li>