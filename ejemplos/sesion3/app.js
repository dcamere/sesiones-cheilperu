const Express = require('express')
const App = Express()
App.get("/", (req, res) => {
    res.send("welcome to the jungle 2")
});

App.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`process listen at port ${process.env.PORT}`)
});

// test