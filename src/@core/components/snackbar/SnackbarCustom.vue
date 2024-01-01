<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    isShow: boolean;
    message: string;
    time?: string;
    color?: string;
    onClose: () => void;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="text-start ma-2">
        <v-snackbar :timeout="2000" v-model="props.isShow">
            {{ props.message }}
            <template #actions>
                <v-btn color="pink" variant="text" @click="props.onClose">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
