import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import axios from "axios";

import './Home.css';


const Home = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    useEffect(() => {
        if(sort === 'asc'){

        }
        if(sort === 'desc'){

        }
        console.log(sort)
    }, [sort])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setUsers(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
      <div className="Home">
          <div className='search'>
              <input
                  type="text"
                  placeholder='search'
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}/>
              <button onClick={() => setUsers(users.slice().sort((a, b) => a.username > b.username ? 1 : -1))}>asc</button>
              <button onClick={() =>  setUsers(users.slice().sort((a, b) => a.username > b.username ? 1 : -1).reverse())}>desc</button>
          </div>
          {users.filter(user => {
              const regex = new RegExp(`${search}`, 'gi');
              return user.username.match(regex);
          }).map(user => (
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
