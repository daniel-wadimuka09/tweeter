import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaExternalLinkAlt } from 'react-icons/fa';

const TweetCard = () => {
  return (
    <div className=" items-start text-white rounded-lg p-4 border-y px-9  ">
      <div className="flex items-center space-x-2  ml-6 my-8 ">
        <img className=" mb-8" src="src/photo/Tweet-Profile-Photo (1).svg" alt="CNN Logo" />
        
          <p className="font-bold">CNN</p>
          <p className="text-gray-400">@CNN. 7m</p>
        
      </div>
      <p className='my-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nesciunt quam assumenda sed maiores,
         error id debitis sint provident vitae aliquam officiis.
          Vel ut quas quo, velit quia hic error quod.
        </p>
        <img className="rounded-2xl " src="src/photo/image 3.svg" alt="image d utilsateur" />
      <div className="flex justify-between items-center space-x-2  mt-2">
        <div className="flex items-center text-sm text-gray-400">
          <FaRegComment className="mr-2" />
          
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <FaRetweet className="mr-2" />
          
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <FaRegHeart className="mr-2" />
          
        </div>
        <FaExternalLinkAlt className="text-sm text-gray-400" />
      </div>
    </div>
  );
};

export default TweetCard;
