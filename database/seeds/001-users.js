const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("users")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          {
            username: "user1",
            first_name: "james",
            last_name: "james",
            password: bcrypt.hashSync("password", 10),
            email: "user1@gmail.com",
            member:1
          },
          {
            username: "something",
            first_name: "jessica",
            last_name: "james",
            password: bcrypt.hashSync("password", 10),
            email: "user2@gmail.com",
            member:1
          },
          {
            username: "something1",
            first_name: "bert",
            last_name: "james",
            password: bcrypt.hashSync("password", 10),
            email: "user3@gmail.com",
            member:1
          },
          {
            username: "something3232",
            first_name: "richard",
            last_name: "james",
            password: bcrypt.hashSync("password", 10),
            email: "user4@gmail.com",
            member:0
          }
        ]);
      })
  );
};
