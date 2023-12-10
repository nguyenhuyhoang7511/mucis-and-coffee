<script setup lang="ts">
interface Props {
  name: string
  price: number
  amount?: string
  image: string
}

const props = defineProps<Props>()

function formatNumber(value: number) {
  return value.toLocaleString('vi-VN');
}

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardText class="d-flex align-center pb-4 ">
          <img class="container-image" :src="props.image" alt="image">
        </VCardText>

        <VCardText class="container-title">
          <div class=" d-flex container-info">

            <div class="name">
              <p> {{ props.name }}</p>
            </div>
            <div>
              <div class="star-container">
                <VIcon size="18" icon="bxs-star" v-for="index in 5" :key="index" />
              </div>
            </div>
          </div>
          <div class="container-text d-flex container-action mt-5">
            <div class="start">
              <VIcon size="32" icon="bx-heart" />
            </div>
            <div>
              <span class="price">{{ formatNumber(props.price) }}₫</span>
            </div>
            <div class="order">
              <VIcon size="32" icon="bx-cart" />

            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style scoped>
.v-card-text {
  padding: 0 !important;
}

.container-title {
  height: 7rem;
  padding: 12px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container-action {
  width: 100%;
  justify-content: space-between;
  align-items: center;

}

.price {
  color: red;
  font-weight: 600;
}

.name p {
  margin: 0 !important;
  font-weight: bold;
}

.container-image {
  width: 100%;
  height: 18rem;
  border-bottom: 1px solid #fdd;
}

.container-info {
  justify-content: space-between;
}

.star-container {
  color: rgb(255, 167, 39)
}
</style>
