<script setup lang="ts">
import CardMusicItem from '@/@core/components/cards/CardMusicItem.vue';


// 👉 Images
interface MusicItem {
  id: string
  name: string
  author: string
  duration: string
  avatar: string
}

const listMusic = ref<MusicItem[]>([
  {
    id: "1",
    name: "Cắt đôi nỗi sầu",
    author: "Tăng Duy Tân",
    duration: "03:02",
    avatar: 'https://photo-zmp3.zmdcdn.me/banner/2/f/9/0/2f9025f0663f722ff0e95de1b68901d5.jpg'
  }, {
    id: "2",
    name: "Dòng Thời Gian",
    author: "Hà Kino-Hồng Nhung",
    duration: "03:02",
    avatar: 'https://photo-zmp3.zmdcdn.me/banner/2/f/9/0/2f9025f0663f722ff0e95de1b68901d5.jpg'
  }, {
    id: "3",
    name: "Mashup Tình Bạn Diệu Kỳ & Cún Yêu",
    author: "Lưu Hương Giang",
    duration: "04:47",
    avatar: 'https://photo-zmp3.zmdcdn.me/banner/2/f/9/0/2f9025f0663f722ff0e95de1b68901d5.jpg'
  }, {
    id: "4",
    name: "Nên Yêu Hay Không Nên",
    author: "JSOL",
    duration: "03:02",
    avatar: 'https://photo-zmp3.zmdcdn.me/banner/2/f/9/0/2f9025f0663f722ff0e95de1b68901d5.jpg'
  }, {
    id: "5",
    name: "Nghe Nói Anh Yêu Em",
    author: "Châu Khải Phong",
    duration: "03:13",
    avatar: 'https://photo-zmp3.zmdcdn.me/banner/2/f/9/0/2f9025f0663f722ff0e95de1b68901d5.jpg'
  },

]);

const inputSearch = ref('')

</script>

<template>
  <VRow>
    <VCol cols="12" sm="12">
      <VTextField id="inputSearch" v-model="inputSearch" prepend-inner-icon="bx-search" append-inner-icon="bx-send"
        placeholder="Tìm kiếm nhạc trên youtobe" persistent-placeholder variant="underlined" />
    </VCol>
    <VCol cols="12" md="6" lg="3" v-for="item in listMusic">
      <CardMusicItem :key="item.id" :name="item.name" :author="item.author" :duration="item.duration"
        :avatar="item.avatar" />
    </VCol>


  </VRow>
</template>
