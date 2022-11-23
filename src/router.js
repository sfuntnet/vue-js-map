import { createWebHistory, createRouter } from "vue-router";
import CardMap from "./components/CardMap";
import Card from "./components/Card";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Card,
    },
    {
        path: "/map",
        name: "map",
        component: CardMap,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;