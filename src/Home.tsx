import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import axios from "axios";

import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // console.log(response.data)
                setUsers(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
      <div className="Home">
          {users.map(user => (
              <div className='userWrapper'>
                  <p>{user.id}. {user.email}</p>
                  <p>{user.username}</p>
                  <p>{user.name}</p>
                  <Link to={`/albums/${user.id}`}>Albums</Link>
                  <Link to={`/posts/${user.id}`}>Posts</Link>
              </div>
          ))}
      </div>
    );
}


export default Home;
