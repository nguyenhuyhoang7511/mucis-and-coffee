<script setup lang="ts">

interface User {
  id: number
  userName: string
  userAvatar: string
  money: number
}
const users = ref<User[]>([
  {
    id: 1,
    userName: "Nguyễn Huy Hoàng",
    money: 10000,
    userAvatar: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  },
  {
    id: 2,
    userName: "Bùi Tiến Đạt",
    money: 10000,
    userAvatar: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 3,
    userName: "Nguyễn Đình Tuấn",
    money: 10000,
    userAvatar: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 4,
    userName: "Nguyễn Duy Hiệp",
    money: 10000,
    userAvatar: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 5,
    userName: "Bùi Trọng Đại",
    money: 10000,
    userAvatar: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }
]);
</script>

<template>
  <VCard class="text-center text-sm-start pa-0 height-container-card">
    <VRow no-gutters>
      <VCol
        cols="12"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            Top users
          </VCardTitle>
        </VCardItem>
        <div v-for="item in users" class="w-100 pl-6 pr-6 pb-4">
          <CardUserItem :user-name="item.userName" :user-avatar="item.userAvatar" :money="item.money"/>
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>
<style scoped>
.height-container-card{
  height: 50rem !important;
  overflow: auto;
}
</style>