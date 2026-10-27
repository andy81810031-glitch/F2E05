import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("auth", () => ({
  page: "login",

  gotoLogin() {
    this.page = "login";
  },

  gotoSignUp() {
    this.page = "signup";
  },
}));

Alpine.start();