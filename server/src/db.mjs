import pgp from "pg-promise";

import { load_dotenv_if_exists } from "./utils.mjs";

load_dotenv_if_exists();

const db = initDb();

export const getPosts = () => db.any("SELECT * FROM posts");

export const addPost = ({ color_name , release_year , image_url , image_description , instagram_handle }) =>
  db.one("INSERT INTO posts(color_name , release_year , image_url , image_description , instagram_handle ) VALUES($<color_name>, $<release_year>, $<image_url>, $<image_description>, $<instagram_handle>) RETURNING *", { color_name , release_year , image_url , image_description , instagram_handle });

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
