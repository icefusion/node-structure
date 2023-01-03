import "dotenv/config";
import app from "./app";

(async () => {
  // connect do database here
  // await db.connect();
  // await redis.connect();

  app.listen(process.env.PORT, () => {
    console.log(`🎉 Server started on port ${process.env.PORT}`);
  });
})()


