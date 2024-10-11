import type { NextApiRequest, NextApiResponse } from "next";
import { insertUserResponse } from "@/services/userResponses"; // Ajusta la ruta al servicio de base de datos donde guardas los datos

// Define el tipo de respuesta esperado
type Data = {
  message: string;
};

// Handler para la ruta API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      // Extrae los datos del cuerpo de la petición
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
      } = req.body;

      // Validación básica para asegurarnos de que los campos necesarios están presentes
      if (!nombre || !apellido || !correo) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
      }

      // Llama a la función para insertar la respuesta en la base de datos
      await insertUserResponse({
        nombre,
        apellido,
        sexo,
        compania,
        edad,
        tecnologias,
        correo,
        fechaCumpleanos: new Date(fechaCumpleanos), // Asegura que la fecha sea un objeto Date
        puntuacion,
      });

      // Responde con éxito
      res.status(200).json({ message: "Datos guardados correctamente" });
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      res.status(500).json({ message: "Hubo un error al guardar los datos" });
    }
  } else {
    // Maneja otros métodos HTTP si es necesario, pero no permitimos más que POST
    res.status(405).json({ message: "Método no permitido" });
  }
}
