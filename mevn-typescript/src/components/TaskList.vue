<template>
 <ul>
    <li v-for="(task, index) in tasks" :key="index">
     {{ task.title }}
    </li>
 </ul>
</template>




<script lang="ts">
import {defineComponent} from 'vue' 
import { Task } from '@/interfaces/Task'
import {getTask}  from '@/services/TaskServices'


export default defineComponent({
    data() {
        return {
            tasks : [] as Task[]
        }
    } , 
    methods : {
      async  loadTask() {
        const res =  await getTask()
       this.tasks = res.data
         } , 
    } , 
    mounted() {
     this.loadTask()
    }
})
</script>