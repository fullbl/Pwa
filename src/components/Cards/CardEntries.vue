<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="lg:w-2/12 px-2">
          <h3 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Wallet
          </h3>
        </div>
      </div>
    </div>

    <EntriesTable ref="entry" />
    <!-- pagination -->
    <div class="py-2" v-if="pagination.enabled">
      <Paginator ref="_paginator"></Paginator>
    </div>
    <!-- end pagination -->

  </div>
</template>
<script>

import EntriesTable from "@/components/GenericComponents/EntriesTable.vue";
import axios from 'axios'
import ApiServiceVue from '../../services/ApiService.vue';
import Paginator from "../GenericComponents/Paginator.vue";
import LocalStorageService from "../../services/LocalStorageService.vue";

export default {
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      filter: "",
      wallet: 0,
      selected: {
        account: 0
      },
      pagination: {
        enabled: false
      },
      action: {
        reset: true
      },
    }
  },
  components: {
    EntriesTable, Paginator
  },
  watch: {
    $route() {
      this.invoke()
    }
  },
  mounted() {
    LocalStorageService.set('current_page', 0)
    this.invoke()
  },
  methods: {
    invoke() {
      let _this = this

      let filter = ''

      if (this.$route.query.account !== undefined) {
        filter += `&filter[account]=${this.$route.query.account}`
      }

      if (this.$route.query.category !== undefined) {
        filter += `&filter[category]=${this.$route.query.category}`
      }

      if (this.$route.query.type !== undefined) {
        filter += `&filter[type]=${this.$route.query.type}`
      }

      if (this.$route.query.label !== undefined) {
        filter += `&filter[label]=${this.$route.query.label}`
      }

      if (filter != '') {
        this.action.reset = true
      } else {
        this.action.reset = false
      }

      let currentPage = LocalStorageService.get('current_page') == null ? 0 : LocalStorageService.get('current_page')
      ApiServiceVue.getEntry(currentPage, filter).then((res) => {

        if (res.data.length > 0) {
          _this.$refs.entry.buildEntriesTable(res.data)
        }

        if (currentPage == 0) {
          this.pagination.enabled = res.paginate
        }
        if (this.$refs._paginator !== undefined) {
          this.$refs._paginator.hasMorePage = res.hasMorePages
        }
      })

    },
    get(path, callBack) {
      axios.get(path).then((resp) => {
        callBack(resp.data)
      }).catch((error) => {
        console.error(error);
      })
    }
  },
};
</script>

<style scoped>
.transfer-color {
  background-color: #ffe08738;
}
</style>