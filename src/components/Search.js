import { useState } from 'react'
import Description from "./Description"

const Search = ({ data }) => {
    const [term, setTerm] = useState('')
    const [searchedName, setsearchedName] = useState(false)
    const [itemNum, setItemNum] = useState(25)
    const searchFood = () => {
        setsearchedName([])
        setItemNum(25)
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
        setItemNum(25)
    }

    const loadMore = () => {
        setItemNum(items => items + 25)
    }
    
    return (
        <div className='search container'>
            <div className='input-group container p-3 border rounded mwidth sticky-top'>
                <input type='text' placeholder='e.g., pineapple, oreo, etc.' className='form-control rounded shadow-none bg-success bg-opacity-10' value={term} onChange={e => setTerm(e.target.value)} />
                <span><button className='btn btn-light mx-1 shadow-none' onClick={searchFood}>SEARCH</button></span>
                <span><button className='btn btn-light mx-1 shadow-none' onClick={clear}>CLEAR ALL</button></span>
            </div>
            {searchedName ? <p className='text-center mt-3'>{searchedName.length} results found</p> : null}
            {searchedName ? <ul className="list-group list-group-flush">
                {!searchedName.length ? <p>No matches found</p> : searchedName.slice(0, itemNum).map((info, i) => <Description info={info} i={i} key={i} />)}
            </ul> : <p className='text-center mt-3'>Search a food</p>}
            { itemNum <= searchedName.length  && <div className='text-center'>
                <button className='btn btn-primary text-center' onClick={loadMore}>Load</button>
            </div>}
        </div>
    )
}

export default Search