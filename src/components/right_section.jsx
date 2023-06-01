import React from 'react'

const RightSection = () => {
  return (
    <div>
          <div id="right_sec">
              <h2>Sponsored</h2>
              <div className='item'>
                <img src="images/advertisement.png" alt="" />
                <h2>Web Development Course</h2>
                <p>Lorem consequatur reprehenderit atque temporibus fuga vel, incidunt enim illo, obcaecati quibusdam</p>
              </div>

              <div style={{height:'1.5px',width:'100%', background:'darkgray', margin:'10px 0'}}></div>

              <h3>Your Pages and Profiles</h3>

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

              <div style={{height:'1.5px',width:'100%', background:'darkgray', margin:'10px 0'}}></div>

              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3>Contacts</h3>
                <i style={{fontSize:'18px', color:'rgb(70, 69, 69)'}} class="fa-solid fa-ellipsis"></i>
              </div>

              <div className='profile'>
                    <img style={{height:'40px', borderRadius:'50%', border:'1.5px solid green', padding:'1px'}} src="images/member-1.png" />
                    <p>Full Stack Development</p>
                </div>
                <div className='profile'>
                    <img style={{height:'40px', borderRadius:'50%', border:'1px solid green',padding:'1px', width:'40px'}} src="images/member-2.png" />
                    <p>Web Development Course</p>
                </div>
                <div className='profile'>
                    <img style={{height:'40px', borderRadius:'50%', border:'1px solid green',padding:'1px', width:'40px'}} src="images/member-3.png" />
                    <p>CS/IT Groups</p>
                </div>


          </div> 
    </div>
  )
}

export default RightSection
