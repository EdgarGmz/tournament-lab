// COMPONENTS
import { FcCancel, FcExport, FcIdea, FcManager, FcOk, FcPlus } from "react-icons/fc";
import { TfiCup } from "react-icons/tfi";

const tournamentBase = (overrides) => ({
  champion: "",
  reason_cancelation: "",
  ...overrides
});

export const tournaments = [
  tournamentBase({
    id: 1,
    name: "Torneo de Ajedrez",
    status: "Activo",
    participants: [
      "Carlos", "Ana", "Luis", "Marta", "Javier", "Sonia",
      "Roberto", "Elisa", "Gabriel", "Natalia", "Iván", "Patricia", "Fernando", "Lucía", "Andrés", "Silvia"
    ],
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    description: "Compite en partidas estratégicas de ajedrez contra jugadores expertos.",
    type_tournament: "Juego de Mesa"
  }),
  tournamentBase({
    id: 2,
    name: "Liga de Videojuegos",
    status: "Completado",
    participants: [
      "Pedro", "Lucía", "Jorge", "Marina", "Oscar",
      "Sergio", "Valeria", "Héctor", "Camila", "Esteban", "Rosa", "David", "Paola", "Emilio", "Andrea"
    ],
    startDate: "2025-04-01",
    endDate: "2025-04-20",
    champion: "Lucía",
    description: "Torneo en línea de los videojuegos más populares del momento.",
    type_tournament: "Video Juegos"
  }),
  tournamentBase({
    id: 3,
    name: "Campeonato de Fútbol",
    status: "Cancelado",
    participants: [
      "Tigres", "Rayados", "Águilas", "Leones", "Pumas",
      "Toros", "Halcones", "Panteras", "Lobos", "Osos", "Caimanes", "Tiburones", "Venados", "Gatos", "Búhos"
    ],
    startDate: "2025-05-01",
    endDate: "2025-05-10",
    description: "El clásico campeonato de equipos universitarios de fútbol.",
    type_tournament: "Deporte",
    reason_cancelation: "Clima adverso"
  }),
  tournamentBase({
    id: 4,
    name: "Torneo de Tenis",
    status: "Activo",
    participants: [
      "Sofía", "Daniel", "Elena", "Martín", "Paula",
      "Alberto", "Claudia", "Joaquín", "Teresa", "Gustavo", "Lorena", "Raúl", "Mónica", "Iván", "Susana"
    ],
    startDate: "2025-06-18",
    endDate: "2025-06-22",
    description: "Torneo individual de tenis en cancha dura. Nivel intermedio-avanzado.",
    type_tournament: "Deporte"
  }),
  tournamentBase({
    id: 5,
    name: "Maratón Anual",
    status: "Completado",
    participants: [
      "Equipo Alpha", "Equipo Beta", "Equipo Gamma", "Equipo Delta",
      "Equipo Omega", "Equipo Sigma", "Equipo Zeta", "Equipo Epsilon", "Equipo Pi", "Equipo Lambda", "Equipo Kappa", "Equipo Tau", "Equipo Rho", "Equipo Theta"
    ],
    startDate: "2025-03-01",
    endDate: "2025-03-02",
    champion: "Equipo Alpha",
    description: "Una carrera abierta a todo público con categorías por edad.",
    type_tournament: "Deporte"
  }),
  tournamentBase({
    id: 6,
    name: "Competencia de Programación",
    status: "Completado",
    participants: [
      "Alex", "Brenda", "César", "Diana", "Eduardo", "Fernanda",
      "Gustavo", "Helena", "Iker", "Jimena", "Kevin", "Laura", "Manuel", "Nuria", "Oscar", "Patricia"
    ],
    startDate: "2025-02-10",
    endDate: "2025-02-11",
    champion: "Brenda",
    description: "Demuestra tu habilidad resolviendo algoritmos en tiempo récord.",
    type_tournament: "Concurso escolar"
  }),
  tournamentBase({
    id: 7,
    name: "Reto de Matemáticas",
    status: "Activo",
    participants: [
      "Esteban", "Gloria", "Ramiro", "Patricia", "Hugo",
      "Santiago", "Verónica", "Ulises", "Marina", "Renata", "Tomás", "Isabel", "Felipe", "Carmen", "Jorge"
    ],
    startDate: "2025-06-12",
    endDate: "2025-06-14",
    description: "Problemas matemáticos y acertijos para mentes brillantes.",
    type_tournament: "Concurso escolar"
  }),
  tournamentBase({
    id: 8,
    name: "Torneo Smash Bros",
    status: "Completado",
    participants: [
      "Mario", "Link", "Samus", "Kirby", "Fox",
      "Pikachu", "Donkey Kong", "Peach", "Zelda", "Falco", "Marth", "Roy", "Ike", "Lucina", "Greninja"
    ],
    startDate: "2025-01-20",
    endDate: "2025-01-21",
    champion: "Link",
    description: "Batalla todos contra todos en Super Smash Bros. Ultimate.",
    type_tournament: "Video Juegos"
  }),
  tournamentBase({
    id: 9,
    name: "Campeonato de Pintura",
    status: "Cancelado",
    participants: [
      "Pablo", "Frida", "Diego", "Remedios",
      "Leonora", "Rufino", "María", "David", "Carmen", "Joaquín", "Guadalupe", "Manuel", "Teresa", "Alfredo"
    ],
    startDate: "2025-05-20",
    endDate: "2025-05-21",
    description: "Concurso de arte donde se premia la creatividad y técnica.",
    type_tournament: "Arte",
    reason_cancelation: "Falta de inscripciones"
  }),
  tournamentBase({
    id: 10,
    name: "Liga Valorant",
    status: "Completado",
    participants: [
      "Phoenix", "Jett", "Sage", "Brimstone", "Raze",
      "Cypher", "Sova", "Killjoy", "Viper", "Omen", "Reyna", "Yoru", "Astra", "Neon", "Fade"
    ],
    startDate: "2025-04-10",
    endDate: "2025-04-25",
    champion: "Jett",
    description: "Combates 5v5 de Valorant organizados por niveles competitivos.",
    type_tournament: "Video Juegos"
  }),
  tournamentBase({
    id: 11,
    name: "Torneo Yu-Gi-Oh!",
    status: "Activo",
    participants: [
      "Kaiba", "Yugi", "Joey", "Mai", "Bakura",
      "Mokuba", "Ishizu", "Marik", "Rex", "Weevil", "Tea", "Tristan", "Duke", "Serenity", "Pegasus"
    ],
    startDate: "2025-06-05",
    endDate: "2025-06-10",
    description: "Duelos intensos con tus mejores cartas de Yu-Gi-Oh!",
    type_tournament: "Tcg"
  }),
  tournamentBase({
    id: 12,
    name: "Batalla de Dibujo",
    status: "Completado",
    participants: [
      "Leo", "Isa", "Nico", "Vero", "Santi",
      "Meli", "Tomi", "Gina", "Rafa", "Luz", "Dani", "Caro", "Fran", "Sofi", "Pau"
    ],
    startDate: "2025-02-28",
    endDate: "2025-03-01",
    champion: "Isa",
    description: "Reta tu imaginación en este torneo de ilustración rápida.",
    type_tournament: "Arte"
  }),
  tournamentBase({
    id: 13,
    name: "Hackathon Universitario",
    status: "Completado",
    participants: [
      "DevTeam1", "DevTeam2", "DevTeam3", "DevTeam4",
      "DevTeam5", "DevTeam6", "DevTeam7", "DevTeam8", "DevTeam9", "DevTeam10", "DevTeam11", "DevTeam12", "DevTeam13", "DevTeam14"
    ],
    startDate: "2025-03-15",
    endDate: "2025-03-16",
    champion: "DevTeam2",
    description: "Crea soluciones tecnológicas en 24 horas con tu equipo.",
    type_tournament: "Concurso escolar"
  }),
  tournamentBase({
    id: 14,
    name: "Torneo de Debate",
    status: "Cancelado",
    participants: [
      "Grupo A", "Grupo B", "Grupo C",
      "Grupo D", "Grupo E", "Grupo F", "Grupo G", "Grupo H", "Grupo I", "Grupo J", "Grupo K", "Grupo L", "Grupo M"
    ],
    startDate: "2025-04-10",
    endDate: "2025-04-12",
    description: "Competencia de ideas, argumentos y expresión oral.",
    type_tournament: "Concurso escolar",
    reason_cancelation: "No se consiguió jurado"
  }),
  tournamentBase({
    id: 15,
    name: "FIFA Ultimate Cup",
    status: "Completado",
    participants: [
      "Javi", "Erick", "Toño", "Memo", "Paco",
      "Luis", "Mario", "Carlos", "Pepe", "Juan", "Andrés", "Miguel", "Sergio", "Rafa", "Iván"
    ],
    startDate: "2025-03-10",
    endDate: "2025-03-11",
    champion: "Erick",
    description: "Campeonato de FIFA 24 en modo eliminación directa.",
    type_tournament: "Video Juegos"
  }),
  tournamentBase({
    id: 16,
    name: "Torneo de Mario Kart",
    status: "Activo",
    participants: [
      "Luigi", "Peach", "Toad", "Bowser", "Yoshi",
      "Mario", "Daisy", "Wario", "Waluigi", "Rosalina", "Donkey Kong", "Toadette", "Koopa", "Shy Guy", "Baby Mario"
    ],
    startDate: "2025-06-16",
    endDate: "2025-06-18",
    description: "¡Lánzate a la pista y esquiva caparazones en Mario Kart 8!",
    type_tournament: "Video Juegos"
  }),
  tournamentBase({
    id: 17,
    name: "Batalla de Rap",
    status: "Completado",
    participants: [
      "MC Flow", "MC Thunder", "MC Rima", "MC Beat",
      "MC Rayo", "MC Verso", "MC Rima2", "MC Sonido", "MC Rima3", "MC Voz", "MC Rima4", "MC Rima5", "MC Rima6", "MC Rima7"
    ],
    startDate: "2025-01-25",
    endDate: "2025-01-26",
    champion: "MC Flow",
    description: "Improvisación, rimas y flow en una batalla épica.",
    type_tournament: "Arte"
  }),
  tournamentBase({
    id: 18,
    name: "Just Dance Showdown",
    status: "Completado",
    participants: [
      "Rosa", "Beto", "Lola", "Cris", "Majo",
      "Tania", "Leo", "Vane", "Pablo", "Gaby", "Santi", "Dani", "Fer", "Isa", "Caro"
    ],
    startDate: "2025-02-05",
    endDate: "2025-02-06",
    champion: "Lola",
    description: "Sigue el ritmo y demuestra tus pasos en Just Dance.",
    type_tournament: "Video Juegos"
  }),
  tournamentBase({
    id: 19,
    name: "Carrera de Robots",
    status: "Activo",
    participants: [
      "Team Red", "Team Blue", "Team Green", "Team Yellow",
      "Team Black", "Team White", "Team Orange", "Team Purple", "Team Pink", "Team Brown", "Team Silver", "Team Gold", "Team Cyan", "Team Magenta"
    ],
    startDate: "2025-06-13",
    endDate: "2025-06-15",
    description: "Construye y programa tu robot para la carrera más veloz.",
    type_tournament: "Concurso escolar"
  }),
  tournamentBase({
    id: 20,
    name: "Concurso de Fotografía",
    status: "Completado",
    participants: [
      "Andrés", "Laura", "Kevin", "Sofía", "Raúl",
      "Marta", "Jorge", "Elena", "Pablo", "Lucía", "Carmen", "David", "Sara", "Iván", "Clara"
    ],
    startDate: "2025-03-20",
    endDate: "2025-03-21",
    champion: "Kevin",
    description: "Captura el momento perfecto y gana con tu mejor foto.",
    type_tournament: "Arte"
  }),
  tournamentBase({
    id: 21,
    name: "Torneo de Ping Pong",
    status: "Activo",
    participants: [
      "Miguel", "Sara", "Iván", "Clara", "Rubén",
      "Jorge", "Elena", "Pablo", "Lucía", "Carmen", "David", "Marta", "Raúl", "Sofía", "Kevin"
    ],
    startDate: "2025-06-20",
    endDate: "2025-06-22",
    description: "Demuestra tus reflejos en el torneo de tenis de mesa.",
    type_tournament: "Deporte"
  }),
  tournamentBase({
    id: 22,
    name: "Competencia de Cocina",
    status: "Completado",
    participants: [
      "Julia", "Tomás", "Valeria", "Pablo", "María",
      "Carlos", "Ana", "Luis", "Marta", "Javier", "Sonia", "Roberto", "Elisa", "Gabriel", "Natalia"
    ],
    startDate: "2025-02-15",
    endDate: "2025-02-16",
    champion: "Julia",
    description: "Prepara el platillo más delicioso y conquista al jurado.",
    type_tournament: "Concurso escolar"
  }),
  tournamentBase({
    id: 23,
    name: "Rally de Ciencias",
    status: "Activo",
    participants: [
      "Equipo Newton", "Equipo Curie", "Equipo Tesla", "Equipo Galileo",
      "Equipo Faraday", "Equipo Maxwell", "Equipo Fermi", "Equipo Planck", "Equipo Bohr", "Equipo Rutherford", "Equipo Pascal", "Equipo Euler", "Equipo Gauss", "Equipo Lavoisier"
    ],
    startDate: "2025-06-25",
    endDate: "2025-06-26",
    description: "Resuelve retos científicos en equipo y gana el rally.",
    type_tournament: "Concurso escolar"
  }),
  tournamentBase({
    id: 24,
    name: "Torneo de Poker",
    status: "Completado",
    participants: [
      "Carlos", "Andrea", "Felipe", "Raquel", "Sergio",
      "Mario", "Lucía", "Jorge", "Marina", "Oscar", "Sergio2", "Valeria", "Héctor", "Camila", "Esteban"
    ],
    startDate: "2025-03-05",
    endDate: "2025-03-06",
    champion: "Felipe",
    description: "Pon a prueba tu estrategia y suerte en el poker.",
    type_tournament: "Juego de Mesa"
  }),
  tournamentBase({
    id: 25,
    name: "Competencia de Baile",
    status: "Cancelado",
    participants: [
      "Grupo Salsa", "Grupo HipHop", "Grupo Jazz", "Grupo Contempo",
      "Grupo Tango", "Grupo Flamenco", "Grupo Break", "Grupo Ballet", "Grupo Swing", "Grupo Tap", "Grupo Reggaeton", "Grupo Folklorico", "Grupo Urbano", "Grupo Moderno"
    ],
    startDate: "2025-05-25",
    endDate: "2025-05-26",
    description: "Muestra tus mejores pasos en la pista de baile.",
    type_tournament: "Arte",
    reason_cancelation: "Problemas logísticos"
  })
];

export const sectionTitles = {
  incio: "Bienvenido",
  crear: "Crear un Nuevo Torneo",
  totales: "Torneos Totales",
  completados: "Torneos Completados",
  activos: "Torneos Activos",
  cancelados: "Torneos Cancelados",
  configuracion: "Configuración"
};

export const statusFilters = {
  totales: "totales",
  activos: "upcoming",
  cancelados: "canceled",
  completados: "completed",
};

export const navSections = [
  {
    items: [
      {
        icon: FcManager,
        name: "Inicio",
        section: "inicio",
      },
      {
        icon: FcPlus,
        name: "Crear Torneo",
        section: "crear",
      },
    ],
  },
  {
    items: [
      {
        icon: TfiCup,
        name: "Totales",
        section: "totales",
      },
      
      {
        icon: FcIdea,
        name: "Activos",
        section: "activos",
      },

      {
        icon: FcOk,
        name: "Completados",
        section: "completados",
      },
      
      {
        icon: FcCancel,
        name: "Cancelados",
        section: "cancelados",
      },
    ],
  },
  {
    items: [
      {
        icon: FcExport,
        name: "Cerrar Sesión",
        logout: true,
      }
    ],
  },
];
