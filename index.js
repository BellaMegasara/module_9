"use strict";
const User = require("./user"); 
const Post = require("./post"); 

async function init() {
  await User.sync(); 
  await Post.sync();

}

init();

Post.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Post, { foreignKey: "userId" }); 

module.exports = {
  User,
  Post,

};
