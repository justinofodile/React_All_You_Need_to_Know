import React from "react";
import { useSearchParams } from "react-router-dom";

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");
  console.log(filterValue);
  return (
    <div>
      <h3>{filterValue ? "Latest post filtered" : "All post"}</h3>
      <ol>
        <li>Post 1</li>
        <li>Post 2</li>
        <li>Post 3</li>
        <button onClick={() => setSearchParams({ filter: "latest" })}>
          Latest post
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </ol>
    </div>
  );
};

export default PostList;
