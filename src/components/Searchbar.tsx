import React, { useEffect }  from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import ResultRepos from './ResultsRepos';
import Pagination from './Pagination';


const Searchbar = (props : object) => {
    
    const [search, setSearchInput] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    let page = 1;

    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
    }
    const handleClick = async (page: any) => {
        await fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=15&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setRepositories(data);
            console.log(data);
            });
    }
    

    return (
        <div> 
            <form noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    placeholder="Write repo name" 
                    value={search} 
                    onChange={handleChange}
                    required/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleClick(page)}>
                    Lets roll
                </Button>
            </form>
            <ResultRepos repositories = {repositories} />
            <Pagination  repositories = {repositories} search = {search} clickFunc = {handleClick}/>
        </div>
    )
}

export default Searchbar;