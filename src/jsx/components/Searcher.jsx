import React from 'react'

const Searcher = (props) => { 
        return (
            <div>
                <input name='keyword' value={props.keyword} onChange={props.handleChange}>
                </input>
                <button className='button' onClick={props.handleSearch}>Search</button>
            </div>
        )
    }

export default Searcher;