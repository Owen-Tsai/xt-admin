<template>
  <div class="page">
    <header>XT Admin {{ version }}</header>
    <main>
      <h1>
        <img
          src="@/assets/logo-temp.svg"
          class="w-10 h-10 mr-4"
        >
        XT Admin
      </h1>
      <p>中协通下一代中后台应用框架的前端解决方案</p>
      <a-alert
        v-if="errorMessage"
        type="error"
        title="登录失败"
      >{{ errorMessage }}</a-alert>

      <a-form
        ref="loginForm"
        :model="loginInfo"
        class="mt-4"
        layout="vertical"
        size="large"
        @submit="onSubmit"
      >
        <a-form-item
          field="username"
          :rules="rules.username"
          validate-trigger="blur"
          hide-label
        >
          <a-input
            v-model="loginInfo.username"
            placeholder="用户名"
          >
            <template #prefix>
              <s-icon
                :name="UserFill"
                :size="20"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          field="username"
          :rules="rules.password"
          validate-trigger="blur"
          hide-label
        >
          <a-input
            v-model="loginInfo.password"
            type="password"
            placeholder="密码"
          >
            <template #prefix>
              <s-icon
                :name="LockFill"
                :size="20"
              />
            </template>
          </a-input>
        </a-form-item>
        <div class="flex items-center justify-between">
          <a-checkbox
            v-model="loginConfig.shouldStorePassword"
            @change="(setRememberPassword as any)"
          >记住密码</a-checkbox>
          <a-link>忘记密码</a-link>
        </div>
        <div class="mt-6">
          <a-button
            type="primary"
            long
            size="large"
            html-type="submit"
            :loading="isLoading"
          >登录</a-button>
        </div>
      </a-form>
    </main>

    <footer>
      &copy; 2022 Created with
      <s-icon
        :name="HeartFill"
        class="text-red-500"
      />
      by 蔡仲晨
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive
} from 'vue'
import { UserFill, LockFill, HeartFill } from '@salmon-ui/icons'
import {
  FieldRule,
  Message,
  ValidatedError
} from '@arco-design/web-vue'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'
import useLoading from '@/hooks/use-loading'
import { encrypt } from '@/utils/encryption'
import pkg from '../../package.json'
import { LoginData } from '@/api/user'

const { version } = pkg
const { isLoading, setLoading } = useLoading()
const errorMessage = ref('')
const userStore = useUserStore()
const router = useRouter()
const loginForm = ref()

const loginInfo = reactive({
  username: '',
  password: ''
})
const loginConfig = useStorage('login-config', {
  shouldStorePassword: false,
  username: '',
  password: ''
})

const rules: Record<string, FieldRule> = {
  username: {
    required: true,
    message: '请填写用户名',
  },
  password: {
    required: true,
    message: '请填写密码'
  }
}

const onSubmit = async ({
  errors, values
}: {
  errors: Record<string, ValidatedError> | undefined,
  values: Record<string, any>
}) => {
  await loginForm.value.validate()
  if (!errors) {
    setLoading(true)
    try {
      await userStore.login(values as LoginData)
      // check for redirect
      const { redirect, ...otherParams } = router.currentRoute.value.query
      router.push({
        name: (redirect as string) || 'workplace',
        query: {
          ...otherParams
        }
      })
      // display successful hint
      Message.success('登录成功')
      // process login for post-login
      const { shouldStorePassword } = loginConfig.value
      const { password, username } = values

      loginConfig.value.username = shouldStorePassword ? encrypt(username) : ''
      loginConfig.value.password = shouldStorePassword ? encrypt(password) : ''
    } catch (err) {
      console.error(err)
      errorMessage.value = (err as Error).message
    } finally {
      setLoading(false)
    }
  }
}

const setRememberPassword = (val: boolean) => {
  loginConfig.value.shouldStorePassword = val
}
</script>

<style lang="scss" scoped>
.page {
  @apply min-w-full min-h-screen px-8 py-6 flex flex-col;
  background: url('@/assets/bg-login.svg') center no-repeat;
  background-size: 100%;
}
header {
  @apply text-right text-gray-500;
}
main {
  @apply min-w-[340px] w-[340px] max-w-lg mx-auto text-center mt-20 flex-1;
  h1 {
    @apply text-gray-800 font-bold text-3xl flex items-center justify-center;
    background: -webkit-linear-gradient(315deg,#330ddc 25%,#20a2ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    @apply mb-12 text-gray-500;
  }
}
footer {
  @apply flex-grow-0 flex-shrink-0 text-center mt-16 text-gray-500;
}
</style>
