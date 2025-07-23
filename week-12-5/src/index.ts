import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
});

async function selectAllUsers() {
    await client.connect();

    const result = await client.query("select * from users");

    console.log(result);
}

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}

async function insertUserData(
    username: string,
    password: string,
    email: string
) {
    await client.connect();

    // prone to sql injections
    // const result = await client.query(`
    //     INSERT into users (username, password, email)
    //     VALUES ('${username}', '${password}', '${email}')
    //     `);

    const result = await client.query(
        `
        INSERT into users (username, password, email) 
        VALUES ($1, $2, $3)
        `,
        [username, password, email]
    );
    console.log(result);
}

insertUserData("akshat2", "root2", "akshat2@gmail.com");
// selectAllUsers();
