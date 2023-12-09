import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AdminPanel from '../layout/AdminPanel';

export default function Organizations() {
  const [organization, setOrg] = useState([]);
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}`
        }
    }

    function OrgList(sp) {
        return (
            <div className='container'>
                {organization.map((org) => (
                    <Organization key={org.id} orgID={org.id} orgName={org.organizationName}/>
                ))}
            </div>
        );
    }
  function Organization(sp) {
    return (
        <div className="container-row border-bottom"
             style={{background: '#FFFFFF', width: '50%', marginTop: '5%', display: 'flex', alignItems: 'center'}}>
          <img src={require('../Icon/nophoto.png')} alt="Моя картинка"
               style={{width: '100px', height: '100px', caretColor: 'transparent'}}/>
          <div className='container' style={{marginLeft: '10px'}}>
            <h2 style={{textAlign: 'left', fontFamily: "Livvic", fontSize: '20px', caretColor: 'transparent'}}>{sp.orgName}</h2>
            <h3 style={{textAlign: 'left', fontSize: '15px', color: '#8B8888', caretColor: 'transparent'}}>ID:{sp.orgID}</h3>
            <p style={{
              textAlign: 'left',
              fontFamily: "Livvic",
              fontSize: '20px',
              caretColor: 'transparent'
            }}>sometextsometext sometext somtetx textsome textv somtetx textsome text somtetx textsome text</p>
          </div>
            <button onClick={() => deleteOrg(sp.orgID)}>Delete</button>
        </div>
    );
  }



    const deleteOrg = async (id) => {
        await axios.delete('http://localhost:8081/api/v1/deleteOrg/' + id,config);
    }
  //
  // useEffect(() => {
  //   axios.get('http://localhost:8081/api/v1/showAllOrgs')
  //       .then(response => {
  //         console.log('Orgs data:', response.data);
  //         setOrg(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching org data:', error);
  //       });
  // }, []);
  //

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/getUser', config)
        .then((response) => {
          if (response.data.role === 'ADMIN') {
            axios.get('http://localhost:8081/api/v1/showAllOrgs')
                .then(response => {
                  console.log('Orgs data:', response.data);
                  setOrg(response.data);
                })
                .catch(error => {
                  console.error('Error fetching org data:', error);
                });
          }
        })
        .catch((error) => {
          console.log('You dont have permission', error);
          window.location.replace('/');
        });
  }, []);

  return (
      <div>
        <AdminPanel/>

        <div className='container mt-5 mb-5'>
          <OrgList/>
        </div>
      </div>
  );
}