import React, { useEffect }  from 'react';
import { useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ResultRepos from './ResultsRepos';



const Searchbar = (props : object) => {
    const firstRenderRef = useRef(true);
    const [search, setSearchInput] = useState('');
    const [repositories, setRepositories] = useState<Array<object>>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    
    
    document.addEventListener('scroll', function(e) {
        console.log( Math.ceil(document.body.offsetHeight - (window.scrollY + window.innerHeight)));
        if(
            Math.ceil(document.body.offsetHeight - (window.scrollY + window.innerHeight)) < 10 && loading
        ){
            setLoading(false); 
           // console.log(loading);
            setPageNumber(prev => prev + 1);
            console.log('finally, only one load');
        }
    });

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
          } else {
            
            requestGetRepositories(pageNumber);
            window.scrollTo(0, window.scrollY - 100);
            console.log(loading);
            setLoading(true);
          }
    },[pageNumber]);

    const handleChange = (e: any) => {
        setSearchInput(e.target.value);
        setRepositories([]);
    }

    const handleScroll = (e: any) => {
        console.log('working 1');
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        
        if (scrollHeight - scrollTop === clientHeight) {
        setPageNumber(prev => prev + 1);
            console.log('working 2');
        }
    }

    const requestGetRepositories = async (pageNumber: any) => {
        if(loading){
            await fetch(`https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=15&page=${pageNumber}`)
            .then(res => res.json())
            .then(data => {
            console.log(data);
                    setRepositories(reps => [...reps, ...data.items]);
            }).catch((err:any) => alert('too much requests, fix it'));
        }
        
    }
    

    const handleChangeTwo = () => {
        setLoading(true);
        
    }

    return (
        <div className='ass'> 
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
            <ResultRepos repositories = {repositories} handleScroll={handleScroll} onLoad={handleChangeTwo} state={loading}/>
        </div>
    )
}

export default Searchbar;