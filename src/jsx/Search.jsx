import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    handleChange = (event)=>{
        this.setState({value: event.target.value})
    } 

    handleClick = (event)=>{
        event.preventDefault()
        this.props.handleSearch(this.state.value)
    }
    render(){
        return (
            <div>
                <input name='keyword' value={this.state.value} onChange={this.handleChange}>
                </input>
                <button className='button' onClick={this.handleClick}>Search</button>
            </div>
        )
    }
}

export default Search;