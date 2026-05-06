import BuildNumberButtons from "../components/BuildNumberButtons"
import Display from "../components/Display"
import { useState } from "react"
function Calc() {
    const [Value, setValue] = useState("")
    const [lastValue, setLastValue] = useState("")
    const buttons = ["%", "(", ")", ",", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8",  "9", "/", "Clear", "0", "=", "*"]
    return (
        <div id="Calc">
            <div id="display">
                <Display value={Value} lastValue={lastValue} setValue={setValue} setLastValue={setLastValue}/>
            </div>
            <div id="Buttons">
                {buttons.map((button, index) => {
                    return (<BuildNumberButtons key={index} button={button} value={Value} setValue={setValue} setLastValue={setLastValue}/>)
                })}
            </div>
        </div>
    )}
    function calculate(Value: string, setValue: (value: string) => void, setLastValue : (value: string) => void){
        setLastValue(Value)
        setValue(eval(Value)? eval(Value): "")
    }
export { calculate };
export default Calc