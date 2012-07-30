-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: instance21811.db.xeround.com.:14414
-- Tiempo de generación: 30-07-2012 a las 04:51:11
-- Versión del servidor: 5.1.42
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ilrt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meta`
--

CREATE TABLE IF NOT EXISTS `meta` (
  `type` varchar(20) COLLATE utf8_bin NOT NULL,
  `data` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`type`)
) ENGINE=Xeround DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `idTag` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`idTag`)
) ENGINE=Xeround DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`idTag`, `name`) VALUES
(6, 'Represión'),
(1, 'Manifestación'),
(2, 'Anonymous'),
(5, 'Fraude');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `idUser` int(5) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(30) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=Xeround DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
  `idVideo` varchar(15) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `publishDate` date NOT NULL,
  PRIMARY KEY (`idVideo`)
) ENGINE=Xeround DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `videos`
--

INSERT INTO `videos` (`idVideo`, `title`, `description`, `publishDate`) VALUES
('cDlOxgUssXg', 'Compra de votos del PRI Soriana', 'El 2 de julio de 2012 miles de personas acudieron a las tiendas Soriana a cambiar sus tarjetas monedero que el PRI les dio a cambio de su voto en la jornada electoral del primero de julio. De 1 a 5 tarjetas con montos de 100 a 600 pesos según su participación o su apoyo en la compra del voto. El IFE simplemente se niega a ver estos hechos delictivos.\nVisítanos en: Sitio: http://1001razonesantipri.com/ Twitter: @razones_antiPri Facebook: http://www.facebook.com/PRImenOrganizado Facebook: http://www.facebook.com/1001RazonesAntiPRI', '2012-07-03'),
('yQoVGFBsoR0', 'Grítalo, denúncialo Hay un Fraude que está operando ya.', 'IFE PORQUE TE QUEDAS CALLADO?, PORQUE NO ACTUAS? QUE PASA IFE CON ESTAS EVIDENCIAS YA HABRÌAS DESECHADO AL PRODUCTO CHATARRA', '2012-06-24'),
('CD8Wj1cA52c', 'El acarreo más grande del estado de Guanajuato', 'El estadio Sergio León Chávez fue testigo del acarreo, originado por la visita del temible Peña Nieto a la ciudad de Irapuato. Difúndelo, no dejemos que el PRI gobierne aprovechando la necesidad de la gente y siga vendiendo ilusiones porque no es capaz de ejecutar acciones favorables para la ciudadanía.', '2012-06-25'),
('dHezFksIM68', 'Cómo empezar una revolución - Documental', 'una historia sobre el poder de la gente para cambiar el mundo y sobre un hombre que durante más de 50 años ha ayudado a los pueblos a derrocar a sus dictadores. Su nombre es Gene Sharp y aunque él sea un desconocido en muchos lugares del mundo, sus 198 métodos para hacer una revolución han encendido la mecha en varios rincones del planeta. El poder de la resistencia no violenta\nDesde muy joven, su formación le llevó a querer transformar el mundo en un lugar mejor y a dejarlo en mejores condiciones que cuando lo encontró. Tenía muy claro que la mejor manera de luchar contra los regímenes autoritarios era hacerlo a través de la resistencia no violenta. Su sencillo manual "De la dictadura a la democracia", traducido a 30 idiomas, ha traspasado fronteras clandestinamente. Las últimas tecnologías lo han extendido como la pólvora y su idea de que existe una poderosa alternativa al conflicto violento ha prendido en revoluciones como la serbia, la ucraniana, la iraní o las más actuales de la "', '2012-01-31'),
('VqcZXvgrKBg', 'PRI compra de votos en casa de campaña de Nancy de la Sierra en Puebla :Denuncian', 'Ciudadanos denuncian :"Vecinos espontaneos salen a manifestarse en contra de la compra de voto por el PRI, En la casa de campaña de la candidata a diputada por el PRI, Nancy de la Sierra al sur de la ciudad de Puebla. El día de ayer y de hoy se veían largas filas de personas y en las colonias cercanas la gente llamaba a ir a recoger 500 pesos a cambio de la credencial de elector. Al enterarse un par de Señoras deciden manifestarse y al avanzar las horas (del 30 de junio) más gente se va uniendo hasta que por esta razón las filas se desintegran y la casa de campaña se cierra."', '2012-07-01'),
('97LDqYkwcgw', 'TELEVISION FRANCESA EXHIBE AL PRI COMPRANDO VOTOS DE GENTE POBRE', 'Televisión francesa exhibe al PRI comprando votos a gente pobre', '2012-06-29'),
('Bx4e9objtcE', 'LO QUE NO SE VIO HOY 2 DE JULIO EN LAS NOTICIAS... FUERA EL AUTORITARISMO', '"Yo estoy resuelto a luchar contra todo y contra todos sin más baluarte que la confianza y el apoyo de mi pueblo." Emiliano Zapata Pueblo escucha,, esta es tu lucha¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ "La ignorancia y el oscurantismo en todos los tiempos no han producido más que rebaños de esclavos para la tiranía." Emiliano Zapata LEVANTEMOS LA VOZ, BASTA DE SUMISIÓN¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡', '2012-07-03'),
('4wcd9bL8F8w', 'Quema de urnas mazatan', 'null', '2012-07-04'),
('AUAgW_hk0Qg', 'Señoras Priistas enojadas, defraudadas por el PRI en Azcapotzalco', 'Podría decir que estas señoras recibieron su merecido por haber apoyado y creer en un partido ignominioso, pero al escucharlas sólo siento un poco de lástima pues el PRI se aprovecha de su necesidad económica para ganar votos. Esto combinado con la manipulación informativa en los medios, la ignorancia y el fraude electoral (manipulación de los resultados) es lo que han hecho ganar a un candidato tan como Enrique Peña. Por eso es el sistema completo el que está mal. Qué mal que regresamos a las misma prácticas.', '2012-07-03'),
('z74yKLL1O_I', 'Anonymous Manual de la Primavera Mexicana I (ENGLISH,FRENCH SUBTITLES)', 'La función de la utopía no es alcanzarla, la función de la utopía es estar ahí, para que todos los días nos levantemos a buscarla... Eduardo Galeano Todos somos víctimas del mismo sistema, la lucha no es entre nosotros.\nLa policía, el ejército, la marina, todos somos víctimas del mismo sistema. Todos somos hermanos. Resistencia apartidista, resistencia pacífica. Documental completo "De la dictadura a la democracia": http://youtu.be/CEWqWuNJVtA Libro e-book (PDF): http://www.aeinstein.org/organizations/org/DelaDict.pdf OTROS RECURSOS:\nVersión para DVD, ISO (Compartirla con aquellos que no tienen internet):\nPARTE 1: http://dl.dropbox.com/u/89555462/AnoManPrimEx_01.part1.rar\nPARTE 2: http://dl.dropbox.com/u/89555462/AnoManPrimEx_01.part2.rar\nPARTE 3: http://dl.dropbox.com/u/89555462/AnoManPrimEx_01.part3.rar\nPARTE 4: http://dl.dropbox.com/u/89555462/AnoManPrimEx_01.part4.rar Descargar MP4: http://www.mediafire.com/file/6jxd798m1u8d9h4/Anon_Elecciones_2012_007.mp4 Subtítulos:\nInglés: http:', '2012-07-02'),
('7RzehWtTtwc', 'Fraude 2012 Enrique Peña Nieto y sus bots en twitter (Cyber acarreados) #TwitterGatePRI', 'Síguenos en Twitter: @_AntiEPN\n08/05/2012 sale a luz este video al parecer de antes del #debate2012 vean como EPN manipula al pueblo atravez de los medios corruptos y de las redes con cyber acarreados, Te parecia extraño como EPN llegaba a un lugar y se hacia TT ps ahi esta la respuesta. ¿Que mas necesita México para despertar? -\n-\n-\n- EPN Peña Nieto Acarrados Cyber-acarreados PRI Jovenes NoSomosBots\nMinutos antes del #Debate2012 - Operación PRI\nTWITTERGATE: Red de tuiteros operó para defender a Peña Nieto durante el debate', '2012-05-08'),
('NuyfjqKM06g', 'Trending Topic falsos de Josefina Vazquez Mota', 'La diputada Josefina Vazquez Mota nos enseña como crear un Trending Topic artificial en Twitter por medio de bots o cuentas automatizadas.', '2012-03-02'),
('qOl3NR0yaPw', 'Represión de Enrique Peña Nieto a alumna de la Facultad de A.mp4', 'Alumna de la Facultad de antropología fue expulsada de la Universidad Autonoma del Estado de México por expresar su inconformidad por las mujeres violadas y 2 jóvenes aesinados en San Salvador Atenco, Estado de México. Mientras en la UIA se respeta el derecho a expresarse, en las universidades públicas de gobiernos priístas, te puede costar la carrera. Los hechos ocurrieron el 18 de junio del 2007 en la Universidad Autonoma del Estado de México cuando EPN era gobernador del Edo de Mexico al parecer Andrea tuvo que cambiar de universidad para terminar la? carrera. El video lo postee solo con la intencion de hacer publico la manera de gobernar de este ignorante imaginate que llegara a ser presidente seria el fin para Mex. Saludos.', '2012-05-21'),
('Bv7KbEZkWtc', 'PRI comprando votos en el metro Constitución', 'http://www.selva-virtual.com/\n-\n-\n-\nPais mexico televisión miente unam uam politecnico miguel angel manceta paredes df estado de mexico distrito federal movimiento regeneracion nacional AMLO.SI anti enrique peña nieto la familia del barrio votar por andres manual humilde caridad aslo fraude electorar inongruencias amlo tercer grado joaquin lopez doriga carlos loret de mola ascarraga universal milenio el grafico la jornada el 5anto el 5antuario canal chanell amlo llora tlaltelolco plaza de las tres culturas 2 de octubre no se olvida golpean a manifestantes discurso yo soy 132 argentina San salvador aatenco delincuencia el blog del narco narcotraico estupidez tonta josefina ipads para todos mexican cierre de campaña elecciones 2012 operativo tepito pgr policia judicial estatal federal 27 junio 2012', '2012-06-30'),
('RB7SOtqaQCY', 'RESIDENCIA DE ELBA ESTHER EN SAN DIEGO', 'Protesta en la casa de Elbas Esther Gordillo en San DIego Calif.', '2008-03-29'),
('qGspEptrtjU', 'ROBO DE URNAS IFE 2012 JULIO 1 ORIGINAL', 'terminaba de salir de votar cuando se escucharon 3 disparos de un arma cuando derrpente volteo y se estrella una camioneta de color blanca siendo perseguida por 3 patrullas , nos mnadan los jefes de casilla a movernos aun lugar seguro y es cuando comienoz a grabar, resulta por lo que escucho es ke que estos 5 sujetos se habian robado unas casillas junto con otra camioneta en atizapan pero por casualidad llegaron a naucalpan en la corrteiiza, depues de que los oficales le spreguntan (minuto 2) donde estan las urnas se los llevna en una camionesta de la policia, ACLARO NO SE SABE DE QUE PARTIDO POLITICO FUERON LOS MONOS ESOS Mas info Pe-chan.org/b', '2012-07-01'),
('2EGCgejcO5A', 'Sacan a Observadora de #YoSoy132 por DENUNCIAR corrupcion en casilla por EPN', 'Policias del Estado de México (Cuautitlan Izcalli), impiden que la gente vote y sacan violentamente a observadora de #yosoy132', '2012-07-02'),
('9X3MmfM1Nfo', 'PEÑA NIETO ya GANO!!!!! las elecciones ilegalmente. Pruebas de FRAUDE Electoral 2012. Ruben Luengas', 'Existen decenas de pruebas en video y con testigos de practicas que violan las leyes de las instituciones como la FEPADE y el IFE. Rubén Luengas, un Periodista mexicano que es poseedor de un gran nivel cívico denuncia en su espacio informativo con cede en Estados Unidos, todas las incongruencias de la política y gobierno mexicano.', '2012-06-28'),
('CbYCRQIL9Jw', 'GOLPEADORES DEL NUEVO PRI DE ENRIQUE PEÑA NIETO ATACAN EN COLIMA A MANIFESTANTES PACIFICOS (full).', 'PEÑA NIETO NOS MIENTE El video desmiente lo que dicen los medios de lo que paso en Colima. Desmiente a Peña Nieto que ha lanzado videos acusando al estilo porfirista(así lo justificaba Don Porfirio) que eran los manifestantes los responsables de estos hechos.', '2012-05-21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos_tags`
--

CREATE TABLE IF NOT EXISTS `videos_tags` (
  `idVideo` varchar(15) COLLATE utf8_bin NOT NULL,
  `idTag` int(5) NOT NULL
) ENGINE=Xeround DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `videos_tags`
--

INSERT INTO `videos_tags` (`idVideo`, `idTag`) VALUES
('Bv7KbEZkWtc', 5),
('QqdLptYP43E', 5),
('CBXfHJVloAM', 5),
('cDlOxgUssXg', 5),
('RB7SOtqaQCY', 1),
('qGspEptrtjU', 5),
('qOl3NR0yaPw', 6),
('97LDqYkwcgw', 5),
('VqcZXvgrKBg', 6),
('AUAgW_hk0Qg', 5),
('7RzehWtTtwc', 5),
('z74yKLL1O_I', 2),
('CD8Wj1cA52c', 5),
('NuyfjqKM06g', 5),
('yQoVGFBsoR0', 5),
('9X3MmfM1Nfo', 5),
('CbYCRQIL9Jw', 6),
('Bx4e9objtcE', 1),
('4wcd9bL8F8w', 5),
('dHezFksIM68', 2),
('2EGCgejcO5A', 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
