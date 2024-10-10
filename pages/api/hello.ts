// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { insertUserResponse } from "@/services/userResponses"; // Ruta hacia el servicio


type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Obtener los datos del cuerpo de la petición
      const { nombre, apellido, sexo, compania, edad, tecnologias, correo, fechaCumpleanos, puntuacion } = req.body;

      // Insertar los datos en la base de datos
      await insertUserResponse({
        nombre,
        apellido,
        sexo,
        compania,
        edad,
        tecnologias,
        correo,
        fechaCumpleanos: new Date(fechaCumpleanos),
        puntuacion,
      });

      // Responder con éxito
      res.status(200).json({ message: "Datos guardados correctamente" });
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      res.status(500).json({ error: "Hubo un error al guardar los datos" });
    }
  } else {
    // Manejar otros métodos HTTP si es necesario
    res.status(405).json({ error: "Método no permitido" });
  }
}

