import React, { useEffect }  from 'react';
import { useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ResultRepos from './ResultsRepos';



const Searchbar = (props : object) => {
    const firstRenderRef = useRef<boolean>(true);
    const [search, setSearchInput] = useState<string>('');
    const [repositories, setRepositories] = useState<Array<object>>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    
    
    document.addEventListener('scroll', function() {
        if(
            Math.ceil(document.body.offsetHeight - (window.scrollY + window.innerHeight)) < 10 && loading
        ){
            setLoading(false); 
            setPageNumber(prev => prev + 1);
        }
    });

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
          } else {
            requestGetRepositories(pageNumber);
            window.scrollTo(0, window.scrollY - 100);
            setLoading(true);
          }
    },[pageNumber]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    
    const checkSearch = (searchWord:string) => {
        if (searchWord && search.trim()){
            return true
        }
    }

    const requestGetRepositories = async (pageNumber: number) => {
        if(loading){
            await fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=15&page=${pageNumber}`)
            .then(res => res.json())
            .then(data => {
                if(data.items){
                    setRepositories(reps => [...reps, ...data.items]);
                } else {
                    throw new Error('To many requests, wait a minute');
                }
                    
            }).catch(() => alert('too much requests, fix it'));
        }
        
    }

    return (
        <div> 
            <form autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    placeholder="Write repository name" 
                    value={search} 
                    onChange={handleChange}
                    required/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() =>{
                        if(checkSearch(search)){
                            setRepositories([]);
                            requestGetRepositories(pageNumber);
                        } else {
                            setSearchInput('Dont be a fool');
                        }
                    }}>
                    Let's roll
                </Button>
            </form>
            <ResultRepos repositories = {repositories}/>
        </div>
    )
}

export default Searchbar;