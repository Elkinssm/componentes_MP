Component({
  // Mixins son fragmentos de código reutilizables que se pueden incluir en múltiples componentes
  mixins: [],

  // Data es el estado interno del componente
  data: {
    internalState: "Estado inicial",
  },

  // Props son las propiedades que se pasan al componente desde el padre
  props: {
    text: {
      type: String,
      value: "Componente personalizado",
    },
  },

  // didMount se ejecuta cuando el componente se monta en el DOM
  didMount() {
    console.log("Componente montado");
  },

  // didUpdate se ejecuta cuando el componente se actualiza
  didUpdate(prevProps, prevData) {
    console.log("Componente actualizado", prevProps, prevData);
  },

  // didUnmount se ejecuta cuando el componente se desmonta del DOM
  didUnmount() {
    console.log("Componente desmontado");
  },

  // Methods son los métodos del componente
  methods: {
    handleTap() {
      // Actualiza el estado interno del componente
      this.setData({
        internalState: "Estado actualizado",
      });
      console.log("Botón clicado, estado interno actualizado");
      my.navigateTo({
        url: "/pages/redirect/redirect",
      });

    },
  },
});
