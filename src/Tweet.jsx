import React from 'react';


const tweetData = {
  profileImage: 'src/photo/Tweet-Profile-Photo (1).svg', 
  username: 'The New York Times',
  handle: '@nytimes',
  time: '2h',
  content: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land',
  tweetImage: 'src/photo/image 3.svg', 
  stats: {
    comments: 19,
    retweets: 48,
    likes: 482
  }
};

function TweetCard() {
  return (
    <div className="flex items-start   shadow-lg rounded-lg overflow-hidden border-y">
      
      <div className="px-4 py-2">
        <div className="flex items-center">
          <img className="h-12 w-12 rounded-full" src={tweetData.profileImage} alt="Profile" />
          <div className="ml-2">
            <span className="font-bold text-sm">{tweetData.username}</span>
            <span className="text-gray-600 text-xs">{tweetData.handle} • {tweetData.time}</span>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2">{tweetData.content}</p>
        <img className="mt-2" src={tweetData.tweetImage} alt="Tweet" />
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <svg className="h-5 w-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-gray-600 text-xs">{tweetData.stats.comments}</span>
          </div>
          <div className="flex">
            <svg className="h-5 w-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-gray-600 text-xs">{tweetData.stats.retweets}</span>
          </div>
          <div className="flex">
            <svg className="h-5 w-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-gray-600 text-xs">{tweetData.stats.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
