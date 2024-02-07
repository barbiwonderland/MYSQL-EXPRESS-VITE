import React, { useEffect, useState } from 'react';
import { getAllTweets } from '../services/tweetService';
import Tweet from '../interfaces/Tweet';

const Home: React.FC = () => {

  const [tweets, setTweets] = useState<Tweet[]>([]); 

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await getAllTweets();
        setTweets(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <>

     <div>
     <h1>Welcome to Twiingi</h1>
     <p>You can see all twingiis here:</p>

   </div>
   <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>Content: {tweet.content}</p>
          <p>User ID: {tweet.user_id}</p>
          <hr />
        </div>
      ))}
    </div>
   </>
  );
}



export default Home;