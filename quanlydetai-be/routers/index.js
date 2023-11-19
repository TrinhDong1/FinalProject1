const userRouter = require("./user.router");
const majorRouter = require("./major.router");
const errorHandle = require("../middlewares/errorHandle");
module.exports = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/major", majorRouter);

  app.use(errorHandle);
};
