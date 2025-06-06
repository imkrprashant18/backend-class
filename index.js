// common js
// const express = require('express')
import express from  'express'
import messageRoutes from "./routes/user.route.js"
const app = express()
app.use(express.json())
const PORT = 8000
// routes, conttrollers
// app.get("/test", (req, res) => {
//         res.send("Hello World");
//       });
app.use("/api/v1", messageRoutes)
app.listen(PORT, ()=>{
        console.log(`Server is running on port  http://localhost:${PORT}`)
})