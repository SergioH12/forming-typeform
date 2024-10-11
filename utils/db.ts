// utils/db.ts
import pgPromise from "pg-promise";

const pgp = pgPromise();

const db = pgp({
  host: "localhost",
  port: 5432,
  database: "typeform_db",
  user: "postgres",
  password: "ioda1234567",
});

export default db;
