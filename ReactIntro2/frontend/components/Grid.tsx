import { useState } from 'react';
import Student from './Student'
import type { Student as StudentProps} from './types'
import AddStudentForm from '../components/AddStudentForm'

type GridProps = {
    students: StudentProps[];
}

export default function Grid(props: GridProps) {
    const [students, setStudents] = useState(props.students ?? [])

    const handleAddStudent = (studentName: string) => {
        console.log(`Student added: ${studentName}`)
      }

    return (
        <article className="grid">
            {students?.map((student) => (
                    <Student key={student.id} name = {student.name} id = {student.id} />
            ))}
            <AddStudentForm onAddStudent={handleAddStudent}/>
        </article>
    )
}