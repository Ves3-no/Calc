import { calculate } from "../sites/Calc";
function Display({value, lastValue, setValue, setLastValue}: {value: string, lastValue: string, setValue: (value: string) => void, setLastValue: (value: string) => void  }){
    return (
        <>
        <p id="LastValue">{lastValue}</p>
        <input id="Value" value={value} type="text" onChange={(e)=> setValue(e.target.value)} onKeyDown={(e)=>  e.key === 'Enter' ? calculate(value, setValue, setLastValue): 0}/>
        </>
    )
}
export default Display