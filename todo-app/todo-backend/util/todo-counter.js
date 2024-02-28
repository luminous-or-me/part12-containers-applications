const key = "added_todos";

const redis = require("../redis");

const getCount = async () => {
  const addedTodos = await redis.getAsync(key);

  return Number(addedTodos);
};

const incrementCount = async () => {
  const addedTodos = await getCount();

  await redis.setAsync(key, addedTodos + 1);
};

module.exports = {
  getCount,
  incrementCount,
};
