// Primitive type
type ID = string;

// Dette funker ikke, her lager vi en variabel som heter id av typen ID og gir den verdier 2
// Dette funker ikke fordi typen ID krever at verdien er en string
// const id: ID = 2

// Dette er riktig
const id: ID = "2";

type HabitObject = {
    id: ID;
    title: string;
    // Spørsmålstegn tilsier at denne variabelen i objektet er optional
    createdAt?: string | Date;
};

// Så begge disse to objektene er riktige
const object: HabitObject = {
    id: '1',
    title: 'title',
    createdAt: new Date()
}

const object2: HabitObject = {
    id: '1',
    title: 'title',
    //createdAt: new Date()
}

// Lager en liste som bare kan holde på objekter av typen HabitObject
type HabitArray = HabitObject[];

const habitArray: HabitArray = [object, object2];

//
type HabitTitle = Pick<HabitObject, "title">;

// Lager en "sub"type av en annen type, men vi kan spesifisere hvilke verdier som ikke skal være med
// så her lager vi en subtype av HabitType, men id skal ikke være med
type CreateHabitDTO = Omit<HabitObject, "id">;

// Lager en funksjon som lager et objekt av subtypen
const createHabit = (Data: CreateHabitDTO) => {
    return Data;
}

// Kaller på denne funksjonen med riktig argumenter. Hvis "id" hadde vært med så ville det blitt feil
createHabit({ title: "Test"});

// Feil
// createHabit({ id: "2", title: "Test"});


type FancyID = `${string}-${string}-${string}`;

const fancyID: FancyID = "test-ny-streng";

type StudentMeta = {name: string; birthYear: number;}
type StudentRecord = Record<FancyID, StudentMeta>;
type Student = string | StudentRecord


// Konseptet med Promise er at det skjer 
const getStudent = async (
    students: Student[],
    id: FancyID
  ): Promise<StudentRecord | undefined | never> => {
    if (students.every((s) => typeof s === "string"))
      throw new Error("Can not locate user when all are strings");
    return students
      .filter((student) => typeof student !== "string")
      .find((student) => student[id]);
  };

const students: Student[] = [
    "Lars",
    { "a-b-c": { name: "Frida", birthYear: 1992 } },
];

getStudent(students, "a-b-c").then((data) => console.log(data));