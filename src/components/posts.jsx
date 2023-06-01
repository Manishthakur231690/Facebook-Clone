import React from 'react'
import './style.css';
import data from './data';
const Posts = () => {
  
const post = data.map(
    (element) => {
        return (
            <>

                <div id="post_con">
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                                    <img src={element.dp} style={{borderRadius:'50%', height:'45px', border:'1.5px solid royalblue', padding:'1.5px'}} />
                                    <div style={{marginLeft:'10px'}}>
                                        <p style={{fontSize:'16px',fontWeight:'bold'}}>{element.userName}</p>
                                        <p style={{fontSize:'15px',color:'rgb(70,50,50)'}}>Delhi, India</p>
                                    </div>
                                </div>
                                <i class="fa-solid fa-ellipsis"></i> 
                            </div>
                            <p style={{fontSize:'15px',color:'rgb(70,70,50)',letterSpacing:'0.2px',marginTop:'5px'}}>Lorem ipsum dolor <span style={{color:'royalblue'}}>#Programming</span> sit amet consectetur adipisicing <span style={{color:'royalblue'}}>#Coding</span> sed adipisci dolore maxime fugiat.</p>
                            <img src={element.img} style={{width:'100%',marginTop:'8px'}} />

                            <div style={{width:'100%',height:'0.7px', background:'rgb(205,205,205)', margin:'11px 0'}}></div>
                            
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                                <div style={{display:'flex', alignItems:'center'}}><i style={{color:'rgb(70, 70, 70)'}} class="fa-regular fa-thumbs-up"></i><span>Like</span></div>
                                <div style={{display:'flex', alignItems:'center'}}><i style={{color:'rgb(70, 70, 70)'}} class="fa-regular fa-message"></i><span>Commment</span></div>
                                <div style={{display:'flex', alignItems:'center'}}><i style={{color:'rgb(70, 70, 70)'}} class="fa-solid fa-share"></i><span>Share</span></div>
                            </div>


                </div>
                
            </>
        )
    }    
)

return (
<div className="products">
        {post}
</div>
)
}

export default Posts
