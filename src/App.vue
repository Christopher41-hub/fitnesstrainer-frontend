<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ExerciseList from './ExerciseList.vue'

type Exercise = {
  title: string
  muscleGroup: string
  date: string
  reps: number
}

const exercises = ref<Exercise[]>([])

onMounted(async () => {
  const response = await fetch('https://fitnesstrainer-diu4.onrender.com/fitnesstrainer')
  exercises.value = await response.json()
})
</script>

<template>
  <main>
    <h1>Fitness Trainer</h1>

    <ExerciseList :exercises="exercises" />
  </main>
</template>

<style scoped>
main {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
