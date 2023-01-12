import './App.css';

import Header from './layout/Header';
import Content from './layout/Content';
import FileUploader from './components/FileUploader';
import { useEffect, useState } from 'react';
import { serverUrl } from './config';

function App() {
  const [tableData, setTableData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const setTableDataProperties = (newTableData) => {
    setTableData({
      ...tableData,
      ...newTableData
    })
  }

  const setLineItems = (newLineItems) => {
    setTableData({
      ...tableData,
      lineItems: newLineItems
    })
  }

  const fetchTableData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(serverUrl + '/invoice');
      const data = await response.json();
      setTableData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
      !isLoading ? (
        <>
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <Header
                email={tableData.email}
                fullName={tableData.fullName}
                company={tableData.company}
                createdAt={tableData.createdAt}
                dueAt={tableData.dueAt}
              />
              <Content
                lineItems={tableData.lineItems}
                setLineItems={setLineItems}
              />
            </tbody>
          </table>
          <FileUploader setTableData={setTableDataProperties} />
        </>
      ) : (
        <p>Loading... (is the server running?)</p>
      )
  );
}

export default App;
