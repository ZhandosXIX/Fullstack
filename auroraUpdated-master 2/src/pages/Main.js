import React, {useEffect, useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'
import axios from "axios";
import {Link} from "react-router-dom";


function Post(props) {
    return (
        <div className="post-container" style={{ border: '1px solid #006BA8', margin: '10px', padding: '10px' , width:'30%'}}>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-content">{props.content}</p>
            <div className="post-details">
                <h3 style={{ textAlign: 'center', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>Time and place: <p style={{color:'#000'}}>{props.timeAndPlace}</p></h3>

                <h3 style={{ textAlign: 'center', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>Rating: <p style={{color:'#000'}}>{props.rating}</p></h3>

                <h3 style={{ textAlign: 'center', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>People: <p style={{color:'#000'}}>{props.countPeople}</p></h3>
            </div>
        </div>
    );
}

function PostList(props) {
    const lastThreePosts = props.posts.slice(-3); // Get the last 3 posts

    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {lastThreePosts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.description}
                    countPeople={post.count}
                    timeAndPlace={post.timeAndPlace}
                    rating={post.ratingOfVolunteer}
                    postID={post.id}
                />
            ))}
        </div>
    );
}

export default function Main() {

    const token = localStorage.getItem('token');

    const config = {
        headers: {Authorization: `Bearer ${token}`},
    };

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/showAllPosts')
            .then(response => {
                console.log('Posts data:', response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts data:', error);
            });
    }, []);

    axios.get('http://localhost:8081/api/v1/getUser',config).then((response) =>{
        console.log('data cheak',response.data);
        if(response.data.role === 'ADMIN')
        {
            window.location.replace('/admin');
        }
    }).catch((error) => {
        console.log('no data', error);
    });

  return (
    <div>
      <Navbar/>
      <Navbar_menu/>
      <div id="carouselExample" class="carousel slide pt-5 pb-5" style={{width:'100%'}}>
      <div class="carousel-inner" >
      
      <div class="carousel-item active">
      <img src="https://www.stonyplain.com/en/live/resources/b-volunteering.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'14%',fontFamily:'Manrope',caretColor:'transparent'}}>VOLUNTEERING WITH US</h1>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/052/Business_volunteers_main.png" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
        <h1 style={{marginBottom:'14%',fontFamily:'Manrope',caretColor:'transparent'}}>BE VOLUNTEER</h1>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://blogs.volunteermatch.org/hubfs/Imported_Blog_Media/Volunteering-2.jpg/keepProtocol" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
        <h1 style={{marginBottom:'14%',fontFamily:'Manrope',caretColor:'transparent'}}>BE TOGETHER</h1>
      </div>
      </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
      </div>

      <div class="container mt-5">
      <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
      <h2 style={{caretColor:'transparent'}}>Volunteering: Giving Back to Your Community</h2>
      <p class="lead" style={{caretColor:'transparent'}}>Volunteering is a great way to give back to your community, meet new people, and learn new skills. Whether you're interested in working with children, the elderly, or animals, there's a volunteering opportunity out there for you. You can volunteer at a local food bank, animal shelter, or hospital, or you can help out at a community event or fundraiser. Volunteering not only helps others, but it can also be good for your mental health and well-being. It can provide a sense of purpose and fulfillment, reduce stress and anxiety, and improve your self-esteem. So why not give it a try?</p>
      </div>
      </div>
      </div>
      
      <div class="container mt-5 mb-5">
      <div class="row">
      <div class="col-md-12 text-center">
      <a href="/registration" class="btn btn-light" style={{fontSize: '30px', color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>GET STARTED</a>
      </div>
      </div>
      </div>

    <div class="container mt-5 mb-5">
    <div class="row">

    <div class="col-md-6">
    <div class="row border pb-4 pt-4" style={{marginRight:'10px'}}>
    <div class="col-md-6">
    <h2 style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>Want to become a volunteer?</h2>
    <p style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>If you are ready to provide free assistance to a project or organisation then here </p>
    </div>
    <div class="col-md-6">
    <img src="https://www.bluezones.com/wp-content/uploads/2019/07/volunteering-best-things-for-your-health.jpg" alt="Картинка 1" class="img-fluid" style={{caretColor:'transparent'}}/>
    </div>
    <a href="/registration" class="btn btn-primary mr-md-2" style={{width:'150px',marginLeft:'30px',color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>I want to help</a>
    </div>
    </div>

    <div class="col-md-6">
    <div class="row border pb-4 pt-4" style={{marginLeft:'10px'}}>
    <div class="col-md-6">
    <h2 style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>Need volunteers?</h2>
    <p style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>If you are an organisation that needs the help of volunteers, then here you are</p>
    </div>
    <div class="col-md-6">
    <img src="https://pikwizard.com/pw/small/d998346b94fa9209df36f6d2ec822379.avif" alt="Картинка 2" class="img-fluid" style={{caretColor:'transparent'}}/>
    </div>
    <a href="/registration" class="btn btn-primary mr-md-2" style={{width:'150px',marginLeft:'30px',color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>Find volunteers</a>
    </div>   
    </div>

    </div>
    </div>


    <div className="container mt-5 mb-5">
        <div className="container mt-5 mb-5"><PostList posts={posts}/></div>
    </div>
  
    <Footer/>
    </div>
  )
}
