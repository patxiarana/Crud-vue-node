<template>
    <form @submit.prevent="saveTask()">
        <input type="text"  placeholder="write a title" v-model="task.title">
        <textarea rows="3" placeholder="Write a description" v-model="task.description"></textarea>
       
        <button>Save</button>
    </form>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import {Task} from '@/interfaces/Task'; 
import {createTask } from "@/services/TaskServices" 

export default defineComponent({
  data() {
    return {
    task : {

    } as Task 
    } 
  }, 
  methods :  {
   async  saveTask() {
        const res = await createTask(this.task)
        console.log(res)
    }
  }
})

</script>