<template>
  <PersonalProfile />
  <FoodItem />
  <FoodItem2 />
</template>

<script>
import PersonalProfile from "./components/PersonalProfile.vue"
import FoodItem from "./components/FoodItem.vue"
import FoodItem2 from "./components/FoodItem2.vue"

export default {
  components: {
    PersonalProfile,
    FoodItem,
    FoodItem2
  }
}
</script>

<style></style>
