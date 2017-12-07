const user    = require('../models/user.js')
const koaJwt  =	require('koa-jwt')
const jwt     = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
console.log(user)
const login = async function (ctx) {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  console.log(ctx)
  console.log(ctx.request.body)
  let name = ctx.request.body

  const token = jwt.sign(name,{secret:'koa'}, {expiresIn: '10s'})  //token签名 有效期为1小时
  const result = await user.getUserById(id) // 通过await “同步”地返回查询结果
  ctx.body = {
    token:token
  } // 将请求的结果放到response的body里返回
}
const getUserInfo = async function (ctx) {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  console.log(ctx)
  console.log(ctx.request.body)
  let name = ctx.request.body

  //const token = jwt.sign(name, 'secret', {expiresIn: '10s'})  //token签名 有效期为1小时
  const result = await user.getUserById(id) // 通过await “同步”地返回查询结果
  ctx.body = {
    1:'aaaa'
    //token:token
  } // 将请求的结果放到response的body里返回
}
// const postUserAuth = async function (ctx) {
//   const data = ctx.request.body // post过来的数据存在request.body里
//   const userInfo = await user.getUserByName(data.name)
//   if (userInfo != null) { // 如果查无此用户会返回null
//     if (!bcrypt.compareSync(data.password, userInfo.password)) {
//       ctx.body = {
//         success: false, // success标志位是方便前端判断返回是正确与否
//         info: '密码错误！'
//       }
//     } else {
//       const userToken = {
//         name: userInfo.user_name,
//         id: userInfo.id
//       }
//       const secret = 'vue-koa-demo' // 指定密钥
//       const token = jwt.sign(userToken, secret) // 签发token
//       ctx.body = {
//         success: true,
//         token: token // 返回token
//       }
//     }
//   } else {
//     ctx.body = {
//       success: false,
//       info: '用户不存在！' // 如果用户不存在返回用户不存在
//     }
//   }
// }

// export default {
//     getUserInfo
//     //postUserAuth
// }
module.exports={
    login:login,
    getUserInfo:getUserInfo
}