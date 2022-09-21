import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import PlayersComponent from './components/PlayersComponent';
import PointsComponent from './components/PointsComponent';
import DiceComponent from './components/DiceComponent';
import TeamGenerator from './components/TeamGenerator';
import Home from './components/Home';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/players', component: PlayersComponent },
  { path: '/points_ffa', component: PointsComponent },
  { path: '/dice', component: DiceComponent },
  { path: '/team_generator', component: TeamGenerator },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
