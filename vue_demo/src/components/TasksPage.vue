<template>
  <div :key="task.id" v-for="task in tasks">
    <ViewTask
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import ViewTask from './ViewTask'
export default {
  name: 'TasksPage',
  props: {
    tasks: Array,
  },
  components: {
    ViewTask,
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>