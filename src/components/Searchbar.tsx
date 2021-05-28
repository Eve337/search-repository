import React, { useEffect }  from 'react';
import { useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ResultRepos from './ResultsRepos';


const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));

const Searchbar = (props : object) => {
    const firstRenderRef = useRef(true);
    const classes = useStyles();
    const [search, setSearchInput] = useState('');
    const [repositories, setRepositories] = useState<Array<object>>([]);
    const [pageNumber, setPageNumber] = useState(1);
    


    useEffect(()=> {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
          } else {
            requestGetRepositories(pageNumber);
          }
    },[pageNumber]);
    

    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
    }

    const handleScroll = (e: any) => {
        console.log('working');
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        
        if (scrollHeight - scrollTop === clientHeight) {
        setPageNumber(prev => prev + 1);
            console.log('working');
        }
    }

    const requestGetRepositories = async (pageNumber: any) => {
        
        await fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=15&page=${pageNumber}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRepositories(reps => [...reps, ...data.items]);
            
            }).then(data => console.log(repositories));
        
    }
    
    console.log(search);

    return (
        <div className={classes.root}> 
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
                    onClick={() => requestGetRepositories(pageNumber)}>
                    Lets roll
                </Button>
            </form>
            <ResultRepos repositories = {repositories} handleScroll={handleScroll} />
        </div>
    )
}

export default Searchbar;