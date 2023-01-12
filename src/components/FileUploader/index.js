import { FileUploader as ReactFileUploader } from "react-drag-drop-files";

function FileUploader({setTableData}) {
  const handleChange = (file) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file[0]);
  };

  function onReaderLoad(event) {
    console.log(JSON.parse(event.target.result));
    setTableData(JSON.parse(event.target.result))
  }

  return (
    <ReactFileUploader
      multiple={true}
      handleChange={handleChange}
      name="file"
      types={["JSON"]}
    />
  );
}

export default FileUploader;
