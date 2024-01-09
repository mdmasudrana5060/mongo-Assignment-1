const app=require('./app');
const PORT=5001;

app.listen(PORT,()=>{
    console.log(`Listening from the port number http://localhost:${PORT}`)
})