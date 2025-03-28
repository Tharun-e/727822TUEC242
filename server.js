const express = require('express');
const app = express();
const port = 3001;

// Sample data for Top Users
const users = [
  { name: 'User A', postCount: 120 },
  { name: 'User B', postCount: 90 },
  { name: 'User C', postCount: 75 }
];

// Sample data for Trending Posts
const trendingPosts = [
  { title: 'Post 1', likes: 150, author: 'User A' },
  { title: 'Post 2', likes: 120, author: 'User B' },
  { title: 'Post 3', likes: 200, author: 'User C' }
];

// API Endpoint for Top Users
app.get('/bom/n/top-users', (req, res) => {
  res.json(users);
});

// API Endpoint for Trending Posts
app.get('/bom/n/trending-posts', (req, res) => {
  res.json(trendingPosts);
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
