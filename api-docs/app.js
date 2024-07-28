const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/api-docs.json");

const app = express();
const port = 3000;

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
