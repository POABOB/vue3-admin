<template>
  <component :is="type" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script>
import { computed } from "vue"
export default {
  props: { to: { type: String, required: true } },
  setup(props) {
    const attributes = { href: props.to, target: "_blank", rel: "noopener" }
    const isExternalValid = computed(() =>
      /^(https?:|mailto:|tel:)/.test(props.to)
    )

    // 判斷是內部連結還是外部連結
    const type = computed(() => {
      if (isExternalValid.value) return "a"
      return "router-link"
    })

    // 綁定超連結的attributes
    const linkProps = () => {
      if (isExternalValid.value) return attributes
      return { to: props.to }
    }

    return { type, linkProps }
  }
}
</script>
