<template>
  <div class="container">
    <br />
    <div class="input-group mb-3 w-50 mt-3">
      <input
        type="text"
        v-model="busqueda"
        class="form-control"
        placeholder="Ingresar Provincia"
      />
      <button className="btn btn-primary" @click="buscarProvincias()">
        Buscar
      </button>
    </div>
    <a href="/insertar">
      <button class="btn btn-primary">Nueva Provincia</button>
    </a>
    <br />
    <br />
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Provincia</th>
            <th scope="col">Abreviatura</th>
            <th scope="col">Bandera</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(provincia, index) in provincias" :key="provincia.id">
            <th scope="row">{{ provincia.nombre }}</th>
            <td>{{ provincia.abreviatura }}</td>
            <td>
              <img class="imagen" :src="'/Images/' + provincia.bandera" />
            </td>
            <td>
              <a :href="'/detalle/' + provincia.id" class="btn btn-success"
                >Detalle</a
              >
            </td>
            <td>
              <a :href="'/editar/' + provincia.id" class="btn btn-warning"
                >Editar</a
              >
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="deleteProvincia(provincia.id, index)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrillaProvincias",

  data() {
    return {
      provincias: null,
      busqueda: null,
    };
  },

  beforeMount() {
    this.getProvincias();
  },

  methods: {
    async getProvincias() {
      let url = "http://168.194.207.98:8081/api_provincia/get_provincias.php",
        options = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
        this.provincias = response;
      } catch (e) {
        console.log(e);
      }
    },

    async buscarProvincias() {
      let url = `http://168.194.207.98:8081/api_provincia/get_provincias.php?nombre=${this.busqueda}`,
        options = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
        this.provincias = response;
      } catch (e) {
        console.log(e);
      }
    },

    async deleteProvincia(id, index) {
      let url = `http://168.194.207.98:8081/api_provincia/delete_provincia.php?id=${id}`,
        options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
      } catch (e) {
        console.log(e);
      }
      if (response.status === 200) {
        this.provincias.splice(index, 1);
      }
    },
  },
};
</script>
