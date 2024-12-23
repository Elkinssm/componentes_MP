import mixin from "../../util/mixin";

Component({
  // Incluye el mixin en el componente
  mixins: [mixin],

  // Estado interno del componente
  data: {},

  // Propiedades que se pasan al componente desde el padre
  props: {
    text: {
      type: String, // Define el tipo de la propiedad como cadena de texto
      value: "Componente personalizado", // Valor por defecto de la propiedad text
    },
  },

  // Método que se ejecuta cuando el componente se monta en el DOM
  didMount() {
    // Código que se ejecuta cuando el componente se monta
    console.log("Componente montado");
  },

  // Método que se ejecuta cuando el componente se actualiza
  didUpdate(prevProps, prevData) {
    // Código que se ejecuta cuando el componente se actualiza
    console.log("Componente actualizado", prevProps, prevData);
  },

  // Método que se ejecuta cuando el componente se desmonta del DOM
  didUnmount() {
    // Código que se ejecuta cuando el componente se desmonta
    console.log("Componente desmontado");
  },

  // Métodos del componente
  methods: {
    // Aquí puedes definir los métodos del componente
  },
});
