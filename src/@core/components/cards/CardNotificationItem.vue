<script setup lang="ts">
interface Props {
  title: string
  image: string
  description: string
  time: string;
  author: string;
}

const props = defineProps<Props>()

</script>

<template>
  <VCard class="w-100">
    <VCardText class="d-flex align-start  container-card">
      <img class="image-item" :src="props.image" alt="image">
      <div class="h-100 pl-3">
        <p class="card-title">{{ props.title }}</p>

        <p class="card-description">{{ props.description }}</p>
        <p class="card-author">{{props.time}}- {{ props.author }}</p>

      </div>
      <VSpacer />
      <MoreBtn size="x-small" />
    </VCardText>
  </VCard>
</template>
<style scoped>
.container-card {
  padding: 0;
}

.image-item {
  width: 8.6rem;
  height: 8.6rem;
}

.card-title {
  font-size:18px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 12px;
}

.card-description {
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 3em;
  line-height: 1.5em;
}
.card-author{
  font-size: 14px;
  text-align: right;
}
</style>