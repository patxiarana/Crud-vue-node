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


router.post('/tasks' , async (req,res) => {
  const {title, description} = req.body 

 const newTask =  new Task({title,description}) ; 
    
      await newTask.save();
    res.json(newTask) ; 

})

router.get('/tasks/:id' , async(req,res) => {
    try {
 console.log(req.params) 
 const task = await  Task.findById(req.params.id)
 if(!task){
    return res.status(404).json({'mesagge':'task not found'}) ; 
 }
res.send(task) ; 
    }catch(error) {
    return res.status(500).send(error)
    }

})

router.delete('/tasks/:id' , async (req,res) => {
try {
    const task =  await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({'message': 'Task not found'})
    return res.json(task)

}catch(error){
    return res.status(500).send(error); 
}
})

router.put('/tasks/:id' , async (req,res) => {
  const updateTask = await Task.findByIdAndUpdate(req.params.id , req.body, {
    new : true , 
  }) 
  res.json(updateTask)

})


export default router ; 