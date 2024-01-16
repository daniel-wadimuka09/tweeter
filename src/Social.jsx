import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaExternalLinkAlt } from 'react-icons/fa';

const TweetCard = () => {
  return (
    <div className=" items-start text-white rounded-lg p-4 border-y h-screen">
      <div className="flex items-center space-x-2 mb-2 ">
        <img className="src/photo/Profile-Photo.svg" src="src/photo/tweeter.svg" alt="CNN Logo" />
        
          <p className="font-bold">CNN</p>
          <p className="text-gray-400">@CNN. 7m</p>
        
      </div>
      <p>
        hello litellary naturel
        </p>
        <img src="src/photo/image 3.svg" alt="image d utilsateur" />
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
