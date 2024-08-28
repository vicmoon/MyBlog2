import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => {
        console.log("Fetch response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Make sure this logs an array of posts
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <header>
        <div className="log">
          <img src="logo.png" height="68" width="68" alt=" My logo"></img>
        </div>
      </header>

      {backendData.map((post, i) => (
        <div key={i}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.imageURL && <img src={post.imageURL} alt={post.title} />}
        </div>
      ))}
    </div>
  );
}

export default App;
