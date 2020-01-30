import React from 'react'


const Vediodetals =({vedio})=>{

    if(!vedio)
    {
      return  <div>'Loading...'</div>
    }
  
    const vediosrc=`https://www.youtube.com/embed/${vedio.id.videoId}`
    return(
 <div className="ui segment">
    <iframe title={vedio.title} src={vediosrc} />
   <h1 className="ui header">{vedio.snippet.title}</h1>
 <p>{vedio.snippet.description}</p>
     </div>
    )
}
export default Vediodetals;