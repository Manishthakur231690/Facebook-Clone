import React from 'react'
import './style.css';
import logo from '../Images/Facebook-logo.png'
import { NavLink} from 'react-router-dom';
import { useState } from 'react';
import search from '../Images/search.png'


const Header = () => {

  const [openMenu, setOpenMenu] = useState(true);
  const [openSearch, setSearch] = useState(true);
  const [openNotif, setNotfi] = useState(true);

  const navLinkStyle = ({isActive} ) => {
    return {
      color : isActive ? 'royalblue' : 'rgb(53, 53, 53)',
      textDecoration : isActive ? 'none' : 'none'
    }
  }

  return (
    <div>
            <nav>
                <div id='logo_con'>
                    <img src={logo} id='logo' />
                    <input type="text" placeholder='Serch Facebook' 
                      style={{backgroundImage:`url(${search})`}} id = {openSearch ? 'search' : 'open_search'}
                      onMouseEnter={() => setSearch(false)}
                      onMouseLeave={() => setSearch(true)}
                    />
                </div>

                <div id='center_con'>
                    <NavLink to='/' style={navLinkStyle} exact ><i class="fa-solid fa-house"></i></NavLink>
                    <NavLink to='/friends'   style={navLinkStyle} ><i class="fa-solid fa-users"></i></NavLink>
                    <NavLink to='/videos'   style={navLinkStyle} ><i class="fa-brands fa-youtube"></i></NavLink>
                    <NavLink to='/pages' style={navLinkStyle}><i class="fa-regular fa-flag"></i></NavLink>
                </div>

                <div id='right_con'>
                    <i id='menuIcon' class="fa-solid fa-list-ul" onClick={()=> setOpenMenu(false)}></i>
                    <NavLink to='/Messanger'><i class="fa-brands fa-facebook-messenger"></i></NavLink>
                    <i class="fa-solid fa-bell" 
                          onMouseEnter={() => {setNotfi(false); console.log("hii") }}
                          onClick={() => setNotfi(true)}
                    ></i>
                    <NavLink to='/Myprofile' style={navLinkStyle}><img src="images/profile-pic.png" /></NavLink>
                </div>
            </nav>

            <div id='center_con_responsive'>
                    <NavLink to='/' style={navLinkStyle} exact><i class="fa-solid fa-house"></i></NavLink>
                    <NavLink to='/friends' style={navLinkStyle}><i class="fa-solid fa-users"></i></NavLink>
                    <NavLink to='/videos'   style={navLinkStyle} ><i class="fa-brands fa-youtube"></i></NavLink>
                    <NavLink to='/pages' style={navLinkStyle}><i class="fa-regular fa-flag"></i></NavLink>
            </div>


<div id = {openMenu ? 'menuBox' : 'open_menuBox'} >
            <div id = 'sideBar_mob' >
            <NavLink to='/Myprofile' style={navLinkStyle}>
              <div className='profile'  onClick={()=> setOpenMenu(true)}>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <img style={{height:'40px', borderRadius:'50%', border:'1px solid green'}} src="https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg" />
                    <p>Manish Thakur</p>
                  </div>
  
                  <i class="fa-solid fa-xmark" style={{fontSize:'27px',marginRight:'10px'}} onClick={()=> setOpenMenu(true)}></i>
              </div>
              </NavLink>
                <button><i style={{color:'rgb(2, 178, 250)'}} class="fa-solid fa-user-group"></i><span>Friends</span></button>
                <button><i  style={{color:'rgb(187, 16, 235)'}} class="fa-solid fa-bookmark"></i><span>Saved</span></button>
                <NavLink to='/Messanger' onClick={()=> setOpenMenu(true)}><button><i style={{color:'rgb(187, 16, 235)'}} class="fa-brands fa-facebook-messenger"></i><span>Messanger</span></button></NavLink>
                <button><i style={{color:'rgb(7, 153, 237)'}} class="fa-solid fa-users"></i><span>Groups</span></button>
                <button><i style={{color:'rgb(224, 65, 11)'}} class="fa-solid fa-flag"></i><span>Pages</span></button>
                <button><i style={{color:'rgb(252, 175, 20)'}} class="fa-solid fa-star"></i><span>Favourite</span></button>
                <button><i style={{color:'rgb(242, 83, 10)'}} class="fa-regular fa-calendar-check"></i><span>Events</span></button>
                <button><i style={{color:'rgb(10, 130, 242)'}} class="fa-solid fa-chart-simple"></i><span>Ads Manager</span></button>
            <br />
            <div style={{height:'1px', width:'100%',background:'rgb(180,180,180)'}}></div>

                <p style={{fontSize:'17px', fontFamily:'"Roboto", sans-sarif', fontWeight:'bold', color:'rgb(70, 70, 70)', marginLeft:'10px', padding:'10px 0'}}>Your shortcuts </p>
                <div className='profile'>
                    <img style={{height:'40px', borderRadius:'20%', border:'1px solid green'}} src="https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg" />
                    <p>Full Stack Development</p>
                </div>
                <div className='profile'>
                    <img style={{height:'40px', borderRadius:'20%', border:'1px solid green', width:'40px'}} src="https://www.aiidevelop.com.sg/wp-content/uploads/2022/05/Website-Development.jpg" />
                    <p>Web Development Course</p>
                </div>
                <div className='profile'>
                    <img style={{height:'40px', borderRadius:'20%', border:'1px solid green', width:'40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nkw7Q5F03960-zXnlOBrOgll5uquNXRh1uuzG-VWpWaDmRhHgFCU2OebCBjnNbG-idM&usqp=CAU" />
                    <p>CS/IT Groups</p>
                </div>


            </div>
</div>

  <div id = {openNotif ? 'notification_con' : 'open_notification'}>
    <div id = 'notification'>
      <h2>Notifications</h2>
        <div className='item'>
            <img src='Images/member-1.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>Alexandria</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-2.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>John Franklin</h4>
              <button>Accept</button><button style={{background:'rgb(200,200,200)', color:'black', marginLeft:'10px'}}>Remove</button>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-3.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>Josephine</h4>
              <button>Accept</button><button style={{background:'rgb(200,200,200)', color:'black', marginLeft:'10px'}}>Remove</button>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-4.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>Lindsey Edem</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-5.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4> <span style={{fontWeight:'normal'}}>It's</span> Jordan smith <span style={{fontWeight:'normal'}}>birthday.</span> </h4>
              <p>Let him know you're thinking about him.</p>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-4.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>Lindsey Edem</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-6.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4> <span style={{fontWeight:'normal'}}>It's</span> Kimberley <span style={{fontWeight:'normal'}}>birthday.</span> </h4>
              <p>Let him know you're thinking about him.</p>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-7.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>Nathan Lyon</h4>
              <button>Accept</button><button style={{background:'rgb(200,200,200)', color:'black', marginLeft:'10px'}}>Remove</button>
            </div>
        </div>

        <div className='item'>
            <img src='Images/member-8.png' style={{borderRadius:'50%', height:'55px'}}/>
            <div style={{marginLeft:'10px'}}>
              <h4>Melissa</h4>
              <button>Accept</button><button style={{background:'rgb(200,200,200)', color:'black', marginLeft:'10px'}}>Remove</button>
            </div>
        </div>

    </div>
  </div>




    </div>
  )
}

export default Header
