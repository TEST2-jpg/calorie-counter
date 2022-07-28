import { useState } from 'react'
import Description from "./Description"

const Search = ({ data }) => {
    const [term, setTerm] = useState('')
    const [searchedName, setsearchedName] = useState(false)
    const searchFood = () => {
        if(term === '') return setsearchedName(false)
        const name = data.filter(food => {
            if (!food.Display_Name) return null
            return food.Display_Name.toLowerCase().includes(" " + term.toLowerCase()) || food.Display_Name.toLowerCase().includes(term + " ".toLowerCase())
        })
        setsearchedName(name)
    }
    const clear = () => {
        setsearchedName(false)
    }
    return (
        <div>
            <input type='text' value={term} onChange={e => setTerm(e.target.value)} />
            <span><button onClick={searchFood}>Submit</button></span>
            <span><button onClick={clear}>Clear</button></span>
            {searchedName ? <ul className="list-group list-group-flush">
                {searchedName !== [] ? searchedName.slice(0, 25).map((info, i) => <Description info={info} i={i} key={i} />) : <p>No matches found</p>}
            </ul> : <p>Search a food</p>}
        </div>
    )
}

export default Search