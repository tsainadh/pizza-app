<template>
  <section>
  <div class="row p-5">
    <h3 class="text-right">Total orders: {{ orders.length }}</h3>
   <div class="col-12 order-box" v-for="(order, key) in orders" :key="key" :value="order">
    <div class="row p-3">
      <div class="col-4">
        <p>Order id: #{{ order.id }}</p>
        <img class="img-fluid img-thumbnail" :src="order.image">
      </div>
      <div class="col-4">
        <p>Customer name: {{ order.customer_name }}</p>
        <p>No.of items ordered: {{ order.items.length }}</p>
        Items:
        <ul>
          <li v-for="item in order.items" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="col-4">
        <p>Total amount of the order: {{ order.total_amount }}</p>
        <p>Status of the order: {{ getStatusTitle(order.status) }}</p>
        <button type="button" 
                class="btn text-white" 
                :ref="'btn_'+key"
                :class="getStatusClass(order.status)" 
                @click.prevent="updateStatus(order.status,key)">
              {{ getStatusTitle(order.status) }}
        </button>
    </div>
    </div>
   </div>
  </div>
  </section>
</template>

<script>

import MasterData from '@/mixins/MasterData';

export default {
  mixins: [
     MasterData
  ],
  methods:{
    getStatusTitle(inp) {
      return this.order_statuses[inp].title;
    },
    getStatusClass(inp) {
      return this.order_statuses[inp].class;
    },
    updateStatus(inp, key) {
      let inp_val = inp+1;
      let old_class = this.getStatusClass(inp);
      let new_class = this.getStatusClass(inp_val);
      this.$refs['btn_'+key][0].classList.replace(old_class,new_class);
      this.$refs['btn_'+key][0].innerText=this.getStatusTitle(inp_val);
      this.orders[key].status = inp_val;
    }
  }
}
</script>