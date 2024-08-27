import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        console.log("Fetch response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {backendData && backendData.users ? (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
