import React from 'react'
import './Vedioitem.css'

const VedioItems =({videos,onSelectvedio})=>{

    
    return(
        <div  onClick={()=>onSelectvedio(videos)} className="vedio-item item" >
        <img alt={videos.snippet.title} className="ui image" src={videos.snippet.thumbnails.medium.url} />
        <div className="content">
       <div className="header">{videos.snippet.title}</div>
 </div>
        </div>
        
    )
}
export default VedioItems;