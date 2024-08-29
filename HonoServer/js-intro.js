const studentName = "Vebjørn";

const veb = {
    name: studentName,
    birthYear: 1992,
    isNew: false,
    role: 'student'
}

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

const getStudentsAboveBirthYear = (students, year) => {
    return students.filter((student) => student.birthYear > year)
}

const studentsAbove = getStudentsAboveBirthYear(students, 1991)