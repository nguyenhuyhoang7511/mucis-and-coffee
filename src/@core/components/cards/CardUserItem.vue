<script setup lang="ts">
interface Props {
  userName: string
  userAvatar: string
  money: number
}

const props = defineProps<Props>()

</script>

<template>
  <VCard class="w-100 ">
    <VCardText class="d-flex align-start  container-card pa-2">
      <img class="image-item" :src="props.userAvatar" alt="image">
      <div class="h-100 pl-3">
        <p class="card-title">{{ props.userName }}</p>
        <p class="card-description">
          <VIcon icon="mdi-currency-usd" /> <span >{{ props.money }}</span>
        </p>
      </div>
      <VSpacer />
      <VIcon icon="mdi-star-circle" class="icon-star"/>
    </VCardText>
  </VCard>
</template>

<style scoped>
.image-item {
  width: 4rem;
  height: 4rem;
}
.icon-star{
  color: #a9870b
}
.card-description{
  color: green;
  font-weight: 700;
}
</style>
