exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.string("quote", 250);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
