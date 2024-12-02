import { Client } from "pg";

const client = new Client({
    host: "localhost",
    user: "root",
    password: "root",
    port: 5432,
    database: "posts",
});

const select = async () => {
    try {
        await client.connect();

        const res = await client.query(`SELECT * FROM users`);

        console.log("All users: ", res);
    } catch (err) {
        console.log("Error during select: ", err);
    } finally {
        await client.end();
    }
};
select();
