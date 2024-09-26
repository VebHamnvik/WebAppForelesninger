import Grid from '../components/Grid'
import Total from '../components/Total'
import { useState } from 'react'
import type { Student } from '../components/types'


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
  const [students, setStudents] = useState<Student[]>(studentsList ?? [])

  const onAddStudent = (student: { name: string }) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }])
}

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };
  
  return (
  <main>
    <Grid students={students} onAddStudent={onAddStudent} onRemoveStudent={onRemoveStudent}/>
    <Total total={students.length}/>
  </main>
  
  )
}

export default App
