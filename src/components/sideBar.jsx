import React from 'react'
import './style.css';
import { NavLink} from 'react-router-dom';

const SideBar = () => {

    const navLinkStyle = ({isActive} ) => {
        return {
          color : isActive ? 'royalblue' : 'rgb(53, 53, 53)', 
          textDecoration : isActive ? 'none' : 'none'
        }
      }



  return (
    <div>
            <div id="sideBar">
                <NavLink to='/Myprofile' style={navLinkStyle}><div className='profile'>
                    <img style={{height:'40px', borderRadius:'50%', border:'1px solid green'}} src="images/profile-pic.png" />
                    <p>Manish Thakur</p>
                </div></NavLink> 
                <button><i style={{color:'rgb(2, 178, 250)'}} class="fa-solid fa-user-group"></i><span>Friends</span></button>
                <button><i  style={{color:'rgb(187, 16, 235)'}} class="fa-solid fa-bookmark"></i><span>Saved</span></button>
                <NavLink to='/Messanger'  style={navLinkStyle}><button><i style={{color:'rgb(187, 16, 235)'}} class="fa-brands fa-facebook-messenger"></i><span>Messanger</span></button></NavLink>
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
  )
}

export default SideBar
