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
            <VChip class="duration-box" variant="flat">
              {{ props.duration }}
            </VChip>
          </div>

          <div class="infor">
            <span class="name">{{ props.name }}</span>
            <span class="fz-14">{{ props.author }}</span>
            <span class="fz-14">316 Lượt xem - 1 tháng trước</span>
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

.avatar {
  position: relative;

}

.avatar img {
  width: 100%;
  height: auto;
}


.duration-box {
  position: absolute;
  bottom: 6px !important;
  right: 0;
  height: 24px;
}

.v-chip {
  height: 22px !important;
  border-radius: 0px !important;
  padding: 4px !important;
  font-weight: 800;
}

.name {
  max-width: 100%;
  font-size: 0.9rem;
  font-family: Inter, sans-serif;
  font-weight: 800;
  line-height: 1.5em;
  height: 1.6rem;
  overflow: hidden;

}

.infor {
  flex: 1;
  margin-left: 12px;
  height: 6rem;
  display: flex;
  flex-direction: column;
}

.duration {
  padding-right: 6px;
}

.fz-14 {
  font-size: 14px;
}
</style>
