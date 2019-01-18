'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('test', 'ApiController.test')

/**
 * 第三方授权登录
 */
Route.get('login', 'LoginController.redirect')
Route.get('callback', 'LoginController.callback')

Route.group(() => {
  /**
   * cnodejs社区接口
   */
  Route.get('cnode/topics', 'ApiController.cnodeList')
  Route.get('cnode/topic/:id', 'ApiController.cnodeDetail')

  /**
   * 货币汇率实时接口
   */
  Route.get('finance/quotes', 'ApiController.quotes')
  Route.get('finance/symbols', 'ApiController.symbols')
  Route.get('finance/convert', 'ApiController.convert')
  Route.get('finance/market/status', 'ApiController.marketStatus')
  Route.get('finance/quota', 'ApiController.quota')

  /**
   * 手机串号查信息
   */
  Route.get('imei/info/checkimei', 'ApiController.checkimei')
  Route.get('imei/info/checkkey', 'ApiController.checkImeiKeyStatus')
}).prefix('api/v1')


/**
 * vue spa应用路由策略
 */
Route.any('*', 'SpaController.index')
