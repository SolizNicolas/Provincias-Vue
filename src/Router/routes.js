import { createWebHistory, createRouter } from "vue-router";
import Grilla from "../components/Grilla";

const routes = [
  {
    path: "/",
    name: "Grilla",
    component: Grilla,
  },
  {
    path: "/detalle/:id",
    name: "DetalleProvincia",
    component: () => import("../components/Detalle"),
  },
  {
    path: "/editar/:id",
    name: "EditarProvincia",
    component: () => import("../components/Formulario"),
  },
  {
    path: "/insertar",
    name: "InsertarProvincia",
    component: () => import("../components/Formulario"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
