const mongoose = require("mongoose");
//connecting database here
exports.connect = async () => {
  let rules = {
    useNewUrlParser: true,
    useUnifiedtopology: true,
    };
  await mongoose.connect(process.env.DATABASE_URI,rules).then((data) => {
    console.log(`mongoDB connection server ${data.connection.host}`);
  });
};
