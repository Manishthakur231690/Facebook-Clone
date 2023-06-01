import React from 'react'
import './style.css';
import data from '../components/data'

const Friends = () => {

    const friends = data.map(
        (element) => {
            return (
                <>
                            <div id="friends">
                                       <img src={element.dp}/>
                                       <div className="detail">
                                           <h2>{element.userName}</h2>
                                           <p><img src={element.friend[4]}/><img src={element.friend[1]}/><img src={element.friend[3]}/> {element.matual} matual Friends</p>
                                           <div style={{display:'flex'}}>
                                               <button style={{background:'royalblue', color:'white'}}>Confirm</button>
                                               <button style={{background:'rgb(200,200,200)', color:'black', marginLeft:'10px'}}>Remove</button>
                                           </div>
                                       </div>
                            </div>
                </>
            )
        }    
    )

    return (
    <div id='friends_con'>
            {friends}
    </div>
    )
}
    

export default Friends
