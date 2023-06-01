import React from 'react';
import './style.css';
import RightSec from "./right_section";
import Posts from './posts';
const Home = () => {
  return (
   <>
      
    <div id="home">
          <div className="home_con">
            <div className="status">
                <div className="item">
                    <img src="images/status-1.png" id='bgImg' />
                    <img src="images/member-1.png" className='user' />
                </div>
                <div className="item">
                    <img src="images/status-2.png" id='bgImg' />
                    <img src="images/member-2.png" className='user' />
                </div>
                <div className="item">
                    <img src="images/status-3.png" id='bgImg' />
                    <img src="images/member-3.png" className='user' />
                </div>
                <div className="item">
                    <img src="images/status-4.png" id='bgImg' />
                    <img src="images/member-4.png" className='user' />
                </div>
                <div className="item">
                    <img src="images/status-5.png" id='bgImg' />
                    <img src="images/member-5.png" className='user' />
                </div>
            </div>

            <div className="post_upload">
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src="images/profile-pic.png" style={{height:'45px',borderRadius:'50%'}} />
                    <input type="text" placeholder="What's in your mind, Manish"/>
                </div>
                <div style={{width:'100%',height:'0.7px', background:'rgb(205,205,205)', margin:'15px 0'}}></div>
                <div style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>
                    <div style={{display:'flex', alignItems:'center'}}><i style={{color:'rgb(230, 55, 7)'}} class="fa-solid fa-video"></i><span>Live video</span></div>
                    <div style={{display:'flex', alignItems:'center'}}><i style={{color:'rgb(2, 209, 54)'}} class="fa-regular fa-images"></i><span>Photo/video</span></div>
                    <div style={{display:'flex', alignItems:'center'}}><i style={{color:'rgb(230, 189, 7)'}} class="fa-regular fa-face-smile"></i><span>Activity</span></div>
                    
                </div>
            </div>
            
            <div id="post">
                <Posts/>
            </div>
                
          </div>
          <RightSec/>
    </div>

   </>
  )
}

export default Home
