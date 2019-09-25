const db = require("../../database/dbConfig");

module.exports = {
  add,
  remove,
  update,
  getUserPosts,
  getAllPosts,
  findById
};

function getAllPosts() {
  return db("posts")
    .join("users", "posts.user_id", "=", "users.id")
    .select(
      { username: "users.username" },
      { first_name: "users.first_name" },
      { last_name: "users.last_name" },
      "user_id",
      { post_id: "posts.id" },
      "img",
      "address",
      "description",
      "end_date",
      "start_date",
      "phone",
      "price",
      "zipcode",
      "posts.created_at",
      "posts.updated_at",
      "posts.rented"
    );
}

function findById(id) {
  return db("posts")
    .where("posts.id", id)
    .first()
    .join("users", "posts.user_id", "=", "users.id")
    .select(
      { username: "users.username" },
      { first_name: "users.first_name" },
      { last_name: "users.last_name" },
      "user_id",
      { post_id: "posts.id" },
      "img",
      "address",
      "description",
      "end_date",
      "start_date",
      "phone",
      "price",
      "zipcode",
      "posts.created_at",
      "posts.updated_at",
      "posts.rented"
      
    );
}

function getUserPosts(id) {
  return db("posts")
    .where("posts.user_id", id)
    .join("users", "posts.user_id", "=", "users.id")
    .select(
      { username: "users.username" },
      { first_name: "users.first_name" },
      { last_name: "users.last_name" },
      "user_id",
      { post_id: "posts.id" },
      "img",
      "address",
      "description",
      "end_date",
      "start_date",
      "phone",
      "price",
      "zipcode",
      "posts.created_at",
      "posts.updated_at",
      "posts.rented"
    );
}

async function add(post) {
  const [id] = await db("posts").insert(post, "id");

  return findById(id);
}

function remove(id) {
  return db("posts")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("posts")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}
