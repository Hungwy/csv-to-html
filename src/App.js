import React from "react";
import { useState } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
import 'bootstrap/dist/css/bootstrap.css';


//https://www.npmjs.com/package/react-csv-to-table
//https://developer.mozilla.org/en-US/docs/Web/API/FileReader
//https://react-bootstrap.github.io/getting-started/introduction/

function App() {
    const [text, setText] = useState("Lae csv fail");

    let fileReader;

    const onChange = e => {
        let file = e.target.files;
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file[0]);
    };

    const handleFileRead = e => {
        let content = fileReader.result;
        setText(content);
    };
    return (
        <>
            <div>
                <input type="file" name="myfile" onChange={onChange} />
            </div>
            <CsvToHtmlTable
                data={text}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
            />
        </>
    );
}

export default App;