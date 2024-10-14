import React from 'react';

const BlogPost = ({ title, excerpt, category, readTime, author, date, image, authorImage }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md">
      <img 
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">{category}</span>
          <span className="text-gray-500 text-sm ml-4">{readTime}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{excerpt}</p>
        <div className="flex items-center">
          <img 
            src={authorImage}
            alt={author}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;