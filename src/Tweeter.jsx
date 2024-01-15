import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaExternalLinkAlt } from 'react-icons/fa';

const TweetCard = () => {
  return (
    <div className=" items-start text-white rounded-lg p-4 border-y">
      <div className="flex items-center space-x-2 mb-2">
        <img className="src/photo/Profile-Photo.svg" src="src/photo/tweeter.svg" alt="CNN Logo" />
        
          <p className="font-bold">Twitter</p>
          <p className="text-gray-400">@Twitter. Oct4</p>
        
      </div>
      <p>
        hello literally everone
      </p>
      <div className="flex justify-between items-center space-x-2  mt-2">
        <div className="flex items-center text-sm text-gray-400">
          <FaRegComment className="mr-2" />
          <span>116.k</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <FaRetweet className="mr-2" />
          <span>785.4k</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <FaRegHeart className="mr-2" />
          <span>267.1k</span>
        </div>
        <FaExternalLinkAlt className="text-sm text-gray-400" />
      </div>
    </div>
  );
};

export default TweetCard;
