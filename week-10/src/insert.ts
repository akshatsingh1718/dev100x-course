import { Client } from "pg";

const client = new Client({
    host: "localhost",
    user: "root",
    password: "root",
    port: 5432,
    database: "posts",
});

const insert = async (username: string, email: string, password: string) => {
    const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

    const values = [username, email, password];

    try {
        await client.connect();
        const res = await client.query(query, values);
        console.log(`Insertion success: `, res);
    } catch (err) {
        console.log("Error during insertion");
    } finally {
        await client.end();
    }
};

insert("akshat1718", "akshat@gmail.com", "abcd1234@");
