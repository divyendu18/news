import React,{useState,useEffect} from 'react';
import BestStoriesCard from './BestStoriesCard';

const BASE_URL="https://hacker-news.firebaseio.com/v0/item/";

const BestStoriesCards=(props)=> {
    const [news,setNews]=useState();

    useEffect(() => {
        fetch(`${BASE_URL}${props.id}.json?print=pretty`)
          .then(res => res.json())
          .then(
            (result) => {
            setNews(result);
          })
          .catch((error) =>{
            console.log(error.message);
          });
      },[props.id]);

    return (
        <div>
            {news && <BestStoriesCard key={news.id} title={news.title} author={news.by} url={news.url} time={news.time}/>}
        </div>
    )
}

export default BestStoriesCards;
