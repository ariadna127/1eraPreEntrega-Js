//Calcular nota final y asignar calificacion.

let nombreAlumno = "";
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let continuar = true;

do {
    nombreAlumno = prompt("Ingrese el nombre del alumno.")

    if (nombreAlumno == "" || !isNaN(nombreAlumno)) {
        nombreAlumno = prompt("Hubo un error. Por favor, ingrese un nombre válido");
    }

    nota1 = Number(prompt("Ingrese la nota del primer parcial."));

    if (isNaN(nota1) || nota1 == "" || nota1 < 0 || nota1 > 10) {
        nota1 = Number(prompt("Hubo un error. Por favor, ingrese una nota válida entre 0 y 10"));
    }
    
    nota2 = Number(prompt("Ingrese la nota del segundo parcial."));

    if (isNaN(nota2) || nota2 == "" || nota2 < 0 || nota2 > 10) {
        nota2 = Number(prompt("Hubo un error. Por favor, ingrese una nota válida entre 0 y 10"));
    }

    nota3 = Number(prompt("Ingrese la nota del tercer parcial."));
    
    if (isNaN(nota3) || nota3 == "" || nota3 < 0 || nota3 > 10) {
        nota3 = Number(prompt("Hubo un error. Por favor, ingrese una nota válida entre 0 y 10"));
    }

    const calcularNotaFinal = (a, b, c) =>{
        let promedio = 0;
        return promedio = Number(((a + b + c)/3).toFixed(2));

    }
    
    const asignarCalificacionFinal = (notaFinal) =>{
        if (notaFinal >= 5) {
            alert("El alumno " + nombreAlumno + " ha APROBADO con una nota final de " + notaFinal);
        } else {
            alert("El alumno " + nombreAlumno + " ha DESAPROBADO. Nota final: " + notaFinal)
        }
    }

    const notaFinal = calcularNotaFinal(nota1, nota2, nota3);
    asignarCalificacionFinal(notaFinal);

    continuar = confirm("¿Desea calcular el promedio de otro alumno?")
} while (continuar);