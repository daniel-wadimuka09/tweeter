import React, { useState } from 'react';

const TweetBox = () => {
  const [tweetText, setTweetText] = useState('');

  const handleTweet = () => {
    console.log('Tweet :', tweetText);
    
  };

  return (
    <div className="flex items-start  text-white  rounded border-y ">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src="src/photo/Profile-Photo.svg" alt="Avatar de l'utilisateur" />
      </div>
      <div className="flex-1 ml-4">
        <input
          type="text"
          placeholder="Quoi de neuf ?"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-white text-lg"
        />
        <div className="flex items-center space-x-2 ">
          <button className="text-blue-500 hover:text-blue-700">
            📷
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            GIF
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            📊
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            😊
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            📅
          </button>
        </div>
        <button onClick={handleTweet} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 float-right">
          Tweeter
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
