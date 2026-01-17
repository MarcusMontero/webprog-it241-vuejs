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
