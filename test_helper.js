
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:/test" , {useNewUrlParser: true , useUnifiedTopology: true });

mongoose.connection
        .once("open" , () => console.log("Connected"))
        .on("error",(error) => {
            console.log("An error occured" , error)
        })

    
    