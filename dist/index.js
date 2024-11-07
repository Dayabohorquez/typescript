"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante_1 = __importDefault(require("./mostrarEstudiante"));
// Definir variables de tipo dato
const e1 = {
    nombre: "Anyi",
    apellido: "Rojas",
    edad: 18,
    addresses: [
        {
            street: "Siempre Viva",
            number: 34,
            city: "Bogotá"
        },
        {
            street: "Siempre Viva",
            number: 23,
            city: "Bogotá"
        }
    ]
};
const e2 = {
    nombre: "Dayana",
    apellido: "Gomez",
    edad: 17,
    addresses: [
        {
            street: "Buena Calle",
            number: 120,
            city: "Bogotá"
        },
        {
            street: "Mala Calle",
            number: 25,
            city: "Medellin"
        },
        {
            street: "Calle",
            number: 44,
            city: "Bogotá"
        }
    ]
};
// Crear arreglo para almacenar estudiantes
let arregloEstudiantes = [];
// Agregr primeros elementos 
arregloEstudiantes.push(2);
arregloEstudiantes.push("Jorge");
arregloEstudiantes.push("Carlos");
arregloEstudiantes.push(3);
// Método para agregar un estudiante
const addEstudiante = (e) => {
    arregloEstudiantes.push(e);
};
addEstudiante(e1);
addEstudiante(e2);
// Recorrer arreglo estudiantes mostrando solo los estudiantes
arregloEstudiantes.forEach((elemento) => {
    if (typeof elemento === 'object' && 'nombre' in elemento && 'apellido' in elemento) {
        (0, mostrarEstudiante_1.default)(elemento);
    }
});
/*
// Método para añadir estudiante al principio del arreglo
const addEstudiantePrincipio = (e: Estudiante) => {
    arregloEstudiantes.unshift(e);
}

// Método para encontrar un estudiante por nombre y actualizar su apellido
const actualizarApellidoPorNombre = (nombre: string, apellido: string) => {
    const estudiante = arregloEstudiantes.find(e => e.nombre === nombre);
    if (estudiante) {
        estudiante.apellido = apellido;
        console.log(`Apellido de ${nombre} actualizado a ${apellido}.`);
    } else {
        console.log(`Estudiante con nombre ${nombre} no encontrado.`);
    }
}

// Método para encontrar los estudiantes que vivan en Bogotá y actualizar su edad a 18
const actualizarEdadenBogota = () => {
    arregloEstudiantes.forEach(estudiante => {
        const viveEnBogota = estudiante.addresses?.some(address => address.city === "Medellin");
        if (viveEnBogota) {
            estudiante.edad = 18;
        }
    });
}

// Método para borrar un estudiante por nombre y apellido
const borrarPorNombreyApellido = (nombre: string, apellido: string) => {
    const longitudOriginal = arregloEstudiantes.length;
    arregloEstudiantes = arregloEstudiantes.filter(e => e.nombre !== nombre || e.apellido !== apellido);
    const elementosEliminados = longitudOriginal - arregloEstudiantes.length;
    console.log(`${elementosEliminados} estudiante(s) eliminado(s).`);
}

// Método para borrar los estudiantes que tengan menos de 18 años y vivan en Bogotá
const borrarMenoresenBogota = () => {
    const longitudOriginal = arregloEstudiantes.length;
    arregloEstudiantes = arregloEstudiantes.filter(estudiante => {
        const viveEnBogota = estudiante.addresses?.some(address => address.city === "Bogotá");
        return !(estudiante.edad < 18 && viveEnBogota);
    });
    const elementosEliminados = longitudOriginal - arregloEstudiantes.length;
    console.log(`${elementosEliminados} estudiante(s) eliminado(s).`);
}

// Invocar los métodos para manipular el arreglo de estudiantes
addEstudiante(e1);
addEstudiantePrincipio(e2);
console.log(arregloEstudiantes);

actualizarApellidoPorNombre("Anyi", "Mendivelso");
console.log(arregloEstudiantes);

actualizarEdadenBogota();
console.log(arregloEstudiantes);

borrarPorNombreyApellido("Dayana", "Gomez");
console.log(arregloEstudiantes);

borrarMenoresenBogota();
console.log(arregloEstudiantes);
*/ 
