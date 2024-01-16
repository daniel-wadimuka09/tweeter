import React from 'react';

const UserProfile = ({ name, username, avatarUrl, onEllipsisClick }) => {
  return (
    <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg">
      <img src={avatarUrl} alt={`${name}`} className="h-12 w-12 rounded-full mr-4" />
      <div className="flex-grow">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-gray-400">@{username}</p>
      </div>
      <button className="text-white" onClick={onEllipsisClick}>
        ...
      </button>
    </div>
  );
};

export default UserProfile;
