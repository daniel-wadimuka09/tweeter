import React from 'react';

const TrendingList = () => {
  const trends = [
    { hashtag: '#SQUID', tweets: 2066 },
    { hashtag: '#Trending in Turkey', tweets: 2066 },
    { hashtag: '#SQUID', tweets: 2066 },
    { hashtag: '#SQUID', tweets: 2061 }
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Trending for you</h3>
      <ul>
        {trends.map((trend, index) => (
          <li key={index} className="mb-3">
            <div className="flex justify-between">
              <h4 className="text-md font-semibold">{trend.hashtag}</h4>
              <span className="text-sm">{trend.tweets} Tweets</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingList;
