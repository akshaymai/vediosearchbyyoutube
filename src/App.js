import React from 'react'
import youtube from './Apis/youtube'
import Searchbar from './Searchbar'
import {baseParams} from './Apis/youtube'
import Vediolist  from './vedioList'
import Vediodetals from './vediodetals'
class App extends React.Component{

state={
  videos:[],
  slectedvedio:null
}

 onTermsubmit= async(term)=>{
const response=await youtube.get('/search',{
     params: {
        ...baseParams,
          q: term
        }

      });
      
this.setState({videos:response.data.items})
 
}

onSelectvedio=(video)=>{
this.setState({slectedvedio:video})

}

render(){

return(
    <div className="ui container">
        <Searchbar onFromSubmit ={this.onTermsubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
          <Vediodetals vedio={this.state.slectedvedio} />
          </div>
          <div className="five wide column">
      <Vediolist 
       videos={this.state.videos}
      onSelectvedio={this.onSelectvedio}
       />
       </div>
</div>
</div>
                </div>
)

}

}

export default App