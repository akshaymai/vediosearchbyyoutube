import React from 'react'


class Searchbar extends React.Component{

state={term:''}

oninputchange=(event)=>{

this.setState({term:event.target.value})

}

onformsubmit=(e)=>{
    e.preventDefault();
    this.props.onFromSubmit(this.state.term)
}


render(){

return(
    <div>
<div className="search-bar ui segment">
    <form className="ui form" onSubmit={this.onformsubmit}>
        <div className="field">
            <label>Vedio search</label>
            <input type="text" 
            onChange={this.oninputchange}/>
            </div>
        </form>
</div>

    </div>
)

}

}

export default Searchbar