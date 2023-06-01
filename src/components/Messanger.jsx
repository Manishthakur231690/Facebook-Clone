import React from 'react'
import './style.css'
import LivePeople from './LivePeople'




const Messanger = () => {
  return (
    <div>
        <div id="messanger">
            <LivePeople/>

            <div id="messanger_con">
                <div className='user_detail'> 
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img src="Images/member-1.png" />
                        <div style={{marginLeft:'10px'}}>
                            <h4>Alexandria</h4>
                            <p style={{color:'rgb(100,100,100)', fontSize:'15px'}}>Last seen 5h later</p>
                        </div>
                    </div>

                    <div style={{display:'flex', alignItems:'center'}}>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-solid fa-video"></i>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>

                <div id="msg_cont">
                    <div className="messages">
                        <p id='friend'>Hello</p>
                        <br />
                        <p id='user'>Hello Alexandria</p>
                    </div>

                    {/* <div>
                        
                    </div> */}



                    <div id='input_msg' style={{display:'flex', alignItems:'center'}}>
                        <input type="text" placeholder='Type a message'/>
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>




            </div>
        </div>

    </div>
  )
}

export default Messanger
