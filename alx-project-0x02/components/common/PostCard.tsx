import React from 'react';
import { type PostProps } from '@/interfaces'; 

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
