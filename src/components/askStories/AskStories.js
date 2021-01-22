import React,{useState,useEffect} from 'react';
import AskStoriesCards from './AskStoriesCards';
import Loading from '../../assets/Loading.gif';


const AskStories=() =>{
    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(false);
    const [offset,setOffset]=useState(0);
    const [limit,setLimit]=useState(10);

    const handleClick=()=>{
      setOffset(offset+10);
      setLimit(limit+10);
    }


    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
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
          <h2 style={{padding:'1rem'}}>Ask Stories...</h2>
          <div className="card-design">
          <div className="vertical"/>
          <div className="cards-column">
            {data && data.splice(offset,limit).map((item,index) => <AskStoriesCards key={index} id={item}/>)}
          {data && <button className="load_more" onClick={handleClick}>Load more...</button>}
          </div>
          </div>
        </div>)}
}

export default AskStories
