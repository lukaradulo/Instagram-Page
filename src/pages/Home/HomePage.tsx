import axios from "axios";
import React, { useEffect, useState } from "react";
import './HomePage.css';
import Post from "./Post";
import { fetchedPostsInterface, fetchedUsersInterface } from "../../data/constants";

const HomePage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<fetchedPostsInterface[]>([]);
  const [allUsers, setAllUsers] = useState<fetchedUsersInterface[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response => setAllPosts(response.data))
    .catch(error => {console.log(error)})

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setAllUsers(response.data))
    .catch(error => {console.log(error)})
  }, []);
  
  return (
    <div className='home-page-content'>
      {(allPosts.length !== 0) 
        ? <div>
            <Post title={allPosts[0].title} imgUrl={allPosts[0].url} username={allUsers[0].username}/> 
            <Post title={allPosts[1].title} imgUrl={allPosts[1].url} username={allUsers[1].username}/> 
            <Post title={allPosts[2].title} imgUrl={allPosts[2].url} username={allUsers[2].username}/> 
            <Post title={allPosts[3].title} imgUrl={allPosts[3].url} username={allUsers[3].username}/> 
            <Post title={allPosts[4].title} imgUrl={allPosts[4].url} username={allUsers[4].username}/> 
          </div>
        : <div></div> }
    </div>
  );
}

export default HomePage;
