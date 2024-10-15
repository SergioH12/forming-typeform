import type { NextApiRequest, NextApiResponse } from "next";
import { insertUserResponse } from "@/services/userResponses"; // Ajusta la ruta al servicio de base de datos donde guardas los datos
import db from "@/utils/db"; // Ajusta esta ruta si tienes un archivo para la configuración de la conexión a la base de datos

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
      // Verifica la conexión a la base de datos
      await db.query("SELECT * FROM user_responses WHERE id = 1");
      console.log("Conexión a la base de datos exitosa");

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

      // Asegúrate de que no hay campos nulos
      if (
        !nombre ||
        !apellido ||
        !correo ||
        !edad ||
        !tecnologias.length ||
        !fechaCumpleanos ||
        !puntuacion
      ) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
      }

      // Inserción en la base de datos
      await insertUserResponse({
        nombre,
        apellido,
        sexo,
        compania,
        edad,
        tecnologias,
        correo,
        fechaCumpleanos: new Date(fechaCumpleanos), // Verifica que esto sea un objeto Date
        puntuacion: Number(puntuacion), // Verifica que esto sea un número
      });

      // Responde con éxito
      res.status(200).json({ message: "Datos guardados correctamente" });
    } catch (error) {
      console.error(
        "Error al conectar con la base de datos o guardar los datos:",
        error
      );
      res.status(500).json({
        message:
          "Hubo un error al conectar con la base de datos o guardar los datos",
      });
    }
  } else {
    // Maneja otros métodos HTTP si es necesario, pero no permitimos más que POST
    res.status(405).json({ message: "Método no permitido" });
  }
}
