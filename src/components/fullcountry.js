
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountryProperty from '../components/countryProp'
import BorderCountry from "../components/borderCountry"

function FullCountry({country,onButtonClick,countries,onBorderClick}){
     function handleButtonClick(){
        onButtonClick()
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
   function fullBordersInfo(border){
      let fullBorder;
          for(let country of countries){
                 if(country["alpha3Code"] === border){
                 fullBorder =   <BorderCountry info={country} onBorderClick={onBorderClick} id={country.id} name={country.name}/>
                break;
                 }
          }
          return fullBorder;
    }
 
    return (
         <section className="fixed overflow-y-scroll w-full top-0 bottom-0 bg-gray-50 dark:bg-blueGray-750 z-40 py-28">
             <div className="w-11/12 mx-auto">
             <button className="bg-white dark:bg-blueGray-750 py-1 px-6 flex justify-center gap-2 shadow-md" onClick={handleButtonClick}>
                 <span>
                 <FontAwesomeIcon icon={['fas', 'arrow-left']} size='sm' />
                 </span>
                 <span>Back</span>
            </button>
            <div className="pt-9 flex flex-col gap-10 lg:flex-row">
                <div className="w-full max-w-md h-56 relative  lg:w-3/5">
                    <img src={country.flag} alt={country.name +"'s flag"} className="absolute w-full h-full top-0 left-0 object-cover shadow-md"/>
                </div>
                <div>
                    <h1 className="text-lg font-extrabold mt-0 mb-3">{country.name}</h1>
                    <ul className="flex flex-col gap-6 md:flex-row">
                        <div>
                            <CountryProperty prop="Native Name" value={country.nativeName || 'nil;('}/>
                            <CountryProperty prop="Population" value={formatNumber(country.population) || 'nil;('}/>
                            <CountryProperty prop="Region" value={country.region || 'nil;('}/>
                            <CountryProperty prop="Sub Region" value={country.subregion || 'nil;('}/>
                            <CountryProperty prop="Capital" value={country.capital || 'nil;('}/>
                        </div>
                        <div>
                            <CountryProperty prop="Top Level Domain" value={country.topLevelDomain.join(',')}/>
                            <CountryProperty prop="Currencies" value={country.currencies.map(c => c.name).join(',')}/>
                            <CountryProperty prop="Languages" value={country.languages.map(c => c.name).join(',')}/>
                        </div>
                    </ul>
                     <CountryProperty prop="BorderCountries" value={country.borders.length ? country.borders.map(fullBordersInfo): 'NO COUNTRIES FOUND;('}  onBorderClick={onBorderClick}/> 
                </div>
            </div>
            </div>
            
         </section>
         )
    
}

export default FullCountry;