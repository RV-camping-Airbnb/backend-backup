exports.up = function(knex) {
  return knex.schema.createTable("posts", tbl => {
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.increments();

    tbl.string("zipcode", 1000);

    tbl.string("address", 1000);

    tbl.integer("price");

    tbl.string("phone");

    tbl.string("start_date");

    tbl.string("end_date");

    tbl.string("description", 1000).notNullable();

    tbl.boolean("rented");

    tbl.string("img").notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};
