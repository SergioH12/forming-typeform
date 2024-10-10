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
  const { nombre, apellido, sexo, compania, edad, tecnologias, correo, fechaCumpleanos, puntuacion } = data;
  
  const result = await db.none(
    'INSERT INTO user_responses (nombre, apellido, sexo, compania, edad, tecnologias, correo, fecha_cumpleanos, puntuacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [nombre, apellido, sexo, compania, edad, tecnologias, correo, fechaCumpleanos, puntuacion]
  );

  return result;
}