import React, { useEffect }  from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ResultRepos from './ResultsRepos';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Searchbar = (props : object) => {
    const classes = useStyles();
    const [search, setSearchInput] = useState('');
    const [repositories, setRepositories] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);



    useEffect(()=> {

    }, [pageNumber])

    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
    }
    const handleClick = async () => {
        await fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars`)
        .then(res => res.json())
        .then(data => {
            setRepositories(data);
            
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
                    onClick={handleClick}>
                    Lets roll
                </Button>
            </form>
            <ResultRepos repositories = {repositories} />
        </div>
    )
}

export default Searchbar;