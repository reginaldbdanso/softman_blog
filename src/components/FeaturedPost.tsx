// import React from 'react';

const FeaturedPost = ({ title, excerpt, category, readTime, author, createdAt, coverImage, authorImage }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg mb-12">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img 
            className="h-64 w-full object-cover md:h-full"
            src={coverImage}
            alt={title}
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">{category}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{excerpt}</p>
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full mr-4" src={authorImage} alt={author} />
            <div>
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={createdAt}>
                  {new Date(createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  })}
                </time>                <span aria-hidden="true">&middot;</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;