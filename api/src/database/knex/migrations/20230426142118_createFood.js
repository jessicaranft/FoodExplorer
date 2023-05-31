exports.up = knex => knex.schema.createTable("food", table => {
  table.increments("id");
  table.text("title");
  table.text("category");
  table.text("price");
  table.text("description");
  table.varchar("image");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("food");