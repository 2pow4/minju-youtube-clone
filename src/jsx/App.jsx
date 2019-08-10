import React from "react";
import Search from "./Search";
import PlayList from "./PlayList";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            keyword: '',
            results: []
        }
    }

    ComponentWillUpdate(){}

    handleSearch = (value) => {
        console.log("change keyword to" + value)
        this.setState({keyword : value})
    }

    render(){
        return(
            <div>
                <Search handleSearch={this.handleSearch}/>
                {this.state.results.map((result) => {
                    return (
                        //todo: arrange data for PlayList
                        <PlayList result={result}/>
                    )
                })}
            </div>
        )
    }
}

export default App;