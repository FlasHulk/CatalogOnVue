import {createRouter, createWebHistory} from "vue-router";
import VCatalog from "../components/catalog/Catalog";
import HomePage from "../components/HomePage";
import Cart from "@/components/cart/Cart";

//@TODO для раутов рекомендуется использовать динамический импорт компонентов

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "catalog",
            component: VCatalog
        },
        {
            path: "/home-page",
            name: "home-page",
            component: HomePage
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        }
    ]
});

export default router;