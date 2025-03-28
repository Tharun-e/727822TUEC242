import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      console.log('Fetching data from API: http://localhost:3001/bom/n/trending-posts');

      // Simulating API response with images
      const simulatedData = [
        { title: 'Post 1', likes: 150, author: 'User A', image: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525' },
        { title: 'Post 2', likes: 230, author: 'User B', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s' },
        { title: 'Post 3', likes: 320, author: 'User C', image: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg' }
      ];

      setPosts(simulatedData);
      console.log('Simulated API Data:', simulatedData);
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #ff6600;
        }
        .post-card {
          background-color: #fef3e7;
          margin-bottom: 15px;
          padding: 15px;
          border-radius: 8px;
          border-left: 5px solid #ff6600;
          display: flex;
          align-items: center;
        }
        .post-image {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          margin-right: 15px;
        }
        .post-content h3 {
          margin: 0;
          color: #333;
        }
        .post-content p {
          margin: 5px 0;
          color: #666;
        }
        .back-button {
          display: block;
          width: 100%;
          padding: 12px;
          margin-top: 20px;
          background-color: #ff6600;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        .back-button:hover {
          background-color: #cc5200;
        }
      `}</style>
      <div className="container">
        <h1>Trending Posts</h1>
        {posts.length === 0 ? (
          <p>Loading trending posts...</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post-card">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>Likes: {post.likes}</p>
                <p>Author: {post.author}</p>
              </div>
            </div>
          ))
        )}
        <button className="back-button" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default Trending;
