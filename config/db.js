const mongoose =require("mongoose")
mongoose
  .connect('mongodb://127.0.0.1:27017/test-ff')
  .then(() => {
    console.log('connected');
  })
  .catch((e) => {
    console.log('error', e);
  });
