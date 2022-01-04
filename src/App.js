import React,{useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web"


const App = () => {

    useEffect(() => {
        alanBtn({
            key:alanKey,
            onCommand: ({command}) => {
                if(command === 'testCommand) {
                    alert('this code was executed!');
                }
            }
        })
    },[])

return(
    <div>
        <hi>Alan AI News Application</hi>
    </div>
)
}

export default App;