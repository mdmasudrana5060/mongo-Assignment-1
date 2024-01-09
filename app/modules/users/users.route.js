const express =require('express');
const { getAllUsers, getRandomUser, createUser, updateUser, deleteUser, updateMultipleUser } = require('./users.controller');
const router=express.Router();



router.get('/',getAllUsers);
router.patch('/multiple-user',updateMultipleUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser)
router.post('/create-user',createUser);
router.get('/randomUser',getRandomUser);




module.exports=router;