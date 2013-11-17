// liste des styles disponibles
// posait problème avec le cache, et puis long à charger pour rien
// puis le titre était pas librement modifiable, ni l'ordre
//, je peux bien faire l'effort de générer ça à chaque rare changement !

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
  {
    id: 'white',
    name: 'Fond blanc', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/images/blanc.png' ],
    attribution: 'Fond blanc',
    description: 'Fond blanc pour mieux lire les overlays'
  },
  {
    id: 'openriverboatmap',
    name: 'openriverboatmap', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/openriverboatmap/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/openriverboatmap/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/openriverboatmap/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; ybon',
    description: 'openriverboatmap de ybon'
  }
];

// overlays (transparent)
var all_available_overlays = [
  {
    id: 'noname',
    name: 'Voies sans nom', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/noname/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/noname/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/noname/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Voies sans nom en surbrillance'
  },
  {
    id: 'nooneway',
    name: 'Pas de oneway', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/nooneway/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/nooneway/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/nooneway/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Voies sans oneway en surbrillance'
  },
  {
    id: 'noref',
    name: 'Pas de ref', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/noref/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/noref/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/noref/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Voies importantes sans ref en surbrillance'
  },
  {
    id: 'noref-notertiary',
    name:'Pas de ref (sauf tertiary)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/noref-notertiary/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/noref-notertiary/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/noref-notertiary/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'fixme',
    name: 'Fixme tags', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/fixme/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/fixme/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/fixme/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Elements possédant un tag fixme en surbrillance'
  },
  {
    id: 'note',
    name: 'Note tags', 
    tile_urls: [ 'http://a.layers.openstreetmap.fr/note/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/note/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/note/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: 'Elements possédant un tag note en surbrillance'
  },
  {
    id: 'my_own',
    name:'my_own',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/my_own/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/my_own/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/my_own/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin2',
    name:'admin2 (Pays)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin2/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin2/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin2/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin4',
    name:'admin4 (Régions)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin4/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin4/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin4/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin5',
    name:'admin5',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin5/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin5/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin5/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin6',
    name:'admin6 (Départements)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin6/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin6/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin6/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin7 (Arondissements)',
    name:'admin7',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin7/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin7/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin7/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin8',
    name:'admin8 (Communes)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin8/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin8/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin8/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin9',
    name:'admin9',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin9/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin9/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin9/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin10',
    name:'admin10 (Quartiers)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin10/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin10/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin10/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_local_authority',
    name:'boundary_local_authority',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/boundary_local_authority/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/boundary_local_authority/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/boundary_local_authority/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_political',
    name:'boundary_political',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/boundary_political/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/boundary_political/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/boundary_political/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_cantons',
    name:'Cantons &amp; Politique',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/boundary_cantons/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/boundary_cantons/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/boundary_cantons/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'boundary_election',
    name:'boundary_election',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/boundary_election/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/boundary_election/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/boundary_election/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'voirie-cadastre',
    name:'Voirie/Cadastre (rouge=manque)',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/voirie-cadastre/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/voirie-cadastre/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/voirie-cadastre/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  },
  {
    id: 'admin_boundary',
    name:'Ways with admin boundary',
    tile_urls: [ 'http://a.layers.openstreetmap.fr/admin_boundary/${z}/${x}/${y}.png', 'http://b.layers.openstreetmap.fr/admin_boundary/${z}/${x}/${y}.png', 'http://c.layers.openstreetmap.fr/admin_boundary/${z}/${x}/${y}.png' ],
    attribution: 'Calque &copy; <a href="http://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
    description: '',
  }
];
