<script setup lang="ts">
import SnackbarCustom from "@/@core/components/snackbar/SnackbarCustom.vue";
import axiosClient from "@/apis/axios/axiosConfig";
import { API_ENDPOINT } from "@/constant/environments";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
import { ToastState } from ".././types/enum";

const form = ref({
  email: "",
  password: "",
  remember: false,
});
const registerNotification = ref({
  state: false,
  message: "",
  type: ToastState.Success,
});

const isPasswordVisible = ref(false);
const schema = yup.object({
  email: yup.string().required("Trường này không được để trống"),
  password: yup.string().required("Mật khẩu không được để trống"),
});

const handleLogin = async () => {

  try {
    await axiosClient.post(`${API_ENDPOINT}/login`, form.value);
    registerNotification.value.state = true;
    registerNotification.value.message = "Đăng nhập tài khoản thành công";
    registerNotification.value.type = ToastState.Success;
  } catch (error) {
    registerNotification.value.message = "Đăng kí tài khoản thất bại";
    registerNotification.value.type = ToastState.Error;
  }
};

const loginWithGoogle = async () => {
  try {
    const response = await axiosClient.get(`${API_ENDPOINT}/auth/google`);
    window.location.href = response.data.url
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
  }
};
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4 container-card-login">
    <VCard class="auth-card pa-4 pt-7 login-image-card" width="1000" height="75%"></VCard>
    <VCard class="auth-card pa-4 pt-7 login-form-card" max-width="600" height="75%">
      <VCardItem class="justify-center mb-4">
        <VCardTitle class="text-2xl">
          <p class="login-title-bot">MUSIC & COFFEE</p>
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <div class="d-flex flex-column justify-center w-100">
          <VBtn class="login-sercives">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="41" height="32" viewBox="0 0 48 48">
              <path fill="#3f51b5" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
              <path fill="#fff"
                d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z">
              </path>
            </svg>
            Đăng nhập với tài khoản facebook
          </VBtn>

          <VBtn class="login-sercives mt-5" @click="loginWithGoogle">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="39" height="32" viewBox="0 0 48 48">
              <path fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
              </path>
              <path fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
              </path>
              <path fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
              </path>
              <path fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
              </path>
            </svg>
            Đăng nhập với tài khoản google
          </VBtn>
        </div>

        <VCol cols="12" class="d-flex align-center">
          <VDivider />
          <span class="mx-4">
            <VIcon class="me-2" icon="mdi-music-circle" size="22" />
          </span>
          <VDivider />
        </VCol>

        <h3 class="mb-0 mt-5">Hãy tiến hành đăng nhập để trải nghiệm hệ thống</h3>
      </VCardText>

      <VCardText>
        <Form :validation-schema="schema" v-slot="{ errors, meta }">
          <VRow>
            <VCol cols="12">
              <Field name="email" v-model="form.email" v-slot="{ handleChange }">
                <VTextField @input="handleChange" autofocus placeholder="Nhập email hoặc tên tài khoản của bạn"
                  label="Tài khoản" type="email" />
                <ErrorMessage name="email" class="show-error-message" />
              </Field>
            </VCol>
            <VCol cols="12">
              <Field name="password" v-model="form.password" v-slot="{ handleChange, meta }">
                <VTextField v-model="form.password" label="Mật khẩu" placeholder="Nhập mật khẩu"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
                <ErrorMessage name="password" class="show-error-message" />
              </Field>
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox v-model="form.remember" label="Ghi nhớ mật khẩu" />
                <a class="text-primary ms-2 mb-1"> Quên mật khẩu </a>
              </div>
              <VBtn block class="mt-5" :disabled="!meta.valid" @click="handleLogin">
                Đăng nhập
              </VBtn>
            </VCol>

            <VCol cols="12" class="text-center text-base">
              <span>Bạn chưa có tài khoản?</span>
              <RouterLink class="text-primary ms-2" to="/register">
                Ấn vào đây để tạo mới
              </RouterLink>
            </VCol>
          </VRow>
        </Form>
      </VCardText>
    </VCard>
    <SnackbarCustom :type="registerNotification.type" :isShow="registerNotification.state"
      :message="registerNotification.message" :onClose="() => {
        registerNotification.state = false;
      }
        " />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

.login-sercives .v-btn__content {
  min-width: 300px !important;
  display: flex;
  justify-content: start;
}

.show-error-message {
  color: #ff3535;
  margin-left: 4px;
  margin-top: 30px;
  font-size: 13px !important;
}

.container-card-login {
  height: 1000px !important;
  background-color: #27205f !important;
}

.v-card-item {
  // align-items: start !important;
  justify-content: start;
  text-align: left;
}

.login-image-card {
  background: url("https://i.pinimg.com/originals/2d/9a/99/2d9a99324ede6e2787db071ffeae8ca9.gif") center center no-repeat !important;
  background-size: cover !important;
  width: 100%;
  height: 300px;
  border-top-right-radius: unset !important;
  border-bottom-right-radius: unset !important;
}

.v-card-item {
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}

.login-title-top {
  font-size: 36px !important;
  margin-bottom: 0;
}

.login-form-card {
  // background-color: #27205f !important;
  // color: #ffffff !important;
  border-top-left-radius: unset !important;
  border-bottom-left-radius: unset !important;
}

.login-title-bot {
  font-size: 46px !important;
  color: #6358dc;
  font-weight: 900;
  font-family: inherit;
}

.v-btn {
  height: 3.4rem !important;
}

.login-sercives {
  background-color: #f1f1f1 !important;
  color: #2a1e1ef0 !important;
  text-transform: none;
  width: 100% !important;
  font-size: 16px;
}
</style>
