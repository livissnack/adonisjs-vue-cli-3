'use strict'

const Env = use('Env')

module.exports = {
  apiUrl: {
    /*
    |--------------------------------------------------------------------------
    | cnode Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the cnodejs developers
    | console. https://cnodejs.org/api
    |
    */
    cnode: {
      baseUrl: Env.get('CNODE_BASE_URL'),
      topicListApi: `${Env.get('CNODE_BASE_URL')}/api/v1/topics`,
      topicDetailApi: `${Env.get('CNODE_BASE_URL')}/api/v1/topic`
    },

    forexdata: {
      baseUrl: Env.get('FOREXDATA_BASE_URL'),
      keyApi: 'vG8IcAlOyKGsm75iFKIPMD2XzisY6npt',
      quotesApi: `${Env.get('FOREXDATA_BASE_URL')}/quotes`,
      symbolsApi: `${Env.get('FOREXDATA_BASE_URL')}/symbols`,
      convertApi: `${Env.get('FOREXDATA_BASE_URL')}/convert`,
      marketStatusApi: `${Env.get('FOREXDATA_BASE_URL')}/market_status`,
      quotaApi: `${Env.get('FOREXDATA_BASE_URL')}/quota`,
    },

    imeiinfo: {
      baseUrl: Env.get('IMEIINFO_BASE_URL'),
      keyApi: Env.get('IMEIINFO_API_KEY', '19d3e5d815mshc6309a30dafc117p12b814jsnabf614548923')
    }
  }
}
