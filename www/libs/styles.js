// liste des styles disponibles
// Dans une vie postérieure, cette liste pourra être dynamiquement générée en interrogeant les serveurs de rendus et les styles dont ils disposent -- sly

var base_url = ['https://a.layers.openstreetmap.fr/',
    'https://b.layers.openstreetmap.fr/',
    'https://c.layers.openstreetmap.fr/'];

//base styles (not transparent)
var all_available_styles = [
    {
        id: 'osmfr',
        name: 'osmfr',
        tile_urls: ['https://a.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png', 'https://b.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png', 'https://c.tile.openstreetmap.fr/osmfr/${z}/${x}/${y}.png'],
        attribution: '&copy; Openstreetmap France',
        description: 'Tuiles "Fr"'
    },
    {
        id: 'default@osm.org',
        name: 'default@OSM.org',
        tile_urls: ['https://a.tile.openstreetmap.org/${z}/${x}/${y}.png', 'https://b.tile.openstreetmap.org/${z}/${x}/${y}.png', 'https://c.tile.openstreetmap.org/${z}/${x}/${y}.png'],
        attribution: 'Tuiles de fond <a href="https://www.openstreetmap.org/" target="_blank">OSM.org</a>',
        description: 'Tuiles mapnik officielles',
        numZoomLevels: 19
    },
    {
        id: 'hot',
        name: 'HOT-HDM (tile)',
        tile_urls: ['https://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png', 'https://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png', 'https://c.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; ybon',
        description: 'HOT Humanitarian Data Model map de Yohan Boniface (ybon)'
    },
    {
        id: 'bw',
        name: 'OSM - monochrome',
        tile_urls: 'https://www.toolserver.org/tiles/bw-mapnik//${z}/${x}/${y}.png',
        attribution: 'basemap data &copy; <a href="https://osm.org/copyright" target="_blank">OpenStreetMap</a>',
        description: 'OSM monochrome'
    },
    {
        id: 'bzh',
        name: 'bzh',
        tile_urls: ['https://a.tile.openstreetmap.fr/bzh/${z}/${x}/${y}.png', 'https://b.tile.openstreetmap.fr/bzh/${z}/${x}/${y}.png', 'https://c.tile.openstreetmap.fr/bzh/${z}/${x}/${y}.png'],
        attribution: '&copy; OpenStreetMap France',
        description: 'Tuiles "BZH"'
    },
    {
        id: 'oc',
        name: 'oc - occitan',
        tile_urls: ['https://tile.openstreetmap.bzh/oc/${z}/${x}/${y}.png'],
        attribution: '&copy; OpenStreetMap France',
        description: 'Tuiles "Occitan"'
    },
    {
        id: 'eu',
        name: 'eu - basque',
        tile_urls: ['https://tile.openstreetmap.bzh/eu/${z}/${x}/${y}.png'],
        attribution: '&copy; OpenStreetMap France',
        description: 'Tuiles "Basque"'
    },
    {
        id: 'osmfr-lz',
        name: 'osmfr-test/dev',
        tile_urls: ['//osm25.openstreetmap.fr/osmfr/${z}/${x}/${y}.png'],
        attribution: '&copy; Openstreetmap France',
        description: 'Tuiles "Fr" (test/dev)',
        numZoomLevels: 20
    },
    {
        id: 'openriverboatmap',
        name: 'openriverboatmap',
        tile_urls: ['https://a.tile.openstreetmap.fr/openriverboatmap/${z}/${x}/${y}.png', 'https://b.tile.openstreetmap.fr/openriverboatmap/${z}/${x}/${y}.png', 'https://c.tile.openstreetmap.fr/openriverboatmap/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; ybon',
        description: 'openriverboatmap de ybon'
    },
];

// overlays (transparent)
var all_available_overlays = [
    {
        id: 'noname',
        name: 'Voies sans nom',
        tile_urls: [base_url[0] + 'noname/${z}/${x}/${y}.png', base_url[1] + 'noname/${z}/${x}/${y}.png', base_url[2] + 'noname/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: 'Voies sans nom en surbrillance'
    },
    {
        id: 'nooneway',
        name: 'Pas de oneway',
        tile_urls: [base_url[0] + 'nooneway/${z}/${x}/${y}.png', base_url[1] + 'nooneway/${z}/${x}/${y}.png', base_url[2] + 'nooneway/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: 'Voies sans oneway en surbrillance'
    },
    {
        id: 'noref',
        name: 'Pas de ref',
        tile_urls: [base_url[0] + 'noref/${z}/${x}/${y}.png', base_url[1] + 'noref/${z}/${x}/${y}.png', base_url[2] + 'noref/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: 'Voies importantes sans ref en surbrillance'
    },
    {
        id: 'noref-notertiary',
        name: 'Pas de ref (sauf tertiary)',
        tile_urls: [base_url[0] + 'noref-notertiary/${z}/${x}/${y}.png', base_url[1] + 'noref-notertiary/${z}/${x}/${y}.png', base_url[2] + 'noref-notertiary/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'fixme',
        name: 'Fixme tags',
        tile_urls: [base_url[0] + 'fixme/${z}/${x}/${y}.png', base_url[1] + 'fixme/${z}/${x}/${y}.png', base_url[2] + 'fixme/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: 'Elements possédant un tag fixme en surbrillance'
    },
    {
        id: 'note',
        name: 'Note tags',
        tile_urls: [base_url[0] + 'note/${z}/${x}/${y}.png', base_url[1] + 'note/${z}/${x}/${y}.png', base_url[2] + 'note/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: 'Elements possédant un tag note en surbrillance'
    },
    {
        id: 'my_own',
        name: 'my_own',
        tile_urls: [base_url[0] + 'my_own/${z}/${x}/${y}.png', base_url[1] + 'my_own/${z}/${x}/${y}.png', base_url[2] + 'my_own/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: 'Attribut OSM (non documenté, expérimental) validate:my_own=yes',
    },
    {
        id: 'admin2',
        name: 'admin2 (Pays)',
        tile_urls: [base_url[0] + 'admin2/${z}/${x}/${y}.png', base_url[1] + 'admin2/${z}/${x}/${y}.png', base_url[2] + 'admin2/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin3',
        name: 'admin3',
        tile_urls: [base_url[0] + 'admin3/${z}/${x}/${y}.png', base_url[1] + 'admin3/${z}/${x}/${y}.png', base_url[2] + 'admin3/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin4',
        name: 'admin4 (Régions)',
        tile_urls: [base_url[0] + 'admin4/${z}/${x}/${y}.png', base_url[1] + 'admin4/${z}/${x}/${y}.png', base_url[2] + 'admin4/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin5',
        name: 'admin5',
        tile_urls: [base_url[0] + 'admin5/${z}/${x}/${y}.png', base_url[1] + 'admin5/${z}/${x}/${y}.png', base_url[2] + 'admin5/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin6',
        name: 'admin6 (Départements)',
        tile_urls: [base_url[0] + 'admin6/${z}/${x}/${y}.png', base_url[1] + 'admin6/${z}/${x}/${y}.png', base_url[2] + 'admin6/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin7 (Arondissements)',
        name: 'admin7',
        tile_urls: [base_url[0] + 'admin7/${z}/${x}/${y}.png', base_url[1] + 'admin7/${z}/${x}/${y}.png', base_url[2] + 'admin7/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin8',
        name: 'admin8 (Communes)',
        tile_urls: [base_url[0] + 'admin8/${z}/${x}/${y}.png', base_url[1] + 'admin8/${z}/${x}/${y}.png', base_url[2] + 'admin8/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin9',
        name: 'admin9',
        tile_urls: [base_url[0] + 'admin9/${z}/${x}/${y}.png', base_url[1] + 'admin9/${z}/${x}/${y}.png', base_url[2] + 'admin9/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin10',
        name: 'admin10 (Quartiers)',
        tile_urls: [base_url[0] + 'admin10/${z}/${x}/${y}.png', base_url[1] + 'admin10/${z}/${x}/${y}.png', base_url[2] + 'admin10/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'boundary_local_authority',
        name: 'boundary_local_authority',
        tile_urls: [base_url[0] + 'boundary_local_authority/${z}/${x}/${y}.png', base_url[1] + 'boundary_local_authority/${z}/${x}/${y}.png', base_url[2] + 'boundary_local_authority/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'boundary_political',
        name: 'boundary_political',
        tile_urls: [base_url[0] + 'boundary_political/${z}/${x}/${y}.png', base_url[1] + 'boundary_political/${z}/${x}/${y}.png', base_url[2] + 'boundary_political/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'boundary_cantons',
        name: 'Cantons &amp; Politique',
        tile_urls: [base_url[0] + 'boundary_cantons/${z}/${x}/${y}.png', base_url[1] + 'boundary_cantons/${z}/${x}/${y}.png', base_url[2] + 'boundary_cantons/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'boundary_election',
        name: 'boundary_election',
        tile_urls: [base_url[0] + 'boundary_election/${z}/${x}/${y}.png', base_url[1] + 'boundary_election/${z}/${x}/${y}.png', base_url[2] + 'boundary_election/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'admin_boundary',
        name: 'Ways with admin boundary',
        tile_urls: [base_url[0] + 'admin_boundary/${z}/${x}/${y}.png', base_url[1] + 'admin_boundary/${z}/${x}/${y}.png', base_url[2] + 'admin_boundary/${z}/${x}/${y}.png'],
        attribution: 'Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Sletuffe">sly</a>',
        description: '',
    },
    {
        id: 'bano',
        name: 'BANO - Couverture',
        tile_urls: [base_url[0] + 'bano/${z}/${x}/${y}.png', base_url[1] + 'bano/${z}/${x}/${y}.png', base_url[2] + 'bano/${z}/${x}/${y}.png'],
        attribution: '<a href="https://wiki.openstreetmap.org/wiki/WikiProject_France/WikiProject_Base_Adresses_Nationale_Ouverte_(BANO)">BANO</a> - Calque &copy; <a href="https://wiki.openstreetmap.org/wiki/User:Cquest">cquest</a>',
        description: '',
    },
    {
        id: 'Route500',
        name: 'IGN Route 500&reg; - routes',
        tile_urls: ['//a.tile.openstreetmap.fr/route500/${z}/${x}/${y}.png', '//b.tile.openstreetmap.fr/route500/${z}/${x}/${y}.png', '//c.tile.openstreetmap.fr/route500/${z}/${x}/${y}.png'],
        opacity: 0.7
    },
    {
        id: 'Route500hydro',
        name: 'BD Carthage (IGN/ONEMA)',
        tile_urls: ['//a.tile.openstreetmap.fr/route500hydro/${z}/${x}/${y}.png', '//b.tile.openstreetmap.fr/route500hydro/${z}/${x}/${y}.png', '//c.tile.openstreetmap.fr/route500hydro/${z}/${x}/${y}.png'],
        opacity: 0.7
    },
    {
        id: 'hillshade',
        name: 'Hillshade @ wikimedia',
        tile_urls: 'https://tiles.wmflabs.org/hillshading/${z}/${x}/${y}.png',
        opacity: 0.5,
        numZoomLevels: 16
    },
    {
        id: 'qa',
        name: 'qa - zones à mapper (zoom>=10)',
        description: 'Zones où le mapping est très partiel',
        tile_urls: ['//a.tile.openstreetmap.fr/qa/${z}/${x}/${y}.png', '//b.tile.openstreetmap.fr/qa/${z}/${x}/${y}.png', '//c.tile.openstreetmap.fr/qa/${z}/${x}/${y}.png'],
        attribution: '&copy; <a href="http://wiki.openstreetmap.org/wiki/FR:Servers/tile.openstreetmap.fr">OSM-FR/cquest</a>',
        opacity: 1.0,
        minZoomLevel: 10
    },
    {
        id: 'brocas',
        description: 'Images aériennes 2013 opération-libre à Brocas, Landes',
        name: 'brocas',
        tile_urls: 'http://wms.openstreetmap.fr/tms/1.0.0/brocas_2013/${z}/${x}/${y}.png',
        opacity: 0.5
    }
];
