// Arreglo para almacenar las tareas
const listaDeTareas = [];
//Se declara vacio para luego poder sumar todas las tareas a ese arreglo.



// Función constructora
class Tarea {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
// Creo la funcion constructora para usar como objeto la tarea que quiero agregar



// Función para agregar una tarea
function agregarTarea() {
    const nombre = prompt("Ingrese el nombre de la tarea:");
    const descripcion = prompt("Ingrese una descripción de la tarea:");
    if (nombre && descripcion) {
        const nuevaTarea = new Tarea(nombre, descripcion);
        listaDeTareas.push(nuevaTarea);
        alert("Tarea agregada con éxito.");
    }
}
// La funcion pushea una tarea llevando a la funcion constructora el nombre y la descripcion



// Función para ver todas las tareas
function verTodasLasTareas() {
    if (listaDeTareas.length === 0) {
        alert("La lista de tareas está vacía.");
    } else {
        let tareaString = "";
        listaDeTareas.forEach((tarea, index) => {
            tareaString += `Tarea ${index + 1}:\nNombre: ${tarea.nombre}\nDescripción: ${tarea.descripcion}\n\n`;
        });
        alert("Tareas:\n" + tareaString);
    }
}
// Muestro en pantalla con un foreach para cada tarea de la lista de tareas.



// Función para buscar una tarea
function buscarTarea() {
    const consulta = prompt("Ingrese una palabra clave para buscar:");
    if (consulta) {
        const tareasEncontradas = listaDeTareas.filter(tarea =>
            tarea.nombre.toLowerCase().includes(consulta.toLowerCase()) ||
            tarea.descripcion.toLowerCase().includes(consulta.toLowerCase())
        );
        if (tareasEncontradas.length === 0) {
            alert("No se encontraron tareas que coincidan con la búsqueda.");
        } else {
            let tareaString = "";
            tareasEncontradas.forEach((tarea, index) => {
                tareaString += `Tarea ${index + 1}:\nNombre: ${tarea.nombre}\nDescripción: ${tarea.descripcion}\n\n`;
            });
            alert("Tareas encontradas:\n" + tareaString);
        }
    }
}
// Utilizo el metodo filter para buscar palabras claves en la tarea. 




// Menú principal
let trueOrFalse = true;

while (trueOrFalse) {
    const opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Agregar tarea\n" +
        "2. Ver todas las tareas\n" +
        "3. Buscar tarea\n" +
        "4. Salir"
    );

    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            verTodasLasTareas();
            break;
        case "3":
            buscarTarea();
            break;
        case "4":
            trueOrFalse = false;
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
}
// Utilizo trueOrFalse para crear un bucle que pueda pararse y comparo con un switch las posibles opciones.



