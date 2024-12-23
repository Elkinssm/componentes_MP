export default {
  // Método común que puede ser utilizado por cualquier componente que incluya este mixin
  // Otros métodos del ciclo de vida que pueden ser reutilizados
  didMount() {
    console.log("Mixin didMount ejecutado");
  },
  didUpdate(prevProps, prevData) {
    console.log("Mixin didUpdate ejecutado", prevProps, prevData);
  },
  didUnmount() {
    console.log("Mixin didUnmount ejecutado");
  },
};
