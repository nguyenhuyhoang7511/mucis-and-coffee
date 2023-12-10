<script setup lang="ts">
import CardProductItem from '@/@core/components/cards/CardProductItem.vue';

// 👉 Images
interface OrderItem {
  id: string;
  name: string;
  price: number;
  type?: string;
  amount: number;
  image: string
}

const listDrink = ref<OrderItem[]>([
  {
    id: "1",
    name: "Bạc xỉu",
    price: 45000,
    amount: 12,
    image: 'data:image/jpeg;base64,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'
  },
  {
    id: "2",
    name: "Coffee sữa đá",
    price: 35000,
    amount: 12,
    image: 'https://cdn.tgdd.vn/Files/2021/07/21/1369655/1-ly-ca-phe-sua-bao-nhieu-calo-uong-ca-phe-co-giam-can-202107210236314465.jpg'

  },
  {
    id: "3",
    name: "Coffee đen đá",
    price: 30000,
    amount: 12,
    image: 'https://product.hstatic.net/200000567755/product/ca_phe_b23ff9a401f84ce38b763e5e140076fc_master.png'

  },
  {
    id: "4",
    name: "Coffee nâu",
    price: 20000,
    amount: 12,
    image: 'https://file.hstatic.net/200000534989/collection/ca-phe-sua_603f675b48354a108c18b0af82236975.jpg'
  },
  {
    id: "4",
    name: "Coffee cốt dừa",
    price: 45000,
    amount: 12,
    image: 'https://blog.dktcdn.net/files/recipe-cover-r28249.jpg'
  }
]);

const listFood = ref<OrderItem[]>([
  {
    id: "1",
    name: "Hướng dương",
    price: 20000,
    amount: 12,
    image: 'http://www.thuccoffee.com.vn/s-media/4df769b4_ket-thuc-uu-dai-1-.png'

  },
  {
    id: "2",
    name: "Khô bò",
    price: 30000,
    amount: 12,
    image: 'https://thucphamsachgiatot.vn/image/cache/catalog/XKHO-BO-XE-SOI-700x700.jpg'

  },
  {
    id: "3",
    name: "Khô gà",
    price: 25000,
    amount: 12,
    image: 'https://ngondanang.com/wp-content/uploads/2020/02/Kho-ga-la-chanh-da-nang-ngon.jpg'

  },
  {
    id: "4",
    name: "Hạnh nhân",
    price: 45000,
    amount: 12,
    image: 'https://cdn.tgdd.vn/2021/11/CookDish/hanh-nhan-la-gi-8-tac-dung-than-ky-cua-hanh-nhan-doi-voi-suc-avt-1200x676.jpg'


  }
]);

const listCake = ref<OrderItem[]>([
  {
    id: "1",
    name: "Bánh phô mai chanh dây",
    price: 35000,
    amount: 12,
    image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHOMAICHANHDAY.jpg'

  },
  {
    id: "2",
    name: "Bánh Tiramisu",
    price: 28000,
    amount: 12,
    image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TIRAMISU.jpg'

  },
  {
    id: "3",
    name: "Bánh Phô Mai Trà Xanh",
    price: 37000,
    amount: 12,
    image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHOMAITRAXANH.jpg'

  },
  {
    id: "4",
    name: "Bánh chuối",
    price: 38000,
    amount: 12,
    image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_BANHCHUOI.jpg'
  },
  {
    id: "5",
    name: "Bánh Phô Mai Cà Phê",
    price: 32000,
    amount: 12,
    image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHOMAICAPHE.jpg'
  },
  {
    id: "6",
    name: "Bánh Caramel Phô Mai",
    price: 42000,
    amount: 12,
    image: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_CARAMELPHOMAI.jpg'
  }
]);
const activeTab = ref(0)
// tabs
const tabs = [
  { title: 'Đồ uống', icon: 'bx-drink', tab: 'drink' },
  { title: 'Đồ ăn vặt', icon: 'bx-bowl-hot', tab: 'food' },
  { title: 'Bánh ngọt', icon: 'bx-cheese', tab: 'cake' },
]
</script>

<template>
  <VRow>
    <VCol cols="12" sm="12">
      <VTabs v-model="activeTab" show-arrows>
        <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
          <VIcon size="20" start :icon="item.icon" />
          {{ item.title }}
        </VTab>
      </VTabs>
      <VDivider />

      <VWindow v-model="activeTab" class="mt-5 disable-tab-transition">
        <!-- Account -->
        <VWindowItem value="drink">
          <VRow>
            <VCol cols="12" md="6" lg="3" v-for="item in listDrink">
              <CardProductItem :key="item.id" :name="item.name" :price="item.price" :image="item.image" />

            </VCol>
          </VRow>
        </VWindowItem>

        <!-- Security -->
        <VWindowItem value="food">
          <VRow>
            <VCol cols="12" md="6" lg="3" v-for="item in listFood">
              <CardProductItem :key="item.id" :name="item.name" :price="item.price" :image="item.image" />

            </VCol>
          </VRow>
        </VWindowItem>

        <!-- Notification -->
        <VWindowItem value="cake">
          <VRow>
            <VCol cols="12" md="6" lg="3" v-for="item in listCake">
              <CardProductItem :key="item.id" :name="item.name" :price="item.price" :image="item.image" />

            </VCol>
          </VRow>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
