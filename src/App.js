import foodData from './Food_Display_Table.csv'
import {useEffect} from 'react'
import Papa from 'papaparse'

function App() {
  console.log(foodData)
  useEffect(() => {
    async function getData() {
      const response = await fetch(foodData)
      const reader = response.body.getReader()
      const result = await reader.read()
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value)
      const results = Papa.parse(csv, { header: true })
    }
    getData()
  }, [])
  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;
