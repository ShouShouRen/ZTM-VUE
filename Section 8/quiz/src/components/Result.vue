<script>
export default {
  props: ["results", "totalCorrect"],
  computed: {
    resultIndex() {
      let index = 0;
      return index;
    },
  }
}
</script>

<template>
  <div class="result">
    <div class="title">You got sample result 1!</div>
    <div class="desc">
      Enter a short description here about the result.
    </div>
  </div>
</template>

<style></style>
