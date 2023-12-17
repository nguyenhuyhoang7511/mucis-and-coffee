<script setup lang="ts">

interface OrderItem {
  id: number
  title: string
  avatar: string
  userJoinCount: number
  authorName: string;
  avatarAuthor: string;
}
const eventList = ref<OrderItem[]>([
  {
    id: 1,
    title: "Sinh nhật",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  },
  {
    id: 2,
    title: "Giáng sinh",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 3,
    title: "Tết dương lịch",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 4,
    title: "Giao thừa",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 5,
    title: "Sinh nhật",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 6,
    title: "Sinh nhật",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  }, {
    id: 7,
    title: "Sinh nhật",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  },
  {
    id: 8,
    title: "Sinh nhật",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  },
  {
    id: 9,
    title: "Sinh nhật",
    userJoinCount: 35000,
    authorName: "Nguyễn Đình Tuấn",
    avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
    avatarAuthor: "https://taimienphi.vn/tmp/cf/aut/UCJh-I6e5-pGG8-5NjT-O83K-mmJy-eZta-9nqH-anh-dai-dien-dep-cute-1.jpg"
  },
]);
</script>

<template>
 <VCard class="mb-5 mx-auto" 
    elevation="8">
    <v-slide-group
      class="pa-4 slide-custom"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="item in eventList "
        :key="item.id"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
      <CardEventItem :title="item.title" :user-join="item.userJoinCount" :author="item.authorName" :avatar="item.avatar" :avatar-author="item.avatarAuthor"/>
      </v-slide-group-item>
    </v-slide-group>
 </VCard>
</template>
<style scoped>
.container-item {
  position: relative;
}
.slide-custom{
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.image-container {
  border: 3px solid #e35050;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}

.chip-event {
  width: 0.8rem !important;
  height: 1.2rem;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  right: 2.2rem;
}
</style>