import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaExternalLinkAlt } from 'react-icons/fa';

const TweetCard = () => {
  return (
    <div className=" items-start text-white rounded-lg p-4 border-y">
      <div className="flex items-center space-x-2 mb-2">
        <img className="src/photo/Profile-Photo.svg" src="src/photo/Tweet-Profile-Photo.svg" alt="CNN Logo" />
        
          <p className="font-bold">CNN</p>
          <p className="text-gray-400">@CNN. 7m</p>
        
      </div>
      <p>
        President Joe Biden touted a new agreement reached with the European Union to ease
        Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both
        strengthen the US steel industry and combat the global climate crisis.
      </p>
      <div className="flex justify-between items-center space-x-2  mt-2">
        <div className="flex items-center text-sm text-gray-400">
          <FaRegComment className="mr-2" />
          <span>57</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <FaRetweet className="mr-2" />
          <span>144</span>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <FaRegHeart className="mr-2" />
          <span>184</span>
        </div>
        <FaExternalLinkAlt className="text-sm text-gray-400" />
      </div>
    </div>
  );
};

export default TweetCard;