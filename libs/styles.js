// liste des styles disponibles
// Dans une vie postérieure, cette liste pourra être dynamiquement générée en interrogeant les serveurs de rendus et les styles dont ils disposent -- sly

var base_url = [ 'http://a.layers.openstreetmap.fr/',
                 'http://b.layers.openstreetmap.fr/',
                 'http://c.layers.openstreetmap.fr/' ];

//base styles (not transparent)
var all_available_styles = [
  {
    id: 'osmfr',
    name: 'osmfr',
    tile_urls: [ 'http://a.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png', 'http://b.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png', 'http://c.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png' ],
    attribution: '&copy; Openstreetmap France',
    description: 'Tuiles "Fr"'
  },  
  {
    id: 'default@osm.org',
    name: 'default@OSM.org', 
    tile_urls: [ 'http://a.tile.openstreetmap.org/${z}/${x}/${y}.png', 'http://b.tile.openstreetmap.org/${z}/${x}/${y}.png', 'http://c.tile.openstreetmap.org/${z}/${x}/${y}.png' ],
    attribution: 'Tuiles de fond <a href="http://www.openstreetmap.org/" target="_blank">OSM.org</a>',
    description: 'Tuiles mapnik officielles',
    numZoomLevels: 19
  },
  {
    id: 'mapquest',
    name: 'OpenMapquest', 
    tile_urls: [ 'http://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png', 'http://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png', 'http://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png' ],
    attribution: 'Tuiles de fond <a href="http://www.mapquest.com/" target="_blank">&copy; MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png"></div>',
    description: 'Tuiles OpenMapQuest',
    numZoomLevels: 19
  },
/*  {
    id: 'white',
    name: 'Fond blanc', 
    tile_urls: [ base_url[0] + 'images/blanc.png' ],
    attribution: 'Fond blanc',
    description: 'Fond blanc pour mieux lire les overlays'
  },
*/
  {
    id: 'hot',
    name: 'HOT-HDM (tile)',
    tile_urls: [ 'http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png', 'http://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png', 'http://c.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; ybon',
    description: 'HOT-HDM de ybon'
  },
  {
    id: 'bw',
    name: 'OSM - monochrome', 
    tile_urls: 'http://www.toolserver.org/tiles/bw-mapnik//${z}/${x}/${y}.png',
    attribution: 'basemap data &copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a>',
    description: 'OSM monochrome'
  }
];

// overlays (transparent)
var all_available_overlays = [
  {
    id: 'noname',
    name: 'Voies sans nom', 
    tile_urls: [ base_url[0] + 'noname/${z}/${x}/${y}.png', base_url[1] + 'noname/${z}/${x}/${y}.png', base_url[2] + 'noname/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Voies sans nom en surbrillance'
  },
  {
    id: 'nooneway',
    name: 'Pas de oneway', 
    tile_urls: [ base_url[0] + 'nooneway/${z}/${x}/${y}.png', base_url[1] + 'nooneway/${z}/${x}/${y}.png', base_url[2] + 'nooneway/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Voies sans oneway en surbrillance'
  },
  {
    id: 'noref',
    name: 'Pas de ref', 
    tile_urls: [ base_url[0] + 'noref/${z}/${x}/${y}.png', base_url[1] + 'noref/${z}/${x}/${y}.png', base_url[2] + 'noref/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Voies importantes sans ref en surbrillance'
  },
  {
    id: 'noref-notertiary',
    name:'Pas de ref (sauf tertiary)',
    tile_urls: [ base_url[0] + 'noref-notertiary/${z}/${x}/${y}.png', base_url[1] + 'noref-notertiary/${z}/${x}/${y}.png', base_url[2] + 'noref-notertiary/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'fixme',
    name: 'Fixme tags', 
    tile_urls: [ base_url[0] + 'fixme/${z}/${x}/${y}.png', base_url[1] + 'fixme/${z}/${x}/${y}.png', base_url[2] + 'fixme/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Elements possédant un tag fixme en surbrillance'
  },
  {
    id: 'note',
    name: 'Note tags', 
    tile_urls: [ base_url[0] + 'note/${z}/${x}/${y}.png', base_url[1] + 'note/${z}/${x}/${y}.png', base_url[2] + 'note/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Elements possédant un tag note en surbrillance'
  },
  {
    id: 'my_own',
    name:'my_own',
    tile_urls: [ base_url[0] + 'my_own/${z}/${x}/${y}.png', base_url[1] + 'my_own/${z}/${x}/${y}.png', base_url[2] + 'my_own/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin2',
    name:'admin2 (Pays)',
    tile_urls: [ base_url[0] + 'admin2/${z}/${x}/${y}.png', base_url[1] + 'admin2/${z}/${x}/${y}.png', base_url[2] + 'admin2/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin3',
    name:'admin3',
    tile_urls: [ base_url[0] + 'admin3/${z}/${x}/${y}.png', base_url[1] + 'admin3/${z}/${x}/${y}.png', base_url[2] + 'admin3/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin4',
    name:'admin4 (Régions)',
    tile_urls: [ base_url[0] + 'admin4/${z}/${x}/${y}.png', base_url[1] + 'admin4/${z}/${x}/${y}.png', base_url[2] + 'admin4/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin5',
    name:'admin5',
    tile_urls: [ base_url[0] + 'admin5/${z}/${x}/${y}.png', base_url[1] + 'admin5/${z}/${x}/${y}.png', base_url[2] + 'admin5/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin6',
    name:'admin6 (Départements)',
    tile_urls: [ base_url[0] + 'admin6/${z}/${x}/${y}.png', base_url[1] + 'admin6/${z}/${x}/${y}.png', base_url[2] + 'admin6/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin7 (Arondissements)',
    name:'admin7',
    tile_urls: [ base_url[0] + 'admin7/${z}/${x}/${y}.png', base_url[1] + 'admin7/${z}/${x}/${y}.png', base_url[2] + 'admin7/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin8',
    name:'admin8 (Communes)',
    tile_urls: [ base_url[0] + 'admin8/${z}/${x}/${y}.png', base_url[1] + 'admin8/${z}/${x}/${y}.png', base_url[2] + 'admin8/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin9',
    name:'admin9',
    tile_urls: [ base_url[0] + 'admin9/${z}/${x}/${y}.png', base_url[1] + 'admin9/${z}/${x}/${y}.png', base_url[2] + 'admin9/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin10',
    name:'admin10 (Quartiers)',
    tile_urls: [ base_url[0] + 'admin10/${z}/${x}/${y}.png', base_url[1] + 'admin10/${z}/${x}/${y}.png', base_url[2] + 'admin10/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_local_authority',
    name:'boundary_local_authority',
    tile_urls: [ base_url[0] + 'boundary_local_authority/${z}/${x}/${y}.png', base_url[1] + 'boundary_local_authority/${z}/${x}/${y}.png', base_url[2] + 'boundary_local_authority/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_political',
    name:'boundary_political',
    tile_urls: [ base_url[0] + 'boundary_political/${z}/${x}/${y}.png', base_url[1] + 'boundary_political/${z}/${x}/${y}.png', base_url[2] + 'boundary_political/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_cantons',
    name:'Cantons &amp; Politique',
    tile_urls: [ base_url[0] + 'boundary_cantons/${z}/${x}/${y}.png', base_url[1] + 'boundary_cantons/${z}/${x}/${y}.png', base_url[2] + 'boundary_cantons/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_election',
    name:'boundary_election',
    tile_urls: [ base_url[0] + 'boundary_election/${z}/${x}/${y}.png', base_url[1] + 'boundary_election/${z}/${x}/${y}.png', base_url[2] + 'boundary_election/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin_boundary',
    name:'Ways with admin boundary',
    tile_urls: [ base_url[0] + 'admin_boundary/${z}/${x}/${y}.png', base_url[1] + 'admin_boundary/${z}/${x}/${y}.png', base_url[2] + 'admin_boundary/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'bano',
    name:'BANO - Couverture',
    tile_urls: [ base_url[0] + 'bano/${z}/${x}/${y}.png', base_url[1] + 'bano/${z}/${x}/${y}.png', base_url[2] + 'bano/${z}/${x}/${y}.png' ],
    attribution: '<a href="https://wiki.openstreetmap.org/wiki/WikiProject_France/WikiProject_Base_Adresses_Nationale_Ouverte_(BANO)">BANO</a> - Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Cquest">cquest</a>',
    description: '',
  }

];
