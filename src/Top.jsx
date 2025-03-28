import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('Fetching data from API: http://localhost:3001/bom/n/top-users');
        
        // Simulating API response instead of making actual API call
        const simulatedData = [
          { name: 'User A', postCount: 120 },
          { name: 'User B', postCount: 90 },
          { name: 'User C', postCount: 75 }
        ];
        
        setUsers(simulatedData);
        console.log('Simulated API Data:', simulatedData);
      } catch (error) {
        console.error('Error fetching top users:', error);
      }
    };

    fetchUsers();
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
          color: #00aaff;
        }
        .user-card {
          background-color: #f9f9f9;
          margin-bottom: 15px;
          padding: 15px;
          border-radius: 8px;
          border-left: 5px solid #00aaff;
        }
        .user-card h3 {
          margin: 0;
          color: #333;
        }
        .user-card p {
          margin: 5px 0 0;
          color: #666;
        }
        .next-button {
          display: block;
          width: 100%;
          padding: 12px;
          margin-top: 20px;
          background-color: #00aaff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        .next-button:hover {
          background-color: #0088cc;
        }
      `}</style>
      <div className="container">
        <h1>Top Users</h1>
        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <h3>{user.name}</h3>
              <p>Posts: {user.postCount}</p>
            </div>
          ))
        )}
        <button className="next-button" onClick={() => navigate('/trend')}>Next</button>
      </div>
    </div>
  );
};

export default Top;
