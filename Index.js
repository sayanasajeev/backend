const express = require("express")//importing
const app=new express()//initialaize
app.use(express.json());
const dbArray = [
    {name:"miya",age:12},
    {name:"maya",age:42},
    
];
//update method
app.put("/edit",(req,res)=>{
    dbArray.splice(1,1,req.body);
    res.send("updated successfully");
})
//delete method
app.delete("/remove",(req,res)=>{
    dbArray.pop();
    res.send("deleted successfullly")
});
app.get('/',(req,res)=>{
    res.send("Message from the server")
})
app.get('/trial',(req,res)=>{
    res.send("Trial Message")
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data added")
})
app.get('/view',(req,res)=>{
    res.send(dbArray)
})

app.listen(8080,()=>{
    console.log("port is running")
})