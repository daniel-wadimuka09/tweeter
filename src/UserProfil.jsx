import React from 'react';

const UserProfile = ({ name, username, avatarUrl, onEllipsisClick }) => {
  return (
    <div className="flex items-center  text-white p-4 rounded-lg">
      <img src="src/photo/Profile-Photo.svg" alt="" className="h-12 w-12 rounded-full mr-4" />
      <div className="flex-grow">
        <h1 className="text-xl font-bold">Bradley_0rtiz</h1>
        <p className="text-gray-400">@bradley</p>
      </div>
      <button className="text-white" onClick={onEllipsisClick}>
      </button>
    </div>
  );
};

export default UserProfile;
