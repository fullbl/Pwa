<template>
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">Import</h6>
            </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Search
                </h6>
                <div class="flex flex-wrap">

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Search by text
                            </label>
                            <input type="text"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="action.text" />
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <span class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Is Planned</span>
                            <div class="container">
                                <label for="planned-no" class="uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    NO
                                    <input type="radio" id="planned-no" value="0"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                        v-model="action.planned" />
                                </label>
                                <label for="planned-yes" class="uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    YES
                                    <input type="radio" id="planned-yes" value="1"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                        v-model="action.planned" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Starting month
                            </label>
                            <select
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="action.month">
                                <option value="">select one</option>
                                <option v-for="(month, k) in input.month" :key="k" :value="month.value">{{ month.label }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Starting year
                            </label>
                            <select
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="action.year">
                                <option value="">select one</option>
                                <option v-for="(year, k) in input.year" :key="k" :value="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Type of transaction
                            </label>
                            <select multiple
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="action.type">
                                <option v-for="(type, k) in input.type" :key="k" :value="type">{{ type }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Account
                            </label>
                            <select multiple
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="action.account">
                                <option v-for="account in input.account" :key="account.id" :value="account.id">{{
                                    account.name
                                }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Category
                            </label>
                            <select multiple
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="action.category">
                                <option v-for="category in input.category" :key="category.id" :value="category.id">{{
                                    category.name
                                }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="bl}ock uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Label
                            </label>
                            <select v-model="action.tags" multiple
                                class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                <option
                                    :class="'text-xs font-semibold justify-center py-1 px-2 uppercase rounded text-white-600 last:mr-0 mr-1 ' + item.color"
                                    v-for="item in input.tags" :key="item.id" :value="item.id">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <button v-on:click="invoke()"
                                class="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

            </form>
        </div>

        <div class="flex flex-wrap">
            <div class="flex-l px-4" v-if="total.entry">
                <div class="relative  mb-3">
                    incoming: <span
                        :class="'text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-emerald-600 uppercase last:mr-0 mr-1 '+total.bgcolor">
                        {{ total.entry }} €
                    </span>

                </div>
            </div>
        </div>

        <!-- SEARCH TABLE VIEW -->

        <div class="flex flex-wrap ml-5 mr-5">
            <div class="w-full">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div class="px-4 py-5 flex-auto">
                        <div class="tab-content tab-space">
                            <EntriesTable ref="entryIncoming" />

                            <!-- pagination -->
                            <div class="py-2" v-if="pagination.enabled">
                                <Paginator ref="_paginator"></Paginator>
                            </div>
                            <!-- end pagination -->
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import EntriesTable from "@/components/GenericComponents/EntriesTable.vue";
import SearchService from "../../services/SearchService.vue";
import ApiService from "../../services/ApiService.vue";
import Paginator from "../GenericComponents/Paginator.vue";

export default {
    components: {
        EntriesTable, Paginator
    },
    data() {
        return {
            total: {
                entry: 0,
                bgcolor: "bg-emerald-400"
            },
            pagination: {
                enabled: false
            },
            input: {
                account: [],
                category: [],
                type: ["incoming", "expenses", "transfer", "debit"],
                tags: [],
                year: [],
                month:
                    [
                        {
                            "id": 1,
                            "value": "01",
                            "label": "Jenuary"
                        },
                        {
                            "id": 2,
                            "value": "02",
                            "label": "February"
                        },
                        {
                            "id": 3,
                            "value": "03",
                            "label": "March"
                        },
                        {
                            "id": 4,
                            "value": "04",
                            "label": "April"
                        },
                        {
                            "id": 5,
                            "value": "05",
                            "label": "May"
                        },
                        {
                            "id": 6,
                            "value": "06",
                            "label": "June"
                        },
                        {
                            "id": 7,
                            "value": "07",
                            "label": "July"
                        },
                        {
                            "id": 8,
                            "value": "08",
                            "label": "August"
                        },
                        {
                            "id": 9,
                            "value": "09",
                            "label": "September"
                        },
                        {
                            "id": 10,
                            "value": "10",
                            "label": "October"
                        },
                        {
                            "id": 11,
                            "value": "11",
                            "label": "November"
                        },
                        {
                            "id": 12,
                            "value": "12",
                            "label": "December"
                        }
                    ],
            },
            action: {
                account: null,
                category: null,
                type: [],
                tags: null,
                text: null,
                planned: null
            }
        }
    },
    mounted() {
        this.getCategory()
        this.getAccount()
        this.getLabels()

        //get year frin today
        let date = new Date;
        let toDay = date.getFullYear();
        for (var i = 0; i <= 5; i++) {
            this.input.year.push(toDay - i)
        }
    },
    methods: {
        invoke() {
            let _this = this
            let data = this.action
            let currentPage = window.localStorage.getItem('current_page') == null ? 0 : window.localStorage.getItem('current_page')

            SearchService.filter(data, currentPage).then((res) => {
                _this.$refs.entryIncoming.entries = []

                if (res.data.length > 0) {
                    _this.$refs.entryIncoming.buildEntriesTable(res.data)
                    _this.total.entry = res.balance
                    if(res.balance < 0) {
                        _this.total.bgcolor = "bg-orange-600"
                    }
                }

                if(currentPage == 0) {
                    this.pagination.enabled = res.paginate
                }
                
                if (this.$refs._paginator !== undefined) {
                    this.$refs._paginator.hasMorePage = res.hasMorePages
                }

            }).catch((error) => {
                this.action.alert = true
                this.action.alert_message = "Ops... An error occured"
                console.log(error);
            })
        },
        getLabels() {
            let _this = this
            ApiService.labels().then((res) => {
                let data = res
                data.forEach(function (r) {
                    _this.input.tags.push(r)
                })
            })
        },
        getCategory() {
            let _this = this
            ApiService.categories().then((res) => {
                let data = res
                data.forEach(function (r) {
                    r.sub_category.forEach((item) => {
                        _this.input.category.push(item)
                    })
                })
                _this.input.category.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
            })
        },
        getAccount() {
            let _this = this
            ApiService.accounts().then((res) => {
                let data = res.data
                data.forEach(function (r) {
                    _this.input.account.push(r)
                })
            })
        },
    }
}
</script>
