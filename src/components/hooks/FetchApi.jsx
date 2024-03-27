import { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetcheData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      //   console.log(posts);
    }
    fetcheData();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
