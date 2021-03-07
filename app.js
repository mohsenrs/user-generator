const app = Vue.createApp({
  data() {
    return {
      firstName: "mohsen",
      lastName: "salehi",
      email: "mohsen@gmail.com",
      gender: "male",
      picture: "./download.jpg",
    };
  },
});

app.mount("#app");
