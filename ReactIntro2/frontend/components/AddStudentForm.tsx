import { useState } from "react";

// Definerer typen som gjør at vi kan sende inn en funksjon som props
type AddStudentFormProps = {
    onAddStudent: ({ name } : { name: string } )=> void;
}

export default function AddStudentForm(props: AddStudentFormProps) {
    const { onAddStudent } = props
    const [name, setName] = useState('')

    //Bruker funksjonen som ble sendt som props i funksjonen som blir knyttet opp mot submit i formen
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name) return
        onAddStudent( { name } )
        setName('')
    }

    return (
        //Bruker funksjonen i formen
        <form onSubmit={handleSubmit} className="add-student-form" method="post">
            <label htmlFor="name">Navn:</label>
            <input placeholder="Skriv inn navnet ditt her..." id="name"  type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Legg til student</button>
        </form>
    )
}