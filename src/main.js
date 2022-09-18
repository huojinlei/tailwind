// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import vuex from "./vuex/index"
import "element-ui/lib/theme-chalk/index.css";
import "./index.css"
import "tailwindcss/tailwind.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: "#app",
    vuex,
    router,
    components: { App },
    template: "<App/>"
});