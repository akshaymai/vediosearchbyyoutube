import React from 'react'
import  VedioItem from './vedioitem'

const VedioList=({videos,onSelectvedio})=>{
const renderlist=videos.map((vedio)=>{

return <VedioItem  
key={vedio.id.videoId}
videos={vedio} 
onSelectvedio={onSelectvedio}/>
})

    return(
        <div className="ui relaxed divided list">
           {renderlist}
        </div>
    )
}
export default VedioList;