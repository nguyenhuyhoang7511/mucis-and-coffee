<script lang="ts" setup>
import { useTheme } from 'vuetify'

import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// Banner

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn class="ms-n3 d-lg-none" @click="toggleVerticalOverlayNavActive(true)">
          <VIcon icon="bx-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div class="d-flex align-center cursor-pointer" style="user-select: none;">
          <!-- 👉 Search Trigger button -->
          <IconBtn>
            <VIcon icon="bx-search" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled">
            <span class="me-3">Search</span>
            <span class="meta-key">&#8984;K</span>
          </span>
        </div>

        <VSpacer />

        <IconBtn class="me-2">
          <VIcon icon="bx-bell" />
        </IconBtn>

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink :item="{
        title: 'Bảng tin',
        icon: 'bx-home',
        to: '/dashboard',
      }" />
      <VerticalNavLink :item="{
        title: 'Âm nhạc',
        icon: 'bx-music',
        to: '/music',
      }" />
      <VerticalNavLink :item="{
        title: 'Thực đơn',
        icon: 'bx-food-menu',
        to: '/order',
      }" />
      <VerticalNavLink :item="{
        title: 'Danh sách phát',
        icon: 'mdi-playlist-music',
        to: '/',
      }" />
      <VerticalNavLink :item="{
        title: 'Account Settings',
        icon: 'mdi-account-cog-outline',
        to: '/account-settings',
      }" />

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle :item="{
        heading: 'Cá nhân',
      }" />
      <VerticalNavLink :item="{
        title: 'Đồ uống yêu thích',
        icon: 'mdi-heart-box-outline',
        to: '/',
      }" />
      <VerticalNavLink :item="{
        title: 'Quản lý nhạc',
        icon: 'bx-data',
        to: '/',
      }" />
      <VerticalNavLink :item="{
        title: 'Tải nhạc lên',
        icon: 'bx-upload',
        to: '/',
      }" />
      <VerticalNavLink :item="{
        title: 'Bảo mật',
        icon: 'mdi-security',
        to: '/',
      }" />
      <VerticalNavLink :item="{
      title: 'Ví tiền',
      icon: 'mdi-cash-multiple',
      to: '/',
      }" />
      <!-- 👉 User Interface -->
      <VerticalNavSectionTitle :item="{
        heading: 'Dịch vụ khác',
      }" />
      <VerticalNavLink :item="{
        title: 'Quà tặng',
        icon: 'bx-gift',
        to: '/',
      }" />
      <VerticalNavLink :item="{
        title: 'Vui cùng AI',
        icon: 'bx-bot',
        to: '/icons',
      }" />
      <VerticalNavLink :item="{
        title: 'Tạo avatar',
        icon: 'mdi-image-plus-outline',
        to: '/cards',
      }" />
      <VerticalNavLink :item="{
        title: 'Maps',
        icon: 'mdi-google-maps',
        to: '/tables',
      }" />
      <VerticalNavLink :item="{
        title: 'Form Layouts',
        icon: 'mdi-form-select',
        to: '/form-layouts',
      }" />
    </template>

    <template #after-vertical-nav-items>
      <!-- 👉 illustration -->
      <a href="https://themeselection.com/item/sneat-vuetify-vuejs-admin-template" target="_blank"
        rel="noopener noreferrer" style="margin-left: 7px;">
      </a>
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
