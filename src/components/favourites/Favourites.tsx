import { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";

export const Favourites: React.FC = () => {
  const [dataFavourites, setDataFavourites] = useState([]);

  useEffect(() => {
    takeDataFromLocalStorage();
  }, []);

  function handleDelete(index: any, repository: any) {
    let newList = dataFavourites;
    newList.splice(index, 1);
    localStorage.removeItem(repository.name);
    setDataFavourites([...newList]);
  }

  function takeDataFromLocalStorage() {
    const data = [] as any;
    for (const property in localStorage) {
      if (localStorage.getItem(property) !== null) {
        data.push(JSON.parse(localStorage.getItem(property) || "{}"));
      }
    }
    setDataFavourites(data);
    return data;
  }

  return (
    <div>
      {dataFavourites.map((el: any, index) => (
        <FavouriteCard {...el} handleDelete={() => handleDelete(index, el)} />
      ))}
    </div>
  );
};
