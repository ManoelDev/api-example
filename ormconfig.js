import 'dotenv/config';
module.exports = [
  {
    "name": "default",
    "type": "postgres",
    "host": process.env.POSTGRES_HOST,
    "port": process.env.POSTGRES_PORT,
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASS,
    "database": process.env.POSTGRES_DATA,
    "logging": false,
    "entities": ["./src/modules/**/entities/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"],
    "cli": { "migrationsDir": "./src/database/migrations" }
  }
]
