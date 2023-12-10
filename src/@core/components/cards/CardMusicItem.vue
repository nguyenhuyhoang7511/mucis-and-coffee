<script setup lang="ts">
interface Props {
  name: string
  author: string
  duration: string
  avatar: string
}

const props = defineProps<Props>()


</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <div class="container-card">
          <div class="avatar">
            <img :src="props.avatar" alt="">
          </div>
          <div class="infor">
            <span class="name">{{ props.name }}</span>
            <span class="author">{{ props.author }}</span>
            <span class="duration">{{ props.duration }}</span>
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style scoped>
.v-card {
  border-radius: px;
}

.container-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.avatar img {
  width: 120px;
  height: 100%;
}

.infor span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  font-size: 14px;
  font-family: Inter, sans-serif;
}

.name {
  font-weight: 800;
}

.infor {
  flex: 1;
  margin-left: 12px;
  padding: 12px 0px;
  width: 7rem;
}

.duration {
  text-align: right;
  padding-right: 6px;
}
</style>
