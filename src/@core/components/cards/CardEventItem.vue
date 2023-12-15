<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useDisplay, useTheme } from 'vuetify'

import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const display = useDisplay()

const series = [{ data: [30, 58, 35, 53, 50, 68] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 12,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.12,
        color: currentTheme.warning,
      },
    },
    tooltip: { enabled: false },
    colors: [`rgba(${hexToRgb(String(currentTheme.warning))}, 1)`],
    stroke: {
      width: 4,
      curve: 'smooth',
      lineCap: 'round',
    },
    grid: {
      show: false,
      padding: {
        top: -21,
        left: -5,
        bottom: -8,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    responsive: [
      {
        breakpoint: display.thresholds.value.lg,
        options: {
          chart: {
            height: 151,
            width: '100%',
          },
        },
      },
      {
        breakpoint: display.thresholds.value.md,
        options: {
          chart: {
            height: 131,
            width: '100%',
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
        <v-card
          class="pa-6 rounded-circle d-inline-block "
          height="auto"
          image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          theme="dark"
        ></v-card>
  </VCard>
</template>
<style scoped>

</style>