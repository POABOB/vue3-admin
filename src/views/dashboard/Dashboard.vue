<template>
  <div class="dashboard">
    <Info />
    <TechStack />
    <Tree />
    <Rules />
  </div>
</template>

<script>
import Info from "./components/Info.vue"
import TechStack from "./components/TechStack.vue"
import Tree from "./components/Tree.vue"
import Rules from "./components/Rules.vue"
export default {
  components: { Info, TechStack, Tree, Rules }
}
</script>
