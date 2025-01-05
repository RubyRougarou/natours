const app = require("./app");

const port = process.env.PORT;

app.listen(3000, () => {
  console.log(`App is running on port ${port}`);
});
