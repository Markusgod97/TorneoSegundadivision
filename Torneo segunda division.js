/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Torneo Segunda Division');
// jugadores
{
"-id":ObjectId("Jugador"),
"nombre": "Diego Perea",
"_id": ObjectId ("Jugador"),
"nombre": "Diego Perea",
"fecha_nacimiento": ISODate("1995-05-10T00:00:00Z"),
"nacionalidad": "colombiano",
"categoria": "Torneo Segunda división",
"equipo_id": ObjectId("Cúcuta deportivo"),  // Relación con la colección de Equipos
"posicion": "Delantero",  // Dependiendo del deporte
"activo": true,  // Indica si el deportista está activo en el torneo
"estado_salud": "Apto",  // Información de estado de salud
"partidos_jugados": [
  ObjectId("A001"),  // ID de partidos en los que ha participado
  ObjectId("A002")
]
}

// Coleccion entrenadores

{
    "_id": ObjectId("..."),
    "nombre": "Luis Pinto",
    "equipo_id": ObjectId("..."),  // Relación con la colección de Equipos
    "experiencia": " 25 años en torneos internacionales",
    "licencia": "EO22554",
    "contacto": {
      "email": "luis.pinto@dimayor.com",
      "telefono": "+57 3025642565"
    }
}

// Coleccion Arbitros 
  
{
    "_id": ObjectId("..."),
    "nombre": " Juan Carrasco ",
    "licencia": "AR56789",
    "experiencia": "5 años dirigiendo partidos de alto nivel",
    "contacto": {
      "email": "Juan.Carrasco@example.com",
      "telefono": "+58 123541"
    }
  },

//Coleccion equipos
{
  "_id": ObjectId(" Equipos"),
  "nombre": "Categorias B",
  "categoria": "Segunda",
  "entrenador_id": ObjectId(" Juan Ortega "),  // Relación con el entrenador
  "deportistas": [
    ObjectId("J001"),  // IDs de los deportistas que pertenecen al equipo
    ObjectId("J002")
  ],
  "puntos": 0,  // Puntos acumulados en el torneo
  "victorias": 0,  // Número de victorias
  "empates": 0,  // Número de empates
  "derrotas": 0  // Número de derrotas
}

//Coleccion encuentros deportivos

{
    "_id": ObjectId("..."),
    "fecha": ISODate("2024-11-15T20:00:00Z"),
    "equipo_1": ObjectId("..."),  // ID del primer equipo
    "equipo_2": ObjectId("..."),  // ID del segundo equipo
    "estadio": "Estadio Nacional",
    "arbitro_id": ObjectId("..."),  // ID del árbitro que dirige el partido
    "resultado": {
      "equipo_1": {
        "goles": 2,
        "tarjetas_amarillas": 1,
        "tarjetas_rojas": 0
      }
      "equipo_2": {
        "goles": 1,
        "tarjetas_amarillas": 2,
        "tarjetas_rojas": 0
      }
    }
    "estado": "Finalizado",  // Puede ser "Programado", "En curso", "Finalizado"
    "comentarios": "Buen desempeño del equipo local"
  }
  
  // Coleccion Resultados
  {
    "_id": ObjectId("..."),
    "encuentro_id": ObjectId("..."),  // Relación con la colección Encuentros
    "deportista_id": ObjectId("..."),  // Relación con la colección Deportistas
    "goles": 1,
    "asistencias": 0,
    "tarjetas_amarillas": 1,
    "tarjetas_rojas": 0,
    "estado": "Activo"
  }
  
  //Resultados de los equipos
  {
    "_id": ObjectId("..."),
    "categoria": "Segunda Division",
    "fecha": ISODate("2024-11-15T00:00:00Z"),  // Fecha de actualización
    "equipos": [
      {
        "equipo_id": ObjectId("Cucuta deportivo"),  // Relación con la colección Equipos
        "puntos": 9,
        "victorias": 3,
        "empates": 0,
        "derrotas": 1,
        "goles_favor": 10,
        "goles_contra": 5,
        "diferencia_goles": 5
      }
      {
        "equipo_id": ObjectId("Union madaglena"),
        "puntos": 6,
        "victorias": 2,
        "empates": 0,
        "derrotas": 2,
        "goles_favor": 8,
        "goles_contra": 7,
        "diferencia_goles": 1
      }
    ]
  }
  
  // estadisticas del torneo
  {
    "_id": ObjectId("Estadísticas torneo"),
    "fecha_actualizacion": ISODate("2024-11-15T00:00:00Z"),
    "total_goles": 150,
    "total_partidos": 50,
    "jugadores_inscritos": 120,
    "partidos_en_curso": 5
  }
  