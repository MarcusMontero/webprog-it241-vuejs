import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'


const app = createApp(App)
app.component('personal-profile', PersonalProfile)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.mount('#app')

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
