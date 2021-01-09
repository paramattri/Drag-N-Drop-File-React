import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone';
import axios from 'axios'

function DragNDrop() {

    const { getRootProps, getInputProps } = useDropzone();
    const [config, setConfig] = useState()

    ondragover = (e) => {
        e.preventDefault()
    }

    ondrop = (e) => {
        e.preventDefault()
        //console.log(e.dataTransfer.files)
        Array.from(e.dataTransfer.files)
        .filter((file) => file.type === "application/json" && file.name === "insurance_config.json")
        .forEach(async (file) => {
            const text = await file.text()
            console.log(text)
            setConfig(text)
        })
    }

    const sendConfigData = () => {
        (
            typeof config !== 'undefined'
             &&
            axios.post("http://localhost:9090/api/configs", JSON.parse(config)).then((response) => {
                console.log("Config Data Sent")
                console.log(response)
            })
        )
    }

    useEffect(() => {
        (
            typeof config !== 'undefined'
             &&
            console.log("Changes in File Detected", typeof JSON.parse(config))
            // axios.post("https://reqres.in/api/users", config).then((response) => {
            //     console.log("Config Data Sent")
            //     console.log(response)
            // })
        )
    }, [config])

    return (
        <div className="dragDrop">
            <div {...getRootProps({className: 'dropzone'})} style={{padding: 30, border: '2px dotted gray', width: '60%', margin: 'auto', marginTop: 50}}>
                <input {...getInputProps()}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <p>{config}</p>
            <button onClick={sendConfigData}>Send Data</button>
        </div>
        
    )
}

export default DragNDrop
