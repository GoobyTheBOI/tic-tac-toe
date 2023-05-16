const router = require('express').Router();
// const {mysql} = require('../database/database');
const pool = require('../database/database');

/*
  * POST /api/v1/score
 */
router.post('/score', async (req, res) => {
  const { winner, board } = req.body;
  const sql = "INSERT INTO scores (winner, board) VALUES (?, ?)";
  const values = [winner, board.toString()];
  try {
    await pool.execute(sql, values);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: "Score inserted" });
})

module.exports = router;