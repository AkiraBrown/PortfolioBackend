const app = require("./src/app.ts");
require("dotenv").config();
const PORT: string | number = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
