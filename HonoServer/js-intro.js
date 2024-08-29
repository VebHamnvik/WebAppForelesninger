// Lager en variabel med verdi Vebjørn
const studentName = "Vebjørn";

//
const veb = {
    name: studentName,
    birthYear: 1992,
    isNew: false,
    role: 'student'
}

// lager en liste med studenter
const students = [
    veb, 
    {
        name: "Trude",
        birthYear: 1991,
        isNew: false,
        role: 'admin'
    },
    {
        name: "Sjokolade",
        birthYear: 1843,
        isNew: false,
        role: 'superadmin'
    },
    {
        name: "Simone",
        birthYear: 2001,
        isNew: true,
        role: 'student'
    }
]

// Lager en funksjon som returnerer de studentene som er født etter et gitt år
const getStudentsAboveBirthYear = (students, year) => {
    return students.filter((student) => student.birthYear > year)
}

// Bruker funksjonen og får de studentene soj er født etter 1991
const studentsAbove = getStudentsAboveBirthYear(students, 1991)

// Lager en funksjon som henter ut birthyear for stundetene og lager en "age" verdi
const transformStudents = students => students.map(student => ({
    ...student,
    age: new Date().getFullYear() - student.birthYear
}))

// Bruker funksjonen slik at alle studentene får "age"
const studentsWithAge = transformStudents(students)


// Lager en funksjon som finner en student som har et navn som matcher med det navnet som er gitt som arguemtn
const findStudent = (students, name) => {
    return students.find(student => student.name.toLowerCase() === name?.toLowerCase())
}

// Bruker funksjonen for å finne "Trude"
const studentFound = findStudent(students, 'Trude')

// Definerer roller
const roles = ['admin', 'superadmin']

// Lager en funksjon som returnerer de studentene i listen students som har passende rolle som er gitt som argument
const hasAccess = (roles, students) => {
    return students.filter(student => {
        return roles.includes(student.role)
    })
}

// Returnerer de studentene som har admin
const adminRoles = hasAccess(['admin'], students)
// Returnerer de studentene som har student
const studentRoles = hasAccess(['student'], students)
// Returnerer de studentene som har admin eller superadmin
const adminOrSuperAdmins = hasAccess(['admin', 'superadmin'], students)


// Funksjon for å ikke ta med navnet
const omitName = (students) => {
    return students.map(student => {
        const { name, ...rest } = student
        return rest
    })
}

// Bruker den funksjonen
const studentNameOmitted = omitName(students)

// Lager en kopi av objektet veb
const vebCopy = {...veb}
// Endrer navnet på kopiene
vebCopy.name = "Vebjørn changes"
// Hvis objektene er ett nivå dypt så kan man lage kopier og endre på verdiene slik
// Hvis det er såkalte objekter inne i objekter så vil dette ikke fungere veldig bra


// Denne metoden for å kopiere objekter fungerer hvis objektete har objekter inni seg
const vebCopy2 = structuredClone(veb)



