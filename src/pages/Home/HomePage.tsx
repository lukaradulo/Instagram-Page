import axios from "axios";
import React, { useEffect, useState } from "react";
import './HomePage.css';
import Post from "./Post";
import { IPost, IUser } from "../../data/constants";

const HomePage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [postsLength, setPostLength] = useState<number>(4);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response => setAllPosts(response.data))
    .catch(error => {console.log(error)})

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setAllUsers(response.data))
    .catch(error => {console.log(error)})
  }, []);

  const posts = (postsNumber: number) => allPosts.slice(0, postsNumber).map((post, index) => {
    return <Post id={post.id} title={post.title} url={post.url} username={allUsers[index % 10].username}/>
  });

  const showMore = () => {
    setPostLength(postsLength + 4);
  };
  
  return (
    <div className='home-page-content'>
      {(allUsers.length !== 0) 
        ? <div>
            {posts(postsLength)}
          </div>
        : <div></div> }
      <button className='show-more-button' onClick={showMore}>Show More</button>
    </div>
  );
}

export default HomePage;
