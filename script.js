const student = [
  {
    name: "Luiz",
    note1: 6,
    note2: 7,
  },
  {
    name: "Alexandra",
    note1: 5,
    note2: 8,
  },
  {
    name: "Carlos",
    note1: 9,
    note2: 7,
  },
  {
    name: "Matheus",
    note1: 5,
    note2: 4,
  },
  {
    name: "João",
    note1: 3,
    note2: 10,
  },
]


function studentMedia(note1, note2) {
  return ((note1 + note2) / 2).toFixed(1)
  
}

function printStudentMedia(students) {

 if (studentMedia(students.note1, students.note2) > 6) { 
 return `
 O aluno(a) ${students.name}, com a nota ${students.note1} na primeira prova e ${students.note2} na segunda prova, totalizando a media de: ${studentMedia(students.note1, students.note2)}
 Parabens! você foi aprovado(a) no concurso.
 ` 
 } else {
 return `
  O aluno(a) ${students.name}, com a nota ${students.note1} na primeira prova e ${students.note2} na segunda prova, totalizando a media de: ${studentMedia(students.note1, students.note2)}
  Que pena! tente no proximo ano, você é capaz. 
  `
 }
 

}

for(let students of student) {
  
  let Mediamessage = printStudentMedia(students)
  alert(Mediamessage)

}

