import { Server } from "http";
import app from "./app";

const PORT = process.env.PORT || 3000;

const main = async () => {
  const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
};

main();
