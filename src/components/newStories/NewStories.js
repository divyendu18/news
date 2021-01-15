import React,{useState,useEffect} from 'react';
import NewStoriesCards from './NewStoriesCards';
import Loading from '../../assets/Loading.gif';
import './Card.css';


const NewStories=() =>{
    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(false);
    const [offset,setOffset]=useState(0);
    const [limit,setLimit]=useState(10);

    const handleClick=()=>{
      setOffset(offset+10);
      setLimit(limit+10);
    }

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
          .then(res => res.json())
          .then(
            (result) => {
            setLoading(true);
            setData(result);
          })
          .catch((error) =>{
            console.log(error.message);
          });
      },[]);

      if(!isLoading){
        return(
        <><img src={Loading} alt="" className="loading"/></>)
      }else{
        return(
        <div>
          <h2 style={{padding:'1rem'}}>Recent Stories...</h2>
            {data && data.splice(offset,limit).map((item,index) => <NewStoriesCards key={index} id={item}/>)}
          {data && <button className="load_more" onClick={handleClick}>Load more...</button>}
        </div>)}
}

export default NewStories
