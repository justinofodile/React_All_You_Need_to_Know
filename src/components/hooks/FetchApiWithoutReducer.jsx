import { useState, useEffect } from "react";
import axios from "axios";

const FetchApiWithourReducer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApis() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchApis();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchApiWithourReducer;
