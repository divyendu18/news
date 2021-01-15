import React from 'react';
import Moment from 'react-moment';

const TopStoriesCard=(props) =>{ 
  return (
    <div className="container">
    <div className="card">
      <div className="header">
        <a href={props.url} className="url"><p className="title">{props.title}</p></a>
      </div>
      <div className="text">
        <p className="author">By: {props.author} | <Moment fromNow>{new Date(props.time*1000)}</Moment></p>            
      </div>
    </div>
</div>

  )
}

export default TopStoriesCard;