// import db from "@/utils/db"; // Conexión a la base de datos desde utils/db.ts

// export async function insertUserResponse(userData: {
//   nombre: string;
//   apellido: string;
//   sexo: string;
//   compania: string;
//   edad: number;
//   tecnologias: string;
//   correo: string;
//   fechaCumpleanos: Date;
//   puntuacion: number;
// }) {
//   const {
//     nombre,
//     apellido,
//     sexo,
//     compania,
//     edad,
//     tecnologias,
//     correo,
//     fechaCumpleanos,
//     puntuacion,
//   } = userData;

//   // Inserta los datos en la base de datos
//   const query = `
//     INSERT INTO user_responses (nombre, apellido, sexo, compania, edad, tecnologias, correo, fecha_cumpleanos, puntuacion)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//   `;

//   const values = [
//     nombre,
//     apellido,
//     sexo,
//     compania,
//     edad,
//     tecnologias,
//     correo,
//     fechaCumpleanos,
//     puntuacion,
//   ];

//   try {
//     await db.query(query, values); // Ejecuta la consulta usando tu conexión a la base de datos
//   } catch (error) {
//     console.error("Error al insertar los datos en la base de datos:", error);
//     throw error; // Lanza el error para que sea manejado en el handler
//   }
// }

// services/userResponses.ts
import db from "@/utils/db";

// Función para insertar una nueva respuesta
export async function insertUserResponse(data: {
  nombre: string;
  apellido: string;
  sexo: string;
  compania: string;
  edad: string;
  tecnologias: string[];
  correo: string;
  fechaCumpleanos: Date;
  puntuacion: number;
}) {
  const {
    nombre,
    apellido,
    sexo,
    compania,
    edad,
    tecnologias,
    correo,
    fechaCumpleanos,
    puntuacion,
  } = data;

  const result = await db.none(
    "INSERT INTO user_responses (nombre, apellido, sexo, compania, edad, tecnologias, correo, fecha_cumpleanos, puntuacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      nombre,
      apellido,
      sexo,
      compania,
      edad,
      tecnologias,
      correo,
      fechaCumpleanos,
      puntuacion,
    ]
  );

  return result;
}
