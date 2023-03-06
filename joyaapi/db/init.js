let db = connect("localhost:27017");

db = db.getSiblingDB("joya");
db.createUser({
  user: "admin",
  pwd: "admin_pwd",
  roles: [{ role: "readWrite", db: "joya" }],
});

db.userentities.insert({
  email: "joya@fibyou.fr",
  password: "$2a$10$mb4KMUbrRV.0In2AmNvt8u2WQyGI4h03cN6AWQxMUIqw2cst.3VCq",
  type: "admin",
});
