
let personCollection = require('./users.model')

const getAllUsers=(req,res)=>{
   
    res.send(personCollection)
};

const getRandomUser=(req,res)=>{
    const randomIndex = Math.floor(Math.random() * personCollection.length);
    const randomUser = personCollection[randomIndex];
    res.json(randomUser);
}

const createUser=(req,res)=>{
    if (!req.body.id || !req.body.name || !req.body.profession) {
        return res.status(400).json({ error: 'Please provide id, name, and profession in the request body.' });
    }

    let user={
        id:req.body.id,
        name:req.body.name,
        profession:req.body.profession,

    };
    personCollection.push(user);
    res.json(personCollection)
};
// update single user
const updateUser=(req,res)=>{
    let id=req.params.id;
   
   
  
    personCollection.filter((person) => {
        if (person.id == id) {
            person.name = req.body.name || person.name;
            person.profession = req.body.profession || person.profession;
        }
    });

    res.json(personCollection);
   
   
}



// update multiplae user
const updateMultipleUser = (req, res) => {
    const updates = req.body; 

    
    personCollection.forEach((person) => {
        const update = updates.find((update) => update.id === person.id);

        if (update) {
            person.name = update.name || person.name;
            person.profession = update.profession || person.profession;
        }
    });

    res.json(personCollection);
    
};





// delete user
const deleteUser=(req,res)=>{
    const id=req.params.id;
    console.log(id)
  
   personCollection= personCollection.filter((person)=>
        person.id!=id
    );
    res.json(personCollection)
}
module.exports={
    getAllUsers,
    getRandomUser,
    createUser,
    updateUser,
    updateMultipleUser,
    deleteUser
}