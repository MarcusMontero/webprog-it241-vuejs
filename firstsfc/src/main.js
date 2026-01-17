import { createApp, onMounted } from 'vue'
import App from './App.vue'

import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)

app.mixin({
  mounted() {
    const links = document.querySelectorAll("nav ul li a[href^='#']")

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    console.log("Personal profile website loaded")
  }
})

app.mount('#app')
