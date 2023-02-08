const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/snetworkDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// export

module.exports = mongoose.connection;