import { useState} from 'react'
import Description from "./Description"
const Search = ({data}) => {
    const [term, setTerm] = useState('')
    const [searchedName, setsearchedName] = useState('')
    const searchFood = () => {
        const name = data.filter(food => {
            if(!food.Display_Name) return null
            return food.Display_Name.toLowerCase().includes(term.toLowerCase())
        })
        setsearchedName(name)
    }
    
    return (
        <div>
            <input type='text' value={term} onChange={e => setTerm(e.target.value)}/>
            <span><button onClick={searchFood}>Submit</button></span>
            {searchedName && searchedName.slice(0, 15).map((info, i) => <Description info={info} i={i}/>)}
        </div>
    )
}

export default Search