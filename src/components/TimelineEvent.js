import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const onLikeButtonClick = () => {
    const updatedPost = {
      person: props.person,
      status: props.status,
      likes: (props.likes + 1),
      time: props.time
    }

    axios.post('https://api.coolsocial.net/post', {post: updatedPost})
    .then((response) => {
      props.updateTimeline(response.data.post);
    }).catch((error) => {
      console.log('dag nabit!');
    })
  }

  return (
    <article className='timeline-event'>
      <p className='event-person'>{props.person}</p>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'>
        <Timestamp time={props.time} />
      </p>
      <button onClick={onLikeButtonClick}> Like This! </button>
    </article>
  );
}


export default TimelineEvent;
