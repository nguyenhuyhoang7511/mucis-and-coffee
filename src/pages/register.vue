<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';

import * as yup from 'yup';
const form = ref({
  email: '',
  userName: '',
  password: '',
  confirm: '',
  agree: false,
})

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const schema = yup.object({
  email: yup.string().required("Email không được để trống").email("Email không đúng định dạng").matches(/@gmail\.com$/, "Email phải có định dạng là @gmail.com"),
  userName: yup.string().required("Tên người dùng không được để trống")
  ,
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu cần có tối thiểu 8 kí tự')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Mật khẩu yêu cầu chứa cả chữ và số'),
  confirmPassword: yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .oneOf([yup.ref('password'), ''], 'Xác nhận mật khẩu không chính xác'),
  agree: yup.boolean().oneOf([true], 'Bạn cần phải đồng ý với các điều kiện và điều khoản để tiếp tục.'),
});

const handleRegister = () => {
  console.log(form.value);
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4 container-card-login ">
    <VCard class="auth-card pa-4 pt-7 login-image-card" width="1000" height="75%"></VCard>

    <VCard class="auth-card pa-4 pt-7 login-form-card" max-width="600" height="75%">

      <VCardItem class="justify-center ">
        <VCardTitle class="text-2xl ">
          <p class="login-title-bot">
            MUSIC & COFFEE
          </p>
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h3 class="mb-0 mt-5">
          Hãy tiến hành tạo tài khoản để trải nghiệm hệ thống
        </h3>
      </VCardText>

      <VCardText>
        <Form :validation-schema="schema" v-slot="{ errors, meta }">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <Field name="email" v-model="form.email" v-slot="{ handleChange }">
                <VTextField @input="handleChange" v-model="form.email" autofocus placeholder="Nhập email của bạn "
                  label="Email" type="email" />
                <ErrorMessage name="email" class="show-error-message" />
              </Field>
            </VCol>

            <VCol cols="12">
              <Field name="userName" v-model="form.userName" v-slot="{ handleChange }">
                <VTextField @input="handleChange" v-model="form.userName" label="Tên người dùng"
                  placeholder="Nhập tên người dùng" type="text" />
                <ErrorMessage name="userName" class="show-error-message" />
              </Field>
            </VCol>

            <VCol cols="12">
              <Field name="password" v-model="form.password" v-slot="{ handleChange }">
                <VTextField @input="handleChange" v-model="form.password" label="Mật khẩu" placeholder="Nhập mật khẩu"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
                <ErrorMessage name="password" class="show-error-message" />
              </Field>
            </VCol>

            <VCol cols="12">
              <Field name="confirmPassword" v-model="form.confirm" v-slot="{ handleChange }">
                <VTextField @input="handleChange" label="Xác nhận mật khẩu" placeholder="Xác nhận mật khẩu"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible" />
                <ErrorMessage name="confirmPassword" class="show-error-message" />
              </Field>

              <div class="d-flex align-center justify-space-between flex-wrap mt-3 mb-4">
                <Field name="agree" v-model="form.agree" v-slot="{ handleChange }">
                  <VCheckbox v-model="form.agree"
                    label="Tôi đồng ý với các điều kiện và điều khoản khi sử dụng hệ thống" />
                  <ErrorMessage name="agree" class="show-error-message" />

                </Field>
              </div>

              <VBtn block class="mt-5" @click="handleRegister" :disabled="!meta.valid">
                Đăng kí
              </VBtn>

            </VCol>

            <VCol cols="12" class="text-center text-base">
              <span>Bạn chưa có tài khoản?</span>
              <RouterLink class="text-primary ms-2" to="/login">
                Hãy tiến hành đăng nhập
              </RouterLink>
            </VCol>
          </VRow>
        </Form>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" >
@use "@core/scss/template/pages/page-auth.scss";

.login-sercives .v-btn__content {
  min-width: 300px !important;
  display: flex;
  justify-content: start;
}

.show-error-message {
  color: #ff3535;
  margin-left: 4px;
  margin-top: 2px;
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
  background: url('https://i.pinimg.com/originals/2d/9a/99/2d9a99324ede6e2787db071ffeae8ca9.gif') center center no-repeat !important;
  background-size: cover !important;
  width: 100%;
  height: 300px;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
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
  border-top-left-radius: unset;
  border-bottom-left-radius: unset;
}

.login-title-bot {
  font-size: 46px !important;
  color: #6358DC;
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
