import {Schema, model} from 'mongoose' ; 


 const tasksSchema = new Schema ({
    title : {
        type: 'string',
        require : true ,
    } ,
    description : {
      type:"string" ,
      require:true , 
      trim : true , 
    } ,
    done : {
        type : Boolean ,
        default: false , 
    }
} , {
    versionKey : false , 
} , 
)


export default model('Task' , tasksSchema)

