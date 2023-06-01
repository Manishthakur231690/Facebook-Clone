import React from 'react'
import './style.css'
import Posts from './posts';





const MyProfile = () => {
  return (
    <div>
                <div id="Myprofile">
                    <div id="Myprofile_con">

                        <div className='coverimg'>
                            <img src="images/cover.png" id='cover'/>

                            <div className='myInfo_con'>
                            <img src="images/profile-pic.png" id='profilePic' />
                                 <div className='myinfo'>
                                    <h2>Manish Thakur</h2>
                                    <p>4520 Friends</p>
                                    <div>
                                        <img src="images/member-1.png" style={{height:'40px', borderRadius:'50%', marginTop:'5px'}} />
                                        <img src="images/member-2.png" style={{height:'40px', borderRadius:'50%', marginTop:'5px'}} />
                                        <img src="images/member-3.png" style={{height:'40px', borderRadius:'50%', marginTop:'5px'}} />
                                        <img src="images/member-4.png" style={{height:'40px', borderRadius:'50%', marginTop:'5px'}} />
                                    </div>
                                </div>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <button className='story'><i class="fa-solid fa-circle-plus" style={{color:'White'}}></i> Add to Story</button>
                                    <button className='edit'><i class='fa-solid fa-pen' style={{color:'black'}}></i> Edit Profile</button>
                                </div>
                            </div>
                        </div>

                    <div id='about_posts'>
                        <div className="about">
                                <div className="intro">
                                    <h2>Intro</h2>
                                    <div style={{textAlign:'center'}}>
                                        <p style={{letterSpacing:'0.3px',fontSize:'16.5px', lineHeight:'23px'}}>
                                           👋 Hello everyone, <br /> I am Manish. <br /> 💻 Full Stack Developer <br />
                                            BCA Student.
                                        </p>
                                        <button className='edit'><i class='fa-solid fa-pen' style={{color:'black'}}></i> Edit bio</button>
                                    </div>
                                    <p><i class="fa-solid fa-house-chimney"></i> Lives in <b>Aligarh</b></p>
                                    <p><i class="fa-solid fa-location-dot"></i> From <b>Aligarh</b></p>
                                    <p><i class="fa-solid fa-clock"></i> Joined on  March 2018</p>
                                    <p><i class="fa-solid fa-rss"></i> Followed by <b>4580 peoples</b></p>
                                    <button className='edit'><i class='fa-solid fa-pen' style={{color:'black'}}></i> Edit Details</button>
                                    <button className='edit'> Add Hobbies</button>
                                    <button className='edit'>Add Features</button>
                                </div>
                                <div className="photos">
                                    <h2>Photos</h2>
                                    <div>
                                        <img src="images/member-1.png"/>
                                        <img src="images/member-3.png"/>
                                        <img src="images/member-2.png"/>
                                        <img src="images/member-4.png"/>
                                        <img src="images/member-5.png"/>
                                        <img src="images/member-6.png"/>
                                        <img src="images/member-7.png"/>
                                        <img src="images/member-8.png"/>
                                        <img src="images/member-9.png"/>
                                    </div>
                                </div>
                        </div>

                        <div className="posts">
                                <Posts/>
                        </div>
                    </div>
                        


                    </div>
                    
                </div>
    </div>
  )
}

export default MyProfile
