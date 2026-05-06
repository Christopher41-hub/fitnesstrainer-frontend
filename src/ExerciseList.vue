<script setup lang="ts">
defineProps<{
  exercises: {
    title: string
    muscleGroup: string
    date: string
    reps: number
  }[]
}>()
</script>

<template>
  <ul>
    <li v-for="exercise in exercises" :key="exercise.title">
      <strong>{{ exercise.title }}</strong
      ><br />
      Muskelgruppe: {{ exercise.muscleGroup }}<br />
      Datum: {{ exercise.date }}<br />
      Wiederholungen: {{ exercise.reps }}
    </li>
  </ul>
</template>
