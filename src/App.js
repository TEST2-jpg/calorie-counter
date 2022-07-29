import data from './Food_Display_Table.csv'
import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import Search from './components/Search'


function App() {
  const [foodData, setFoodData] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch(data)
      const reader = response.body.getReader()
      const result = await reader.read()
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value)
      const results = Papa.parse(csv, { header: true })
      setFoodData(results)
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Search data={foodData.data} />
    </div>
  );
}

export default App;
