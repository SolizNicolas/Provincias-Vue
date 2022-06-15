<template>
  <div class="container mt-5">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th scope="col">Provincia:</th>
          <td>{{ provincia.nombre }}</td>
        </tr>
        <tr>
          <th scope="col">Abreviatura:</th>
          <td>{{ provincia.abreviatura }}</td>
        </tr>
        <tr>
          <th scope="col">Capital:</th>
          <td>{{ provincia.capital }}</td>
        </tr>
        <tr>
          <th scope="col">Bandera:</th>
          <td><img class="imagen" :src="'/Images/' + provincia.bandera" /></td>
        </tr>
        <tr>
          <th scope="col">Población:</th>
          <td>{{ provincia.poblacion }}</td>
        </tr>
        <tr>
          <th scope="col">Superficie:</th>
          <td>{{ provincia.superficie }}</td>
        </tr>
        <tr>
          <th scope="col">N° Departamentos:</th>
          <td>{{ provincia.nroDepartamentos }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container">
    <a href="/" class="btn btn-success">Volver</a>
  </div>
</template>

<script>
export default {
  name: "DetalleProvincia",
  data() {
    return {
      provincia: null,
      url_id: null,
    };
  },

  beforeMount() {
    this.url_id = this.$route.params.id;
    this.getProvinciaById(this.url_id);
  },

  methods: {
    async getProvinciaById(id) {
      let url = `http://168.194.207.98:8081/api_provincia/get_provincia.php?id=${id}`,
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
        this.provincia = response;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 30%;
  display: flex;
  justify-content: center;
}
</style>
