<template>
  <div class="formulario">
    <div class="alert alert-success" v-if="provincia" role="alert">
      {{ provincia }}
    </div>
    <div class="form-group">
      <label class="p-1">Provincia:</label>
      <input type="text" v-model="nombre" class="form-control" />
    </div>
    <div class="form-group">
      <label class="p-1">Capital:</label>
      <input type="text" v-model="capital" class="form-control" />
    </div>
    <div class="form-group">
      <label class="p-1">Abreviatura:</label>
      <input type="text" v-model="abreviatura" class="form-control" />
    </div>
    <div class="form-group">
      <label class="p-1">Bandera:</label>
      <input type="text" v-model="bandera" class="form-control" />
    </div>
    <div class="form-group">
      <label class="p-1">Población:</label>
      <input type="number" v-model="poblacion" class="form-control" />
    </div>
    <div class="form-group">
      <label class="p-1">Superficie:</label>
      <input type="number" v-model="superficie" class="form-control" />
    </div>
    <div class="form-group">
      <label class="p-1">N° Departamentos:</label>
      <input type="number" v-model="nroDepartamentos" class="form-control" />
    </div>

    <div class="buttons form-group mt-3">
      <button class="btn btn-success" @click="setProvincia()">
        {{ id ? "Editar" : "Crear" }}
      </button>
      <button class="btn btn-primary" @click="this.$router.go(-1)">
        Volver
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioProvincia",

  beforeMount() {
    this.id = this.$route.params.id;
  },

  data() {
    return {
      provincia: null,
      id: null,
      nombre: null,
      capital: null,
      poblacion: null,
      superficie: null,
      nroDepartamentos: null,
      abreviatura: null,
      bandera: null,
    };
  },
  methods: {
    setProvincia() {
      let body;
      if (this.id) {
        body = {
          id: this.id,
          nombre: this.nombre,
          capital: this.capital,
          poblacion: this.poblacion,
          superficie: this.superficie,
          nroDepartamentos: this.nroDepartamentos,
          abreviatura: this.abreviatura,
          bandera: this.bandera,
        };
        this.updateProvincia(body);
      } else {
        body = {
          nombre: this.nombre,
          capital: this.capital,
          poblacion: this.poblacion,
          superficie: this.superficie,
          nroDepartamentos: this.nroDepartamentos,
          abreviatura: this.abreviatura,
          bandera: this.bandera,
        };
        this.insertProvincia(body);
      }
    },
    async updateProvincia(body) {
      let url = `http://168.194.207.98:8081/api_provincia/put_provincia.php`,
        options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.provincia = response;
      window.location.href = "/";
    },
    async insertProvincia(body) {
      let url = `http://168.194.207.98:8081/api_provincia/post_provincia.php`,
        options = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.provincia = response;
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
.formulario {
  margin-top: 5%;
  table-layout: fixed;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
}
.btn {
  margin: 1px;
}
.buttons {
  text-align: center;
}
</style>
