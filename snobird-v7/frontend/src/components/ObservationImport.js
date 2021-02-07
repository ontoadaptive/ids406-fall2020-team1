import React from 'react'
import { FileUploader} from"carbon-components-react"


const ObservationImport = () => {
    const getInput = (e) => {
        console.log('first',e)
        var reader = new FileReader();
        reader.readAsText(e[0])
        reader.onload = () => {
            console.log("success", e.target.result)
        }
        reader.onerror = () => {
            console.log("error")
        }
        

    }
    return (
        <>
            <FileUploader 
                buttonLabel ="Upload"
                accept = {['.csv']}
                onClick = {console.log("clicked")}
                onChange = {e => getInput(e.target.files)}/>
                
        </>
    );
}


export default ObservationImport