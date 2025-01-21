import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [posts, setpost] = useState({})
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setpost(response.data);  // Set fetched data to state
        setLoading(false);  // Stop loading
      })})  
  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>Album {post.id}</h3>
              <p>User ID: {post.userId}</p>
              <p>Title: {post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default App
