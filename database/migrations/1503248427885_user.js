'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique().comment('用户名')
      table.string('email', 254).notNullable().unique().comment('用户邮箱')
      table.string('avatar', 254).notNullable().comment('用户图像')
      table.string('password', 60).notNullable().comment('用户密码')
      table.decimal('balance', 10, 2).notNullable().defaultTo(0.00).comment('用户余额')
      table.string('mobile', 20).unique().comment('用户手机号')
      table.string('id_card_no', 40).unique().comment('用户身份证号')
      table.string('login_source', 10).comment('用什么第三方登录')
      table.string('last_login_ip', 15).comment('最近一次登录ip')
      table.integer('status').defaultTo(0).comment("用户状态 ['未注册', '已注册']")
      table.integer('type').defaultTo(0).comment("用户类别 ['普通用户', '黄金用户', '铂金用户', '钻石用户', '星耀用户', '王者用户']")
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
