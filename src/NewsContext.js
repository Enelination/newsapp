import React, { createContext, useEffect, useState } from "react";
import axios from "axios";



export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();


  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&from=2021-01-01&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
