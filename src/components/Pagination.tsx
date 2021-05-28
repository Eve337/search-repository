import React from 'react';
import './pagination.css';
import { useState } from 'react';

const Pagination = (props: any) => {
    const [repositories, setRepositories] = useState([]);
    const [pages, setPages] = useState([]);
    const totalCount = props.repositories.total_count;
    const lastPage = Math.ceil(totalCount / 15);

    const handleClick = async (page: any) => {
        await fetch(`https://api.github.com/search/repositories?q=${}&sort=stars&per_page=15&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setRepositories(data);
            console.log(data);
            });
        }   

    
    const storageForPageNumber = [];

    for(let i = 1; i <= lastPage; i++){
        storageForPageNumber.push(i);
    }

    const list = storageForPageNumber.slice(0,15).map(el => <li className='pageNumber' onClick={}>
        {el}
    </li>)

    return (<>
         <ul className = 'pagination'>
             {list}
         </ul>
        </>)
}

export default Pagination;