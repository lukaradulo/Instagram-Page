import axios from "axios";
import React, { useEffect, useState } from "react";
import './HomePage.css';
import Post from "./Post";
import { IPost, IUser } from "../../data/constants";

const HomePage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const [allUsers, setAllUsers] = useState<IUser[]>([]);

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
            <Post id={allPosts[0].id} title={allPosts[0].title} url={allPosts[0].url} username={allUsers[0].username}/> 
            <Post id={allPosts[1].id} title={allPosts[1].title} url={allPosts[1].url} username={allUsers[1].username}/> 
            <Post id={allPosts[2].id} title={allPosts[2].title} url={allPosts[2].url} username={allUsers[2].username}/> 
            <Post id={allPosts[3].id} title={allPosts[3].title} url={allPosts[3].url} username={allUsers[3].username}/> 
            <Post id={allPosts[4].id} title={allPosts[4].title} url={allPosts[4].url} username={allUsers[4].username}/> 
          </div>
        : <div></div> }
    </div>
  );
}

export default HomePage;
