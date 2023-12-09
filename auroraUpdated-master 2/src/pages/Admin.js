import axios from 'axios';
import AdminPanel from '../layout/AdminPanel';
import {useState} from "react";

export default function Admin() {

    const [navbar, setNavbar] = useState('');
    const token = localStorage.getItem('token');

    const config = {
    headers: {Authorization: `Bearer ${token}`},
    };

    axios.get('http://localhost:8081/api/v1/getUser', config).then((response) => {
       console.log('data', response.data);
       if(response.data.role === 'ADMIN')
       {
           setNavbar(
               <div>
                   <AdminPanel/>
               </div>
           );
       }
    }).catch((error) =>{
      console.log('You dont have permission',error);
    });


    return (
        <nav>
            <ul>
                {navbar}
            </ul>
        </nav>
    );
}
