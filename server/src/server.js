const app = require('./app');

const connectWithDb = require("./mongo");

const PORT = 5000;
app.listen(PORT, ()=>{
    connectWithDb();
    console.log("server is running on port", PORT);
});