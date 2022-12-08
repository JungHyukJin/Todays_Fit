import React from "react";

export default function User({ user }) {
  const { photoURL, displayName } = user;
  return (
    <div className="flex items-center">
      <img src={photoURL} alt={displayName}  className="w-10 h-10 rounded-full mr-2"/>
      <span className='hidden md:block'>{displayName}</span>
    </div>
  );
}
