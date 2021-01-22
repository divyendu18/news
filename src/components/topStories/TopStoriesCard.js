import React from 'react';
import Moment from 'react-moment';

const TopStoriesCard=(props) =>{ 
  return (
    <div className="card">
      <div className="vertical_card"></div>
    <div className="header_date">
    </div>
    <div className="header_title">
      <h4 className="title"><a href={props.url} className="url">{props.title}</a></h4>
      {/* <div className="horizontal"></div> */}
      <div className="author">Posted by<p>{props.author}</p></div>
      <h5><Moment fromNow>{new Date(props.time*1000)}</Moment></h5>
      
    </div>
  </div>

  )
}

export default TopStoriesCard;