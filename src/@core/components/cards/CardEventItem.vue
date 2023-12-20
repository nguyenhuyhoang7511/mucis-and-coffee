<script setup lang="ts">
interface Props {
  title: string
  avatar: string
  userJoin: number
  author : string;
  avatarAuthor : string;
}

const props = defineProps<Props>()

console.log(props.avatar);

</script>

<template>
  <div>
    <div class="container-item card-custom">
        <img class="image-container" :src="props.avatar" alt="image-event">
        <button elevation="2"  class="chip-event " x-small>EVENT</button>
        <button elevation="2"  class="chip-event event-detail " x-small>Chi tiết</button>
        <img class="author-avatar" :src="props.avatarAuthor" alt="image-event">
    </div>
    <p class="event-name">{{ props.title }}</p>
  </div>
    

</template>
<style scoped>

.container-item{
  position: relative;
  }
.card-custom{
  border-radius: 50%;
  border: 3px solid #e35050;
  width: 8rem;
  height: 8rem;
  margin-right: 20px;
  
}
.event-name{
  text-align: center;
  margin-right: 20px;
  max-width: 120px;
}
.image-container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.author-avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 4.5rem;
  left: 5.7rem;
  border: 2px solid #ccc;
}
.chip-event {
  width: 3rem;
  height: 1.2rem;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  right: 2.3rem;
  z-index: 10;
  font-weight: 900;
  padding: 0 !important;
  background-color: red;
  color: #FFFF;
  border-radius: 4px;
  cursor:unset;
}
.event-detail{
  top: 3rem;
  display: none;
  width: 3rem;
  height: 1.2rem;
  cursor:pointer;
  background-color: #6c5050;
}
.container-item:hover .event-detail{
  display: block;
}
</style>