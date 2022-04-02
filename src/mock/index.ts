import Mock from "mockjs"
import { getUserInfo, login } from './data/userInfo'
import { dynamicRoutes } from './data/routes'

Mock.setup({
  timeout: 1000
})

Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock(/\/login/, login)
Mock.mock(/\/getPermissionRoutes/, dynamicRoutes)

export default Mock