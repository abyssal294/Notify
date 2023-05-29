"use client"
import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
 
  const [posts, setPosts] = useState([])

  function addPost(inputValue){
    setPosts((prevPosts) => { 
      return [
        ...prevPosts,
        inputValue
      ]}
    )
  }

  function deletePost(id){
    setPosts((prevPosts) => {
      return prevPosts.filter((post, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={addPost} />
      {posts.map((post, index) => (
        <Note 
        key={index} 
        title={post.title} 
        content={post.content} 
        id={index}
        delete={deletePost}
        />))}
      
      <Footer />
    </div>
  );
}

export default App;
