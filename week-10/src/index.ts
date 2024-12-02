import { Client } from "pg";

const client = new Client({
    host: "localhost",
    user: "root",
    password: "root",
    port: 5432,
    database: "posts",
});

const allUsers = async () => {
    await client.connect();
    const result = await client.query("SELECT * from USER");
    console.log(result);
};

const createUsersTable = async () => {
    await client.connect();

    const res = await client.query(`
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )    
    `);

    console.log(res);
};

createUsersTable();
