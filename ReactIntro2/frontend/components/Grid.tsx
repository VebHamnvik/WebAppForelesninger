import { useState } from 'react';
import Student from './Student'
import type { Student as StudentProps} from './types'
import AddStudentForm from '../components/AddStudentForm'

type GridProps = {
    students: StudentProps[];
}

export default function Grid(props: GridProps) {
    const [students, setStudents] = useState<StudentProps[]>(props.students ?? [])

    // Lager funksjon som forteller hvordan man legger til nye objekter i listen
    const onAddStudent = (student: { name: string }) => {
        setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }])
    }

    return (
        <section>
            <article className="grid">
                {students?.map((student) => (
                        <Student key={student.id} name = {student.name} id = {student.id} />
                ))}
                
            </article>
            {// Sender denne funksjonen inn som props i komponenten
            }
            <AddStudentForm onAddStudent={onAddStudent}/>
        </section>
    )
}