const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};
const ConnectionCheck = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  console.log("Connection Established....");

  await connection.endAsync();
};

const addmsg = async (data) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let addquery = `insert into message values (?)`;
  await connection.queryAsync(addquery, [data.chats]);
  console.log("message sent");

  await connection.endAsync();
};

const getmsg = async (data) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let getquery = `select * from message`;
  const list = await connection.queryAsync(getquery);
  //   console.log(list);

  await connection.endAsync();
  return list;
};

// const data = {
//   chats: "Hiii",
// };

// addmsg(data);
// ConnectionCheck();
// getmsg();

module.exports = { addmsg, getmsg };
