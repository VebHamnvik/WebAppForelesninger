import Grid from '../components/Grid'


const studentsList = [
  {
    id: "1",
    name: "Vebjørn"
  },
  {
    id: "2",
    name: "Maream"
  },
  {
    id: "3",
    name: "Jørgen"
  },
  {
    id: "4",
    name: "Kosovare"
  },
  {
    id: "5",
    name: "Mathias"
  }]

function App() {
  
  return (
  <main>
    <Grid students={studentsList} />
  </main>
  
  )
}

export default App
