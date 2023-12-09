import axios from 'axios';
import React from 'react';
import AdminPanel from '../layout/AdminPanel';
import { useState, useEffect } from 'react';
import config from "bootstrap/js/src/util/config";
import {useParams} from "react-router-dom";

// const deleteUser = async (id) => {
//     const config = {
//         headers: { Authorization: `Bearer ${token}`
//         }
//     }
//     await axios.delete('http://localhost:8081/api/v1/deleteUser/' + id,config);
// }
export default function Volunteers() {
  const [users, setUsers] = useState([]);
  const [navbar, setNavbar] = useState('');
  // const [id, setID] = useState('');
  const {id} = useParams();

  const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}`
        }
    }
  const deleteUser = async (id) => {
      await axios.delete('http://localhost:8081/api/v1/deleteUser/' + id,config);
  }

    function User(props) {
        const { firstname, lastname, userId } = props;

        return (
            <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
                <img src={require('../Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
                <div className='container' style={{marginLeft:'10px'}}>
                    <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{firstname},{lastname}</h2>
                    <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {userId}</h3>
                    <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>sometextsometext sometext somtetx textsome textv somtetx textsome text somtetx textsome text</p>
                    <button onClick={() => deleteUser(userId)}>Delete</button>
                </div>
            </div>
        );
    }

    function UserList(props) {
        const { users } = props;

        return (
            <div className='container'>
                {users.map(user => (
                    <User key={user.id} userId={user.id} firstname={user.firstname} lastname={user.lastname} rating={user.rating}/>
                ))}
            </div>
        );
    }




    useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllUsers')
        .then(response => {
          console.log('Posts data:', response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts data:', error);
        });
  }, []);

  useEffect(() => {
      const config = {
          headers: { Authorization: `Bearer ${token}`
          }
      };
    axios.get('http://localhost:8081/api/v1/getUser', config)
        .then((response) => {
          console.log('data', response.data);
          if (response.data.role === 'ADMIN') {
            setNavbar(
                <div>
                  <AdminPanel/>
                  <div className='container mt-5 mb-5'>
                    <UserList users={users}/>
                  </div>
                </div>
            );
          }
        })
        .catch((error) => {
          console.log('You dont have permission', error);
          window.location.replace('/');
        });
  }, [users]);

  return (
      <nav>
        <ul>
          {navbar}
        </ul>
      </nav>
  );
}
