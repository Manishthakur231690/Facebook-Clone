import React from 'react'
import './style.css'
import data from './data'



const LivePeople = () => {

    const live = data.map(
        (element) => {
            return (
                <>  
                    <div id='live'>
                        <img src={element.dp} />
                        <div id='greenDot'></div>
                    </div>
                </>
            )
        }    
    )
    
    return (
    <div id="livePeople_con">
        <h3>Contacts</h3>
        <div id="livePeople">
            {live}
        </div>
    </div>
    )
}
export default LivePeople
