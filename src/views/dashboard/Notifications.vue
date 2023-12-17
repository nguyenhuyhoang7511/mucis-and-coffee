<script setup lang="ts">
import { useTheme } from 'vuetify'
import illustrationJohnDark from '@images/cards/illustration-john-dark.png'
import illustrationJohnLight from '@images/cards/illustration-john-light.png'
import CardNotificationItem from '@/@core/components/cards/CardNotificationItem.vue';

interface NotificationItem {
  id : number,
  title: string
  image : string
  description: string
  time : string;
  author : string;
}

const { global } = useTheme()
const illustrationJohn = computed(() => global.name.value === 'dark' ? illustrationJohnDark : illustrationJohnLight)

const listNotification = ref<NotificationItem[]>([
  {
    id :1,
    title :"Thông báo về sự cố mất điện",
    image :"https://www.freecodecamp.org/news/content/images/2023/07/Depth-First-Search--1-.png",
    description : "Điện lực khu vực sẽ tiến hành sửa chữa sự cố trong vòng 02 giờ. Tuy nhiên do yêu cầu đặc biệt về đảm bảo an toàn điện, quá trình sửa chữa phải tiến hành theo đúng quy trình thao tác kỹ thuật. Tình hình sự cố cũng như các nguyên nhân gây nên sự cố đường dây điện, thiết bị điện phức tạp và muôn hình vạn trạng. Sau khi nhân viên sửa chữa đến hiện trường căn cứ tình hình cụ thể tìm nguyên nhân mới tiến hành công tác sửa chữa. Có trường hợp phải thay thế thiết bị và huy động nhiều nhân lực để sửa chữa, đảm bảo cấp điện nhanh nhất. Cho nên thời gian sửa chữa có thể kéo dài hơn.",
    time :"23/08/2023",
    author :"Nguyễn Huy Hoàng"
  },
  {
    id :2,
    title :"Thông báo về sự cố mất điện",
    image :"https://www.freecodecamp.org/news/content/images/2023/07/Depth-First-Search--1-.png",
    description : "Điện lực khu vực sẽ tiến hành sửa chữa sự cố trong vòng 02 giờ. Tuy nhiên do yêu cầu đặc biệt về đảm bảo an toàn điện, quá trình sửa chữa phải tiến hành theo đúng quy trình thao tác kỹ thuật. Tình hình sự cố cũng như các nguyên nhân gây nên sự cố đường dây điện, thiết bị điện phức tạp và muôn hình vạn trạng. Sau khi nhân viên sửa chữa đến hiện trường căn cứ tình hình cụ thể tìm nguyên nhân mới tiến hành công tác sửa chữa. Có trường hợp phải thay thế thiết bị và huy động nhiều nhân lực để sửa chữa, đảm bảo cấp điện nhanh nhất. Cho nên thời gian sửa chữa có thể kéo dài hơn.",
    time :"23/08/2023",
    author :"Nguyễn Huy Hoàng"
  },
  {
    id :3,
    title :"Thông báo về sự cố mất điện",
    image :"https://www.freecodecamp.org/news/content/images/2023/07/Depth-First-Search--1-.png",
    description : "Điện lực khu vực sẽ tiến hành sửa chữa sự cố trong vòng 02 giờ. Tuy nhiên do yêu cầu đặc biệt về đảm bảo an toàn điện, quá trình sửa chữa phải tiến hành theo đúng quy trình thao tác kỹ thuật. Tình hình sự cố cũng như các nguyên nhân gây nên sự cố đường dây điện, thiết bị điện phức tạp và muôn hình vạn trạng. Sau khi nhân viên sửa chữa đến hiện trường căn cứ tình hình cụ thể tìm nguyên nhân mới tiến hành công tác sửa chữa. Có trường hợp phải thay thế thiết bị và huy động nhiều nhân lực để sửa chữa, đảm bảo cấp điện nhanh nhất. Cho nên thời gian sửa chữa có thể kéo dài hơn.",
    time :"23/08/2023",
    author :"Nguyễn Huy Hoàng"
  },
  {
    id :4,
    title :"Thông báo về sự cố mất điện",
    image :"https://www.freecodecamp.org/news/content/images/2023/07/Depth-First-Search--1-.png",
    description : "Điện lực khu vực sẽ tiến hành sửa chữa sự cố trong vòng 02 giờ. Tuy nhiên do yêu cầu đặc biệt về đảm bảo an toàn điện, quá trình sửa chữa phải tiến hành theo đúng quy trình thao tác kỹ thuật. Tình hình sự cố cũng như các nguyên nhân gây nên sự cố đường dây điện, thiết bị điện phức tạp và muôn hình vạn trạng. Sau khi nhân viên sửa chữa đến hiện trường căn cứ tình hình cụ thể tìm nguyên nhân mới tiến hành công tác sửa chữa. Có trường hợp phải thay thế thiết bị và huy động nhiều nhân lực để sửa chữa, đảm bảo cấp điện nhanh nhất. Cho nên thời gian sửa chữa có thể kéo dài hơn.",
    time :"23/08/2023",
    author :"Nguyễn Huy Hoàng"
  },
])

</script>

<template>
  <VCard class="text-center text-sm-start  height-container-card">
    <VRow no-gutters>
      <VCol
        cols="12"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            Thông báo
          </VCardTitle>
        </VCardItem>
        <div v-for="item in listNotification" class="w-100 pl-8 pr-8 pb-6">
          <CardNotificationItem :time="item.time" :image="item.image" :description="item.description" :title="item.title" :author="item.author"/>
        </div>
        <v-pagination
          :length="4"
          rounded="circle"
        
        ></v-pagination>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.height-container-card{
  height: 50rem !important;
  overflow: auto;
}
.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 3rem;
}
</style>
