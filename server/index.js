const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const apiRouterUrl = "/api/v1";

app.use(express.json());
app.use(cors());
app.options("*", cors({ origin: true, credentials: true }));

app.use(apiRouterUrl, require('./routes/score'));


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
