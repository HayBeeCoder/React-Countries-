// import conf from '../conf.jpg';

function Country(props){

    function handleCountryClick(e){
        props.onClick(props.id)
    }
    function formatNumber(number){
        number = String(number);
        let newNumber = '';
        while(number.length > 3){
            let slice = number.slice(-3);
            number = number.slice(0,-3);
            newNumber = ','+slice+newNumber;
        }
        return  number + newNumber;
    }
    return (
        <div className=" bg-white dark:bg-blue-750 shadow-md rounded-md overflow-hidden cursor-pointer" onClick={handleCountryClick}>
            <div className='relative h-40 w-full'>
                <img src={props.flag} alt={props.name + "'s flag"} className="inline-block absolute h-full w-full top-0 left-0 object-cover"/>
            </div>
            <article className="p-5">
                <h2 className="text-xl font-extrabold">{props.name}</h2>
                <ul>
                    <li className="text-tiny my-1">
                        <span className="font-semibold">Population: </span>
                        <span>{formatNumber(props.population)}</span>
                    </li>
                    <li className="text-tiny my-1">
                        <span className="font-semibold">Region: </span>
                        <span>{props.region}</span>
                    </li>
                    <li className="text-tiny my-1">
                        <span className="font-semibold">Capital: </span>
                        <span>{props.capital}</span>
                    </li>
                </ul>
            </article>
            
        </div>
    )
}

export default Country