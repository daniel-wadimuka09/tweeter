import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-1/5 fixed top-0 left-0">
      <ul className="p-4">
        <li className="text-white py-2">Home</li>
        <li className="text-white py-2">Explore</li>
        <li className="text-white py-2">Notifications</li>
        <li className="text-white py-2">Messages</li>
        <li className="text-white py-2">Bookmarks</li>
        <li className="text-white py-2">Lists</li>
        <li className="text-white py-2">Profile</li>
      </ul>
      <button  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 float-left">
          Tweeter
        </button>
    </div>
  );
}

export default Sidebar;
