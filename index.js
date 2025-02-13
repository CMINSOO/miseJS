const mysql = require("mysql2/promise");

async function insertProblem() {
  const connection = await mysql.createConnection({
    host: ""
    user: ""
    password: ""
    database: ""
  });

  //   const sample = ["돌아가나?"];
  const description = [
    "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    "Reverse a singly linked list.",
    "Determine if a 9x9 Sudoku board is valid.",
    "Find the longest common prefix string amongst an array of strings.",
    "Merge two sorted linked lists and return it as a new sorted list.",
    "Given an array of integers, find the maximum product of three numbers.",
    "Find the minimum path sum from top left to bottom right of a matrix.",
    "Implement a queue using stacks.",
    "Check if a string is a valid palindrome.",
    "Convert a binary tree to a doubly linked list in place.",
  ];

  const insertValue = description.map(async (e) => {
    return await connection.query(
      "INSERT INTO temp_DevProblemMeta (description) VALUES (?)",
      [e]
    );
  });
  const result = await Promise.all(insertValue);

  const devId = result.map((e) => e[0].insertId);
  const prodValue = devId.map((e) => [e]);
  console.log("#", prodValue);

  await connection.query(
    "INSERT INTO temp_ProdProblemMeta (devproblemmeta_id) VALUES ?",
    [prodValue]
  );
  await connection.end();
}
insertProblem();
