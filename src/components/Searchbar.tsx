import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ResultRepos from "./ResultsRepos";

const Searchbar = (props: any) => {
  const firstRenderRef = useRef<boolean>(true);
  const [search, setSearchInput] = useState<string>("");
  const [repositories, setRepositories] = useState<Array<unknown>>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCountPages, setTotalCountPages] = useState<number>(0);

  function scrollHandler() {
    console.log(
      "Formula:" +
        Math.ceil(
          document.body.offsetHeight - (window.scrollY + window.innerHeight)
        )
    );
    console.log("Loading:" + loading);
    console.log(totalCountPages, pageNumber);
    if (
      Math.ceil(
        document.body.offsetHeight - (window.scrollY + window.innerHeight)
      ) < 100 &&
      loading &&
      totalCountPages !== pageNumber
    ) {
      setLoading(false);
      setPageNumber((prev) => prev + 1);
    }
  }

  /*document.addEventListener('scroll', function() {
        if(
            Math.ceil(document.body.offsetHeight - (window.scrollY + window.innerHeight)) < 10 && loading && (totalCountPages !== pageNumber)
        ){
            setLoading(false); 
            setPageNumber(prev => prev + 1);
        }
    });*/

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    console.log("added");
    return () => {
      console.log("removed");
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      requestGetRepositories(pageNumber);
      window.scrollTo(0, window.scrollY - 100);
      setLoading(true);
    }
  }, [pageNumber]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  /*const evaluations = (number:number) => {
        setTotalCountPages(Math.ceil(number / 15));
        return totalCountPages;
    }*/

  const checkSearch = (searchWord: string) => {
    if (searchWord && search.trim()) {
      return true;
    }
  };

  const requestGetRepositories = async (pageNumber: number) => {
    if (loading) {
      await fetch(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&per_page=15&page=${pageNumber}`
      )
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setTotalCountPages(
            (prev) => (prev = Math.ceil(data.total_count / 15))
          );
          //console.log('total count:' + data.total_count)
          //console.log('total pages:' + totalCountPages)
          if (data.items) {
            setRepositories((reps) => [...reps, ...data.items]);
          } else {
            throw new Error("Too many requests, wait a minute");
          }
        })
        .catch(() => alert("Too many requests, wait a minute"));
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <form autoComplete='off'>
        <TextField
          id='standard-basic'
          placeholder='Write repository name'
          value={search}
          onChange={handleChange}
          required
        />
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            if (checkSearch(search)) {
              setRepositories([]);
              requestGetRepositories(pageNumber);
            } else {
              setSearchInput("Dont be a fool");
            }
          }}
        >
          Search
        </Button>
      </form>
      <ResultRepos repositories={repositories} />
    </div>
  );
};

export default Searchbar;
