const express = require("express")
const dotenv = require("dotenv");

const app = express()
dotenv.config();
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

app.get("/", (req, res)=>{
  res.status(200).json("Server connected")
})

// Handles messages events
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  
}

app.listen(4000, ()=>console.log("server started at port 4000"))