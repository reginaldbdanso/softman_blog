import React from 'react';
import Header from './components/Header';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Blog</h1>
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;