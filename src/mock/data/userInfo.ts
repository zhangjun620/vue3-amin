import Mock , { Random } from "mockjs"

interface userInfo {
  name: String,
  age: Number,
  avatar: String,
  role: Array<String>,
  time: Number,
}

interface login {
  token: String,
}

export const getUserInfo = (): userInfo => {
  
  let userInfo: userInfo = {
    name: Random.id(),
    avatar: Random.image(),
    age: Random.integer(20,30),
    role: [],
    time: 12,
  }

  return userInfo
}

export const login = (): login => {
  let token : login = { 
    token: Random.sentence(5),
  }
  return token
}