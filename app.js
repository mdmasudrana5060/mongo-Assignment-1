const express=require('express');
const cors=require('cors');
const userRoute=require('./app/modules/users/users.route')

const app=express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello from the Assignment 1')
});
app.use('/api/v1/user',userRoute);

app.use('*',(req,res)=>{
    res.send('404 Bad Url ,Data Not Found')
})

module.exports=app;
