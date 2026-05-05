import { calculate } from "../sites/Calc";
function Build({button, value, setValue, setLastValue}: {button: string; value: string; setValue: (value: string) => void, setLastValue: (value: string) => void}){
    return( button == "Clear" ? <button onClick={()=> clear(setValue, setLastValue)} id={button} className="button">C</button> : button == "=" ? <button onClick={()=> calculate(value, setValue, setLastValue)} id="submit" className="button">=</button> : <button onClick={()=> addValue(button, value, setValue)} className="button">{button}</button> )
}
function addValue(newValue: string, value: string, setValue: (value: string) => void){
    setValue(value ? value + newValue: newValue)
}
function clear(setValue: (value: string) => void, setLastValue: (value: string) => void){
    setValue("")
    setLastValue("")
}
export default Build