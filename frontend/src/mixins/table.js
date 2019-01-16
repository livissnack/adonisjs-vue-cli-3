import Vue from 'vue'
import moment from 'moment'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import {
  Table,
  Input,
  Form,
  Pagination,
  Dropdown,
  Menu,
  Icon,
  Select,
  TimePicker,
  DatePicker,
  LocaleProvider,
  AutoComplete,
} from 'ant-design-vue'

Vue.use(Table)
Vue.use(Input)
Vue.use(Form)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(TimePicker)
Vue.use(LocaleProvider)
Vue.use(AutoComplete)

export default {
  created() {
    this.backupForm = { ...this.backupForm,
      ...this.form
    }
    this.$watch('form.loan_no', n => {
      if (n !== n.toUpperCase()) {
        this.form.loan_no = n.toUpperCase()
      }
    })
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    }
  },
  data() {
    return {
      locale: zhCN,
      pageSize: 20,
      current: 4,
      dataSource: [],
      submitting: 0,
    }
  },
  computed: {
    computeIsLowConsumption() {
      if (this.backupForm.status === 2) {
        return ''
      }
      const [config] = this.lowConsumptionConfig
      const {
        money,
        year_apr: yearApr,
        count_type: countType,
        time_limit: timeLimit
      } = this.form
      // 每期利息总额
      const interestTotal = money * yearApr * 0.01 / 12 * (countType === 3 ? timeLimit : 1)
      if (!config || interestTotal >= config.money) {
        this.disableLowConsumption = true
        this.form.is_low_consumption = false
      } else {
        this.disableLowConsumption = this.backupForm.status === 0 || this.backupForm.status === 2
        this.form.is_low_consumption = true
      }
      return ''
    },
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    onChange(value) {
      console.log(value)
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
    handleSubmit(value) {
      console.log(value)
    },
    handleMenuClick(value) {
      console.log(value)
    },
    handleSearch(value) {
      this.dataSource = !value ? [] : [
        value,
        value + value,
        value + value + value,
      ]
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onSelect(value) {
      console.log('onSelect', value);
    },
    moment,
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },

    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    },

    disabledRangeTime(_, type) {
      if (type === 'start') {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    },
  },
}
