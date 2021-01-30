export default function BorderCountry({onBorderClick,id,name}){
    function handleButtonClick(){
        onBorderClick(id)
    }
    return (
        <button className="bg-white dark:bg-blueGray-750 py-1 px-6 flex justify-center gap-2 shadow-md" onClick={handleButtonClick}>{name}</button>
    )
}