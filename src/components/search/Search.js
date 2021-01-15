import React from 'react'

const Search=() =>{
     const handleChange=(e) =>{
        e.preventdefault();
    }
    
    return (
        <div>
            <form><input type="text" name="search" placeholder="search.." onChange={handleChange}/></form>
        </div>
    )
}

export default Search
