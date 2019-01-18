'use strict'
const Axios = use('axios')
const Config = use('Config')

class ApiController {
  /**
   * cnode社区文章列表
   * @param {*} param0 
   */
  async cnodeList ({ request, response }) {
    const cnode = await Config.get('url.apiUrl.cnode')
    const page = request.input('page', 1)
    const tab = request.input('tab', 'ask')
    const limit = request.input('limit', 20)
    const mdrender = request.input('mdrender', 'true')
    await Axios.get(`${cnode.topicListApi}`, {
      params: {
        page: page,
        tab: tab,
        limit: limit,
        mdrender: mdrender
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * cnode社区文章详情
   * @param {*} param0 
   */
  async cnodeDetail ({ params, request, response }) {
    const cnode = await Config.get('url.apiUrl.cnode')
    const topicId = params.id
    const mdrender = request.input('mdrender', 'true')
    const accesstoken = request.input('accesstoken')
    await Axios.get(`${cnode.topicDetailApi}/${topicId}`, {
      params: {
        accesstoken: accesstoken ? accesstoken : '',
        mdrender: mdrender
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 
   * @param {获取货币汇率} param0 
   */
  async quotes ({ request, response }) {
    const forexdata = await Config.get('url.apiUrl.forexdata')
    const pairs = request.input('pairs', 'USDCNH')
    const apiKey = request.input('api_key', forexdata.keyApi)
    await Axios.get(`${forexdata.quotesApi}`, {
      params: {
        pairs: pairs,
        api_key: apiKey
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 获取货币符号列表
   * @param {} param0 
   */
  async symbols ({ request, response }) {
    const forexdata = await Config.get('url.apiUrl.forexdata')
    const apiKey = request.input('api_key', forexdata.keyApi)
    await Axios.get(`${forexdata.symbolsApi}`, {
      params: {
        api_key: apiKey
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 一种货币兑换为另一种货币
   * @param {} param0 
   */
  async convert ({ request, response }) {
    const forexdata = await Config.get('url.apiUrl.forexdata')
    const from = request.input('from')
    const to = request.input('to')
    const quantity = request.input('quantity', 1)
    const apiKey = request.input('api_key', forexdata.keyApi)
    await Axios.get(`${forexdata.convertApi}`, {
      params: {
        from: from,
        to: to,
        quantity: quantity,
        api_key: apiKey
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 检查市场是否开启
   * @param {*} param0 
   */
  async marketStatus ({ request, response }) {
    const forexdata = await Config.get('url.apiUrl.forexdata')
    const apiKey = request.input('api_key', forexdata.keyApi)
    await Axios.get(`${forexdata.marketStatusApi}`, {
      params: {
        api_key: apiKey
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 检查当前使用情况
   * @param {} param0 
   */
  async quota ({ request, response }) {
    const forexdata = await Config.get('url.apiUrl.forexdata')
    const apiKey = request.input('api_key', forexdata.keyApi)
    await Axios.get(`${forexdata.quotaApi}`, {
      params: {
        api_key: apiKey
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 手机串号查信息
   * @param {*} param0 
   */
  async checkimei ({ request, response }) {
    const imeiinfo = await Config.get('url.apiUrl.imeiinfo')
    const imei = request.input('imei')
    const apiKey = request.input('api_key', imeiinfo.keyApi)
    await Axios({
      method: 'post',
      url: `${imeiinfo.baseUrl}/checkimei/`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      },
      data: {
        imei: imei,
        key: apiKey
      }
    }).then(function(res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }

  /**
   * 手机信息查询接口授权key状态查询
   * @param {*} param0 
   */
  async checkImeiKeyStatus ({ request, response }) {
    const imeiinfo = await Config.get('url.apiUrl.imeiinfo')
    const apiKey = request.input('key', imeiinfo.keyApi)
    await Axios.get(`${imeiinfo.baseUrl}/status`, {
      params: {
        key: apiKey
      }
    }).then(function (res) {
      response.json(res.data)
    }).catch(function (err) {
      response.json(err)
    })
  }
}

module.exports = ApiController
