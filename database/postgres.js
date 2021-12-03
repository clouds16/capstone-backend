const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "hector",
  host: "localhost",
  database: "TestDatabase",
  password: "Cloud",
  port: "5432"
});


const query =   "INSERT INTO STUDENTS(uniqueID,Name, Owed) \
                VALUES(01, 'Hector', 20.00) ";

console.log('running')

pool.query( query,
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);