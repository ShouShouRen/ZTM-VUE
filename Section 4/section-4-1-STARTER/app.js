let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() function called", this.message);
  },
  created() {
    console.log("Create() function called", this.message);
  },
  beforeMount() {
    console.log("beforMount() function called", this.$el);
  },
  mounted() {
    console.log("Mounted() function called", this.$el);
  },
  beforeMount() {
    console.log("beforMount() function called");
  },
  update() {
    console.log("update() function called");
  },
});

vm.mount("#app");
// setTimeout(() => {
//   vm.mount('#app')
// }, 3000);
