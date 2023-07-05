import React, {useEffect, useState} from 'react';

import { useParams } from "react-router-dom";
import axios from "axios";

import './Home.css';

interface PropsList {
    type: string
}

type QuizParams = {
    id: string;
};
export const Lists: React.FC<PropsList> = ({ type }) => {
    const { id } = useParams<QuizParams>();
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/${type}`)
            .then(function (response) {
                console.log(response.data)
                setAlbums(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="Home">
            {albums.map(user => (
                <div className='userWrapper'>
                    <p>{user.id}. {user.title}</p>
                    {user.body && <p>{user.body}</p>}
                </div>
            ))}
        </div>
    )
}


