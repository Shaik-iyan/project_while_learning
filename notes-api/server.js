const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());
app.use(express.static("public"));
let notes=[];

app.get("/notes",(req,res)=>{
    res.json(notes);
});
app.post("/notes",(req,res)=>{
    const {title,content}=req.body;
    if(!title || !content){
        return res.status(400).json({
            message:"title and content are required"
        });
    }
    const newNote={
        id:notes.length+1,
        title:title,
        content:content
    };
    notes.push(newNote);
    res.status(201).json({
        message:"note created successfully",
        note:newNote
    });
});

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});

   