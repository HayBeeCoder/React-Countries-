
function CountryProperty({prop,value}){
    console.log(value)
    return (
        <li className="text-tiny my-2 list-none">
            <span className="font-semibold">{prop+': '}</span>
                <span className={typeof value === 'object' ? 'flex gap-2 mt-2 flex-wrap' : ''}>{ typeof value === 'object' ? [...value] : value}</span>
        </li>
    )
}

export default CountryProperty;
