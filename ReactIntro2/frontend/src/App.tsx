import Grid from '../components/Grid'
import Total from '../components/Total'
import AddStudentForm from '../components/AddStudentForm'
import { useEffect, useState } from 'react'
import type { Student } from '../components/types'
import Filter from '../components/Filter'


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
  const [filter, setFilter] = useState("-")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [students, setStudents] = useState<Student[]>(studentsList ?? [])

  const filteredStudents = students.filter(student => 
    filter !== "-" ? student.name.toLowerCase().includes(filter) : true
  )

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true)

        const response = await fetch("http://localhost:3999/api/students")
        const data = await response.json()
        setStudents(data)
      } catch (error) {
        console.error(error)
        setError("Feilet ved henting av studenter")
      } finally {
        setLoading(false)
      }
    }
    fetchStudents()
  }, [])

  const options = Array.from(
    students
      .reduce((acc, student: Student) => {
        const name = student.name.trim().split(" ")[0];
        if (acc.has(name)) return acc;

        return acc.set(name, {
          ...student,
          value: name.toLowerCase(),
          label: name,
        });
      }, new Map())
      .values()
  );

  const onFilterChange = (filter: string) => {
    setFilter(filter)
  }

  const onAddStudent = (student: { name: string }) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }])
}

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };
  
  return (
  <main>
    <Filter filter={filter} onFilterChange={onFilterChange} options={Object.values(options)}/>
    <Grid 
      students={filteredStudents} 
      // onAddStudent={onAddStudent} 
      onRemoveStudent={onRemoveStudent}
      >
        <AddStudentForm onAddStudent={onAddStudent} />
    </Grid>
    <Total total={students.length}/>
  </main>
  
  )
}

export default App
