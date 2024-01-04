<script setup lang="ts">
import { defineProps } from 'vue';
import { ToastState } from '../../../types/enum';

interface Props {
    isShow: boolean;
    message: string;
    time?: string;
    type?: ToastState;
    onClose: () => void;
}


const props = defineProps<Props>();

const closeSnackbar = () => {
    props.onClose();
};

onMounted(() => {
    setTimeout(closeSnackbar, 2000);
});
</script>

<template>
    <div v-show="props.isShow" class="text-start ma-2 container-snackbar success"
        :class="props.type === ToastState.Success ? 'success' : 'error'">
        <div class="content">
            {{ props.message }}
            <v-btn color="pink" variant="text" @click="props.onClose">
                x
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.container-snackbar {
    background-color: rgb(74, 74, 131);
    color: #ffffff;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    border-radius: 0.7rem;
}

.success {
    background: #388e3c;
}

.error {
    background-color: #d32f2fbd;
    color: #ffffff;
}

.content {
    padding: 0.1rem;
    padding-left: 1.5rem;
}
</style>
