import { Router } from "express";
import Task from "../models/Task" ; 

const router = Router() ; 


router.get('/tasks' , async (req,res) => {
    try {
  const tasks =   await Task.find() ; 
  console.log(tasks)
    res.send(tasks) ;
    }catch(error) {
        console.log(error)
    } 

})


router.post('/tasks' , (req,res) => {
  const {title, description} = req.body 

 const newTask =  new Task({title,description}) ; 
 console.log(newTask)
    res.send("creating task") ; 

})

router.get('/tasks/:id' , (req,res) => {
    res.send("getting a task") ; 

})

router.delete('/tasks/:id' , (req,res) => {
    res.send("deleting a task") ; 

})

router.put('/tasks/:id' , (req,res) => {
    res.send("updating a task") ; 

})


export default router ; 