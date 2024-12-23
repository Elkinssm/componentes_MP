Component({
  // Estado interno del componente
  data: {
    count: 0, // Inicializa el contador en 0
  },

  // Propiedades que se pasan al componente desde el padre
  props: {
    initialCount: {
      type: Number, // Define el tipo de la propiedad como número
      value: 0, // Valor por defecto de initialCount
    },
  },

  // Método que se ejecuta cuando el componente se monta en el DOM
  didMount() {
    // Asegúrate de que initialCount se maneje como un número y actualiza el estado interno
    this.setData({ count: Number(this.props.initialCount) });
  },

  // Métodos del componente
  methods: {
    // Método para incrementar el contador
    increment() {
      this.updateCount(1); // Llama a updateCount con un delta de 1
    },

    // Método para decrementar el contador
    decrement() {
      this.updateCount(-1); // Llama a updateCount con un delta de -1
    },

    // Método para actualizar el contador
    updateCount(delta) {
      // Actualiza el estado interno sumando delta al valor actual de count
      this.setData({ count: this.data.count + delta });
    },
  },
});
