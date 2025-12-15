export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Catering",
    description: "API RESTful completa para gestionar reservas, inventario de insumos y asignación de personal para eventos. Incluye autenticación JWT y reportes.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
    links: {
      github: "https://github.com/tu-usuario/proyecto-catering",
      demo: "#" // Si no tienes demo, puedes poner null
    },
    // Para backend devs, destacar la arquitectura es clave
    features: [
      "Autenticación segura con Spring Security & JWT",
      "Base de datos relacional normalizada (PostgreSQL)",
      "Documentación automática con Swagger UI",
      "Patrón DTO y Mapper para transferencia de datos"
    ]
  },
  {
    id: 2,
    title: "Microservicio de Notificaciones",
    description: "Servicio desacoplado encargado de enviar emails y notificaciones push utilizando colas de mensajes para alta concurrencia.",
    tags: ["Node.js", "RabbitMQ", "MongoDB", "Docker"],
    links: {
      github: "https://github.com/tu-usuario/microservicio-notif",
      demo: null
    },
    features: [
      "Procesamiento asíncrono con RabbitMQ",
      "Contenerización con Docker para despliegue",
      "Templates de email dinámicos",
      "Manejo de reintentos y Dead Letter Queues"
    ]
  },
  // Agrega más proyectos aquí siguiendo el mismo formato
];