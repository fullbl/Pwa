<template>
    <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                    <HeaderButton back="/app/settings/category" title="Category settings" />

                    <div class="relative p-6 flex-auto">
                        <!-- Regular Input -->
                        <div class="mb-3 pt-0">
                            <input type="text" placeholder="Category name" v-model="modal.name"
                                class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
                        </div>

                        <div class="mb-3 pt-0">
                            <select
                                class="w-full border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="modal.parent_category">
                                <option value="0">Choose a parent category</option>
                                <option v-for="(item, k) in categories" :key="k" :value="item.id">{{
                                    item.name }}</option>
                            </select>
                        </div>

                        <div class="mb-3 pt-0">
                            <label for="exclude_stats">
                                <input v-model="modal.exclude_stats" type="checkbox" class="p-1 border rounded"
                                    id="exclude_stats" :value="true" checked> Exclude from stats
                            </label>
                        </div>

                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" v-on:click="saveModal()">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HeaderButton from '@/components/Button/HeaderButton.vue';
import ApiService from '@/services/ApiService.vue';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: {
        HeaderButton,
    },
    data() {
        return {
            color: null,
            form: {
                type: ['incoming', 'expenses', 'investments'],
            },
            categories: [],
            modal: {
                id: null,
                name: null,
                parent_category: [0],
                exclude_stats: false,
            }
        }
    },
    mounted: function () {
        this.openModal(this.$route.params.subId)
    },
    methods: {
        showSub(id) {
            if (this.opentab == id) {
                this.opentab = null
            } else {
                this.opentab = id
            }

        },
        openModal(id) {
            if (undefined === id) {
                id = ''
            }

            ApiService.category(id).then((resp) => {
                resp.forEach(e => {
                    this.categories.push(e)
                });
            })
        },
        closeModal() {
            this.showModal = false
            this.modal.id = null
            this.modal.name = null
            this.modal.exclude_stats = false
            this.modal.parent_category = null
        },
        saveModal() {
            const _this = this
            ApiService.setCategories(this.modal, this.modal.id).then(() => {
                _this.$router.push({path : '/app/settings/category'})
            })
        },
        updateColor(eventData) {
            this.modal.color = eventData.cssColor
        },
    }
};
</script>

<style>
.vacp-color-input-group {
    display: none !important;
}

.vacp-copy-button {
    display: none !important;
}

.expenses {
    color: red
}

.incoming {
    color: green
}
</style>
  