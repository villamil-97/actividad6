const gruposChampions2009 = [
  { grupo: 'A', equipos: ['Chelsea', 'Porto', 'Atletico Madrid', 'APOEL'] },
  { grupo: 'B', equipos: ['Manchester United', 'Villarreal', 'Celtic', 'Aalborg'] },
  { grupo: 'C', equipos: ['Milan', 'Real Madrid', 'Marseille', 'FC Zurich'] },
  { grupo: 'D', equipos: ['Chelsea', 'Porto', 'Atletico Madrid', 'Apoel Nicosia'] },
  { grupo: 'E', equipos: ['Liverpool', 'Lyon', 'Fiorentina', 'Debrecen'] },
  { grupo: 'F', equipos: ['Barcelona', 'Internazionale', 'Rubin Kazan', 'Dynamo Kyiv'] },
  { grupo: 'G', equipos: ['Sevilla', 'Rangers', 'VfB Stuttgart', 'Unirea Urziceni'] },
  { grupo: 'H', equipos: ['Arsenal', 'AZ Alkmaar', 'Olympiacos', 'Standard Liège'] },
];

const equiposChampions2009 = [
    { nombre: 'Arsenal', pais: 'Inglaterra', id:'1' },
    { nombre: 'AZ Alkmaar', pais: 'Países Bajos', id:'2' },
    { nombre: 'APOEL Nicosia', pais: 'Chipre', id:'3' },
    { nombre: 'Aalborg BK', pais: 'Dinamarca', id:'4' },
    { nombre: 'AC Milan', pais: 'Italia', id:'5' },
    { nombre: 'Atletico Madrid', pais: 'España', id:'6' },
    { nombre: 'Barcelona', pais: 'España', id:'7' },
    { nombre: 'Bayern Munich', pais: 'Alemania', id:'8' },
    { nombre: 'Besiktas', pais: 'Turquía', id:'9' },
    { nombre: 'Bordeaux', pais: 'Francia', id:'10' },
    { nombre: 'Chelsea', pais: 'Inglaterra', id:'11' },
    { nombre: 'CSKA Moscow', pais: 'Rusia' , id:'12'},
    { nombre: 'Debreceni VSC', pais: 'Hungría', id:'13' },
    { nombre: 'Dynamo Kyiv', pais: 'Ucrania', id:'14' },
    { nombre: 'Fiorentina', pais: 'Italia', id:'15' },
    { nombre: 'Girondins Bordeaux', pais: 'Francia', id:'16' },
    { nombre: 'Juventus', pais: 'Italia', id:'17' },
    { nombre: 'Liverpool', pais: 'Inglaterra', id:'18' },
    { nombre: 'Lyon', pais: 'Francia', id:'19' },
    { nombre: 'Manchester United', pais: 'Inglaterra', id:'20' },
    { nombre: 'Maccabi Haifa', pais: 'Israel', id:'21' },
    { nombre: 'Manchester United', pais: 'Inglaterra', id:'22' },
    { nombre: 'Marseille', pais: 'Francia', id:'23' },
    { nombre: 'Olympiacos', pais: 'Grecia', id:'24' },
    { nombre: 'Porto', pais: 'Portugal', id:'25' },
    { nombre: 'Real Madrid', pais: 'España', id:'26' },
    { nombre: 'Rubin Kazan', pais: 'Rusia', id:'27' },
    { nombre: 'Rangers', pais: 'Escocia', id:'28' },
    { nombre: 'Sevilla', pais: 'España', id:'29' },
    { nombre: 'Standard Liege', pais: 'Bélgica', id:'30' },
    { nombre: 'Unirea Urziceni', pais: 'Rumanía', id:'31' },
    { nombre: 'VfL Wolfsburg', pais: 'Alemania', id:'32' },
    { nombre: 'VfB Stuttgart', pais: 'Alemania', id:'33' },
    { nombre: 'Zurich', pais: 'Suiza', id:'34' }
  ];

  
function obtenerGruposChampions2009(req, res) {
  res.json(gruposChampions2009);
}
function obtenerEquiposChampions2009(req, res) {
  res.json(equiposChampions2009);
}
function actualizarEquipo(req, res) {
  const { id } = req.params;
  const { nombre, pais } = req.body;

  // Buscar el equipo por su ID en la lista de equipos
  const equipo = equiposChampions2009.find(equipo => equipo.id === id);
  if (!equipo) {
    return res.status(404).json({ error: 'Equipo no encontrado' });
  }

  // Actualizar los datos del equipo si se proporcionan
  if (nombre) {
    equipo.nombre = nombre;
  }
  if (pais) {
    equipo.pais = pais;
  }

  // Devolver el equipo actualizado como respuesta
  res.json(equipo);
}
function crearEquipo(req, res) {
  const { nombre, pais } = req.body;

  // Validar los datos recibidos
  if (!nombre || !pais) {
    return res.status(400).json({ error: 'Se requiere nombre y país para crear un equipo' });
  }

  // Crear un nuevo equipo
  const nuevoEquipo = {
    id: equiposChampions2009.length + 1, // Generar un nuevo ID
    nombre,
    pais
  };

  // Agregar el nuevo equipo a la lista de equipos
  equiposChampions2009.push(nuevoEquipo);

  // Devolver el nuevo equipo como respuesta
  res.status(201).json(nuevoEquipo);
}

function eliminarEquipo(req, res) {
  const { id } = req.params;

  // Buscar el índice del equipo en la lista de equipos
  const index = equiposChampions2009.findIndex(equipo => equipo.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Equipo no encontrado' });
  }

  // Eliminar el equipo de la lista de equipos
  equiposChampions2009.splice(index, 1);

  // Devolver una respuesta exitosa
  res.status(204).send();
}

module.exports = {
  obtenerGruposChampions2009,
  obtenerEquiposChampions2009,
  actualizarEquipo,
  crearEquipo,
  eliminarEquipo
};