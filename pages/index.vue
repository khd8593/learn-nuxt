<template>
  <div class="app">
    <main>
      <SearchInput v-model="searchKeyword" @search="searchProducts">
      </SearchInput>
      <ul>
        <li
          v-for="item in products"
          :key="item.id"
          class="item flex"
          @click="moveToDetailPage(item.id)"
        >
          <img class="product-image" :src="item.imageUrl" alt="" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import { fetchProductsByKeyword } from '@/api/index'
export default {
  components: { SearchInput },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))

    return { products } // 화면에 나타난 이후 data() 영역에 들어감
  },
  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    moveToDetailPage(id) {
      console.log(id)
      this.$router.push(`detail/${id}`)
    },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword)
      console.log(response)
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    },
    moveToCartPage() {
      this.$router.push('/cart')
    }
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
