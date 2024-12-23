Component({
  // Estado interno del componente
  data: {
    departments: [], // Inicializa una lista vacía para almacenar los datos de los departamentos
  },

  // Método que se ejecuta cuando el componente se monta en el DOM
  didMount() {
    // Realiza una solicitud a la API para obtener los datos de los departamentos
    my.request({
      url: "https://api-colombia.com/api/v1/Department",
      method: "GET",
      success: (res) => {
        console.log("Datos obtenidos:", res.data);
        // Actualiza el estado interno con los datos obtenidos
        this.setData({
          departments: res.data,
        });
      },
      fail: (err) => {
       console.error("Error al obtener los datos:", err);
      },
    });
  },

  // Métodos del componente
  methods: {},
});
