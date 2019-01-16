'use strict'
const User = use('App/Models/User')

class LoginController {
  async redirect ({ session, request, ally }) {
    const type = request.input('type', 'facebook')
    await session.forget('type')
    await session.put('type', type)
    await ally.driver(type).redirect()
  }

  async callback ({ session, ally, auth }) {
    try {
      const type = await session.get('type')
      const fbUser = await ally.driver(type).getUser()

      const userDetails = {
        email: fbUser.getEmail(),
        token: fbUser.getAccessToken(),
        login_source: type
      }

      const whereClause = {
        eamil: fbUser.getEmail()
      }

      const user = await User.findOrCreate(whereClause, userDetails)
      await auth.login(user)
      return 'Logged in'
    } catch (error) {
      return 'Unable to authenticate. Try again later'
    }
  }
}

module.exports = LoginController
