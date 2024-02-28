const express = require("express");
const router = express.Router();

const configs = require("../util/config");
const { getCount } = require("../util/todo-counter");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get("/statistics", async (_req, res) => {
  const added_todos = await getCount();

  res.json({ added_todos });
});

module.exports = router;
