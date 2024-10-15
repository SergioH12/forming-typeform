// import type { NextApiRequest, NextApiResponse } from 'next';
// import db from '@/utils/db'; // Asegúrate de tener tu conexión importada

// type Data = {
//   message: string;
//   connected?: boolean;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   try {
//     // Intenta hacer una consulta simple para verificar la conexión
//     const result1 = await db.query('SELECT * FROM user_responses WHERE id = 1');
//     res.status(200).json({ message: 'Conexión exitosa', connected: true });
//     console.log(result1);
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error);
//     res.status(500).json({ message: 'Error al conectar a la base de datos', connected: false });
//   }
// }
