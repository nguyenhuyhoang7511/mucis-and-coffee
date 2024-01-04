<script setup lang="ts">
import { Field, Form } from "vee-validate";
import { ToastState } from ".././types/enum";

import axiosClient from "@/apis/axios/axiosConfig";
import { API_ENDPOINT } from "@/constant/environments";
import * as yup from "yup";
const form = ref({
  email: "",
  number_code: "",
});
const activeToast = ref({
  state: false,
  message: "",
  type: ToastState.Success,
});


const route = useRoute();
onMounted(() => {
  form.value.email = route.query.email as string;
});


const handleLogin = async () => {
  try {
    await axiosClient.post(`${API_ENDPOINT}/active-acount`, form.value);
    activeToast.value.state = true;
    activeToast.value.message = "Kích hoạt thành công";
    activeToast.value.type = ToastState.Success;
  } catch (error) {
    activeToast.value.message = "Kích hoạt thất bại";
    activeToast.value.type = ToastState.Error;
  }
};

const schema = yup.object({
  password: yup.string().required("Mật khẩu không được để trống"),
});
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4 container-card-login">
    <VCard class="" max-width="600" height="75%">

      <VCardText>
        <Form :validation-schema="schema" v-slot="{ errors, meta }">
          <VRow>
            <VCol cols="12">
              <h2>Xác thực tài khoản</h2>
            </VCol>
            <VCol cols="12">
              <Field name="email" v-model="form.email" v-slot="{ handleChange }">
                <VTextField disabled @input="handleChange" autofocus :placeholder="form.email" :label="form.email"
                  type="email" />
                <!-- <ErrorMessage name="email" class="show-error-message" /> -->
              </Field>
            </VCol>
            <VCol cols="12">
              <Field name="number_code" v-model="form.number_code" v-slot="{ handleChange, meta }">
                <VTextField @input="handleChange" autofocus placeholder="Hãy nhập mã code để kích hoạt tài khoản"
                  type="number" />
                <!-- <ErrorMessage name="password" class="show-error-message" /> -->
              </Field>
              <VBtn block class="mt-5" @click="handleLogin">
                Xác thực
              </VBtn>
            </VCol>
          </VRow>
        </Form>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
