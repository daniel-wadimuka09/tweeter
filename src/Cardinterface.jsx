import React from 'react';

const WhoToFollow = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg ">
      <h2 className="text-white text-lg font-bold mb-4">Who to follow</h2>
      <div className="flex items-center space-x-4 mb-4 rounded-md ">
        <img src="src/photo/Tweet-Profile-Photo (1).svg" alt="New York Times" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-white font-semibold">The New York Times</p>
          <p className="text-gray-400">@nytimes</p>
        </div>
        <button className="bg-gray-600 text-white px-3 py-1 rounded-full">Following</button>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <img src="src/photo/Tweet-Photo.svg" alt="CNN" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-white font-semibold">CNN</p>
          <p className="text-gray-400">@cnn</p>
        </div>
        <button className="bg-red-500 text-white px-3 py-1 rounded-full">Follow</button>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <img src="src/photo/tweeter.svg" alt="Twitter" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-white font-semibold">Twitter</p>
          <p className="text-gray-400">@twitter</p>
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">Follow</button>
      </div>
      <p className="text-blue-400">
        Show more
      </p>
    </div>
  );
};

export default WhoToFollow;
