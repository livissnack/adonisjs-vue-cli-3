<!-- 这是接口列表页面 -->
<template>
  <div>
    <div class="form-box">
      <a-form layout='inline' @submit="handleSubmit">
        <a-form-item label='接口名称'>
          <a-auto-complete :dataSource="dataSource" @select="onSelect" @search="handleSearch">
            <a-input-search placeholder="请输入接口名称" style="width: 160px" @search="onSearch" />
          </a-auto-complete>
        </a-form-item>
        <a-form-item label='接口类别'>
          <a-select defaultValue="lucy" style="width: 120px" @change="handleChange" :loading=false>
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label='接口状态'>

          <a-range-picker @change="onChange" :showTime="{
        hideDisabledOptions: true, 
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')]
      }"
            format="YYYY-MM-DD HH:mm:ss" />

        </a-form-item>
        <a-form-item>
          <a-button type='primary' htmlType='submit'>查询</a-button>
        </a-form-item>
      </a-form>
      <a-form layout='inline' @submit="handleSubmit">
        <a-form-item>
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">导出列表</a-menu-item>
              <a-menu-item key="2">批量删除</a-menu-item>
            </a-menu>
            <a-button type='danger' style="margin-right: -16px">
              操作
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-form-item>
      </a-form>
    </div>
    <a-table :pagination=false bordered :columns="columns" :dataSource="data" :scroll="{ x: 1300 }">
      <a slot="action" href="javascript:;">编辑</a>
    </a-table>

    <a-pagination class="pagination" showQuickJumper showSizeChanger :pageSize.sync="pageSize" @showSizeChange="onShowSizeChange"
      :showTotal="total => `总共 ${total} 条`" :total="500" v-model="current" />


  </div>
</template>

<script>
  import List from '@/mixins/table'
  export default {
    mixins: [List],
    data() {
      return {
        data: [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York Park',
        }, {
          key: '2',
          name: 'Jim Green',
          age: 40,
          address: 'London Park',
        }],
        columns: [{
            title: '接口名称',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left'
          },
          {
            title: '接口类别',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left'
          },
          {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1'
          },
          {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2'
          },
          {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3'
          },
          {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4'
          },
          {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5'
          },
          {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6'
          },
          {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7'
          },
          {
            title: 'Column 8',
            dataIndex: 'address',
            key: '8'
          },
          {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 200,
            scopedSlots: {
              customRender: 'action',
            },
          },
        ],
      }
    },
    methods: {

    }
  }
</script>
<style lang='less' scoped>
  .form-box {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
</style>