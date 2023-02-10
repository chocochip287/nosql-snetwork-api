const { connect, connection } = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/snetworkDB";

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// export

module.exports = connection;