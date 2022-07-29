import { useState } from 'react'
import Description from "./Description"

const Search = ({ data }) => {
    const [term, setTerm] = useState('')
    const [searchedName, setsearchedName] = useState(false)
    const [itemNum, setItemNum] = useState(25)
    const searchFood = () => {
        setsearchedName([])
        if (term === '') return setsearchedName(false)
        const name = data.filter(food => {
            if (!food.Display_Name) return null
            return food.Display_Name.toLowerCase().includes(" " + term.toLowerCase()) || food.Display_Name.toLowerCase().includes(term + " ".toLowerCase())
        })
        setsearchedName(name)
    }
    const clear = () => {
        setsearchedName(false)
        setTerm('')
    }

    const loadMore = () => {
        setItemNum(items => items + 25)
    }
    return (
        <div>
            <div className='input-group container p-3 border rounded mwidth'>
                <input type='text' className='form-control rounded shadow-none bg-success bg-opacity-10' value={term} onChange={e => setTerm(e.target.value)} />
                <span><button className='btn btn-light mx-1' onClick={searchFood}>SEARCH</button></span>
                <span><button className='btn btn-light mx-1' onClick={clear}>CLEAR ALL</button></span>
            </div>
            {searchedName ? <ul className="list-group list-group-flush">
                {!searchedName.length ? <p>No matches found</p> : searchedName.slice(0, itemNum).map((info, i) => <Description info={info} i={i} key={i} />)}
            </ul> : <p>Search a food</p>}
            <button onClick={loadMore}>Load</button>
        </div>
    )
}

export default Search