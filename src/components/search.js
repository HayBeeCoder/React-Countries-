
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function SearchBox({onSubmit,clearSearch,setClearSearch}){
    const [country,setCountry] = useState('')
    function handleInput(e){
        setCountry(e.target.value)
           onSubmit(e.target.value)
    }
  
    return (
        <form className='dark:bg-blue-750 bg-white shadow-md rounded-sm overflow-hidden w-full px-4 flex items-center justify-center' onSubmit={(e) => e.preventDefault()}>
            {/* set line height to normal to let text inside a label/p tag align vertically */}
        <label htmlFor="new-search" className="h-auto mx-5 text-center inline-block leading-normal">
        <FontAwesomeIcon icon={['fas', 'search']} size='xs' />  
      </label>
      <input
      type="text"
      id="new-search"
      placeholder= 'Search for a country...'
      className='p-2 m-1 flex-grow text-sm leading-normal  bg-transparent outline-none'
      tabIndex='5'
      value= {country}
      onChange={handleInput}
    />
    </form>
    )
}

export default SearchBox;