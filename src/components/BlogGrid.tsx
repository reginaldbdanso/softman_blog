import React, { useState } from 'react';
import BlogPost from './BlogPost';
import FeaturedPost from './FeaturedPost';
import SearchBar from './SearchBar';

const POSTS_PER_PAGE = 9;

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development. From AI-driven design to WebAssembly, discover what's next in the world of web tech.",
      category: "Technology",
      readTime: "5 min read",
      author: "John Doe",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more mock blog posts here...
  ];

  const loadMore = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + POSTS_PER_PAGE, blogPosts.length));
  };

  return (
    <div>
      <FeaturedPost {...blogPosts[0]} />
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.slice(1, visiblePosts).map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
      {visiblePosts < blogPosts.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;