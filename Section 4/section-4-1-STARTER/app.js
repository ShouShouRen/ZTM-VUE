let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  // beforeCreate() {
  //   console.log("beforeCreate() function called", this.message);
  // },
  // created() {
  //   console.log("Create() function called", this.message);
  // },
  // beforeMount() {
  //   console.log("beforMount() function called", this.$el);
  // },
  // mounted() {
  //   console.log("Mounted() function called", this.$el);
  // },
  // beforeMount() {
  //   console.log("beforMount() function called");
  // },
  // update() {
  //   console.log("update() function called");
  // },
  // template: `{{ message }}`,
});

vm.component('hello', {
  template: `<h1> {{ message }} </h1>`,
  data() {
    return {
      message: "hello world"
    }
  }
});

vm.mount("#app");

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!",
//     };
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount("#app2");

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000);
