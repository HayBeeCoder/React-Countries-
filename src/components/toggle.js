import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Toggle(props){
    function handleClick(e){
        // console.log(e.currentTarget.checked)
          props.toggleTheme(e.currentTarget.checked)
    }

    const LightMode = (
            <div> 
                <FontAwesomeIcon icon={['fas', 'sun']} size='lg' />
                <span className="ml-1">Light Mode</span>
            </div>
    )
    const DarkMode = (
        <div> 
        <FontAwesomeIcon icon={['fas', 'moon']} size='lg' />
        <span className="ml-1">Dark Mode</span>
    </div>

    )
    return (
        <div className='flex items-center justify-between gap-1 '>
             <input type='checkbox' id='toggle' className="hidden cursor-pointer appearance-none" onChange={handleClick} ></input>   
            {<label htmlFor='toggle' className="py-2 pl-3 text-xs font-semibold cursor-pointer inline-block" tabIndex='4'>
               {props.light ? LightMode : DarkMode}
               </label>
           }
        </div>
    )
}

export default Toggle;