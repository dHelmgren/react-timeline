import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import axios from 'Axios';

function App () {
  const [timelineData, setTimelineData] = useState({posts: []});
  
  axios.get('https://api.coolsocial.net/feed', {params:{
    user: 'devin',
    passphrase: env.secret
  }}).then( (response) =>{
    setTimelineData(response.data.posts);
  }
  ).catch((error) => {
    console.log('whoopsie doodle');
    }
  );

  const updateTimelinePost = (updatedPost) => {
    const newTimeline = [];

    timelineData.forEach( (post) => {
      if (post.id === updatedPost.id){
        newTimeline.push(updatedPost); //Grabs the new data, discards old
      } else {
        newTimeline.push(post); //Grabs the unchanged data, maintaining list order
      }
    });
  }

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s social media feed</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events} updateTimeline={updateTimelinePost} />
      </main>
    </div>
  );
}

export default App;
