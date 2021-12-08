import Task from "../model/task-schema.js"
import User from "../model/user-schema.js"

// secret key 
const JWT_SECRET = 'sdjkfh8923@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

export const getUsers = async (request, response) => {

    try {
        const task = await Task.find()
        response.json(task)
    } catch (error) {
        response.json({message: error.message})
    }
}

export const addUser = async (request, response) => {
    const task = request.body
    const newUser = new Task(task)

    try {
        await newUser.save()
        response.json(newUser)
    } catch (error) {
        response.json({message: error.message})
    }
}

export const registerUser = async (request, response) => {
    const user = request.body
    const newUser = new User(user)
    try {
        console.log(user)
        await newUser.save()
        response.json({status: 'OK'})
    } catch (error) {
        response.json({message: error.message})
    }
}

export const loginUser = async (request, response) => {
    const username = request.body.username
    const password = request.body.password

    try {
        const user = await User.findOne({username:username, password:password})
        //console.log(user)
        user ? response.status(200).json(JWT_SECRET) : response.status(200).json(user)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await Task.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const getUserById = async (request, response) => {
    try{
        const task = await Task.findById(request.params.id);
        response.status(200).json(task);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    let task = await Task.findById(request.params.id);
    task = request.body;

    const editUser = new Task(task);
    try{
        await Task.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

