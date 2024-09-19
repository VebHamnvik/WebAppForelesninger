import { useState } from "react";

type AddStudentFormProps = {
    onAddStudent: (studentName: string) => void;
}

export default function AddStudentForm({ onAddStudent }: AddStudentFormProps) {
    const [newStudent, setNewStudent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAddStudent(newStudent)
        setNewStudent('')
    }

    return (
        <form className="add-student-form" method="post">
            <label htmlFor="name">Navn:</label>
            <input placeholder="Skriv inn navnet ditt her..." name="name"  type="text" onChange={(e) => setNewStudent(e.target.value)}/>
            <button type="submit">Legg til student</button>
        </form>
    )

}