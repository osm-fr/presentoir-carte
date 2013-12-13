<?php
$image_type="png";

$titre_page="layers.openstreetmap.fr - Tuiles pour contrôle de données / Tile service with data checks";
$explain_link="http://wiki.openstreetmap.org/wiki/FR:Servers/layers.openstreetmap.fr";

?>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head> 
  <title><?=$titre_page?></title>
  <link rel="shortcut icon" href="/images/favicon.png"/>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
     <style type="text/css">
#map {
	left:0px;
        width: 100%;
        height: 100%;
        border: 0px;
        padding: 0px;
        position: absolute;
     }
body {
        border: 0px;
        margin: 0px;
        margin-bottom: 2px;

        padding: 0px;
        height: 100%;

        font-family: arial, helvetica;
     }	
form { display: inline; margin: 0; }
/* search block */
#search {
	position: absolute;
	top: 10px;
	left: 50px;
	z-index: 1008;
	font-size:12px;
	padding: 5px;
	border-radius: 10px; 
	background: white;
}
/* div#search:hover {
	position: absolute;
	top: 10px;
	left: 50px;
	z-index: 1008;
	font-size:12px;
	padding: 5px;
	border-radius: 10px; 
	background: white;
	height: 500px;
        -webkit-transition: all .2s ease-out;
        -moz-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out; 
} */
div#search li {
	text-decoration: underline;
	color: blue;
	cursor: pointer;
}
#search input { border: solid 1px #eee; }
/* END search block */
#permalinks {
	position: absolute;
	bottom: 10px;
	right: 0px;
	text-align: right;
	z-index: 1008;
	font-size:12px;
	padding: 0 5px;
}
#attributions {
	position: absolute;
	bottom: 10px;
	left: 10px;
	font-size:12px;
	text-align: right;
	z-index: 1008;
	white-space: nowrap;
	background: white;
	opacity: 0.5;
	padding: 5px;
	padding-top: 0px;
	width: 450px;
	border-radius: 10px; 
}

a:link, a:visited {
    color: blue;
    text-decoration: none;
}

li {
	    list-style-type: none;
	    display:table;
}
</style>
<script src="/libs/ol/OpenLayers.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="/libs/styles.js"></script>
<script type="text/javascript">
<!--

var map;
function qs_init() {
  var params = {};
  var qs = location.search.substring(1, location.search.length);

  qs = qs.replace(/\+/g, ' ');
  var args = qs.split('&'); // parse out name/value pairs separated via &

  for (var i = 0; i < args.length; i++) {
    var pair = args[i].split('=');
    var name = decodeURIComponent(pair[0]);

    var value = (pair.length==2)? decodeURIComponent(pair[1]): name;
    params[name] = value;
  }
  return params;
}

function init()
{
  var global_numZoomLevels = 20;

  var switcher = new OpenLayers.Control.LayerSwitcher();
  map = new OpenLayers.Map({
    div: "map",
    projection: new OpenLayers.Projection("EPSG:900913"),
    displayProjection: new OpenLayers.Projection("EPSG:4326"),
    eventListeners: { "moveend": mapMoved },
    controls: [
        new OpenLayers.Control.Attribution(),
        new OpenLayers.Control.Navigation({
            dragPanOptions: {
                enableKinetic: true
            }
        }),
        new OpenLayers.Control.MousePosition(),
        switcher,
        new OpenLayers.Control.PanZoomBar(),
        new OpenLayers.Control.Permalink("permalink")
    ],
    numZoomLevels: global_numZoomLevels,
  });

  map.getNumZoomLevels = function() {
    return global_numZoomLevels;
  };

//  var layerSwitcher = new OpenLayers.Control.LayerSwitcher();
  
//  map.addcontrol(layerSwitcher);
  switcher.maximizeControl();

  var permalink_potlatch = new OpenLayers.Control.Permalink("permalink.potlatch");
  permalink_potlatch.base = "http://www.openstreetmap.org/edit";
  map.addControl(permalink_potlatch); 

  var layers = [];

  /* Base layers inclusion */
  for ( var idx in all_available_styles ) {
    var local_numZoomLevels = global_numZoomLevels;
    if ("numZoomLevels" in all_available_styles[idx]) {
      local_numZoomLevels = all_available_styles[idx].numZoomLevels;
    }
    var l = new OpenLayers.Layer.XYZ(
        all_available_styles[idx].name,
        all_available_styles[idx].tile_urls,
        {
            attribution: all_available_styles[idx].attribution + ' | Données <a href="http://www.openstreetmap.org/copyright">&copy; les contributeurs OpenStreetMap</a>',
            sphericalMercator: true,
            wrapDateLine: true,
            transitionEffect: "resize",
            buffer: 0,
            numZoomLevels: local_numZoomLevels,
        }
    );

    layers.push(l);
  }

  /* Transparent overlays (must be png with alpha channel) */
  for ( var idx in all_available_overlays ) {
    var local_numZoomLevels = global_numZoomLevels;
    if ("numZoomLevels" in all_available_overlays[idx]) {
      local_numZoomLevels = all_available_overlays[idx].numZoomLevels;
    }
    var overlay = new OpenLayers.Layer.XYZ(
       all_available_overlays[idx].name,
       all_available_overlays[idx].tile_urls,
       {
           attribution: all_available_overlays[idx].attribution,
           sphericalMercator: true,
           wrapDateLine: true,
           /* not pretty with alpha transitionEffect: "resize", */
           buffer: 0,
           numZoomLevels: local_numZoomLevels,
           displayOutsideMaxExtent: false, 
           visibility: false,
           isBaseLayer: false, 
       }
     );
     layers.push(overlay);
  }

  map.addLayers(layers);


  var params = qs_init();
  if (! (params["q"] || params["lat"] || params["lon"] || params["zoom"])) {
    // Default coords are set to center view on France
    map.setCenter(new OpenLayers.LonLat(2.3508, 46.4).transform( new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject() ), 6);

    // Try to geolocalise the browser : 
    if (typeof navigator.geolocation !== 'undefined') {
      var gl = navigator.geolocation;
      gl.getCurrentPosition( function(position) {
          map.setCenter(new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude).transform( new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject() ), 12);
          }, null);
    }
  } else if (params["q"]) {
    refineSearch();
  }
}

/* The code below was shamelessly copied from nominatim's home */
function panToLatLonBoundingBox(lat,lon,minlat,maxlat,minlon,maxlon,points) {
	var proj_EPSG4326 = new OpenLayers.Projection("EPSG:4326");
	var proj_map = map.getProjectionObject();
	map.zoomToExtent(new OpenLayers.Bounds(minlon,minlat,maxlon,maxlat).transform(proj_EPSG4326, proj_map));
}

var lastRefine = null;
function refineSearch() {
  var q = $("input#q").val();
  $("#search_results").empty();

  $.get('http://nominatim.openstreetmap.org/search.php?email=nicolas@bouthors.org&format=json&countrycodes=fr&q='+q, function (data) { 
    if (data[0]) {
      // map.setCenter(new OpenLayers.LonLat(data[0].lon,data[0].lat).transform( new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject() ), 12); 
      $("#search_results").append('<ul class="search_results">');
      for (i in data) {
              whereIsThat = data[i].lat+', '+data[i].lon+', '+data[i].boundingbox[0]+', '+data[i].boundingbox[1]+', '+data[i].boundingbox[2]+', '+data[i].boundingbox[3];
	      $('#search_results').append( '<li '+( (i)?'':' selected')+'onclick="panToLatLonBoundingBox('+whereIsThat+')">'+data[i].display_name+'</li>' );
	      console.log(data[i]);
      }
      $("#search_results").append('</ul>');
      panToLatLonBoundingBox( data[0].lat, data[0].lon, data[0].boundingbox[0], data[0].boundingbox[1], data[0].boundingbox[2], data[0].boundingbox[3] );
      if(history.pushState)
        history.pushState({"id":101}, "", "?q="+q);
    } else {
      $("#search_results").append('<i>Aucun résultat</i>');
    }
    $("#search_results").append('<br/>Recherche limitée à la France. <a onclick="$(\'#search_results\').empty()" href="#">Masquer les résultats</a>');
  }, "json");
}
function mapMoved() {
	var proj = new OpenLayers.Projection("EPSG:4326");
	var bounds = map.getExtent();
	bounds = bounds.transform(map.getProjectionObject(), proj);
	$('input#viewbox').val = Math.floor(bounds.left,2)+','+Math.ceil(bounds.top,2)+','+Math.ceil(bounds.right,2)+','+Math.floor(bounds.bottom,2);
	console.log( Math.floor(bounds.left,2)+','+Math.ceil(bounds.top,2)+','+Math.ceil(bounds.right,2)+','+Math.floor(bounds.bottom,2) );
}
 // -->
 </script>

 </head>


<!-- Le contenu -->
<body onload="init()">
<div id="map"></div>

<div id="search">
<form method="get" onsubmit="return false;">
  <input type="text" id="q" value="<?php echo $_GET['q'] ?>" name="q" autocomplete="off" />
  <input type="hidden" name="viewbox" id="viewbox" />
  <input style="vertical-align: middle" onclick="refineSearch()" type="image" src="images/nominatim.gif" title="Search with Nominatim" />
  <input type="submit" style="display: none;" />
</form>
<div id="search_results"></div>
</div>

<div id="attributions">
<p>
	<a href="http://fondation.free.org/"><img src="http://fondation.free.org/images/logos/logo-hosted-redSmall.png" align=left></a>
	<br>
	Serveur et hébergement donné par la
	<a href="http://fondation.free.org/">Fondation&nbsp;d'Entreprise&nbsp;Free</a>
	<br>
	<a href="<?=$explain_link?>">A propos de ce service / What is this</a><br/>

	<?php
	print("Base mise à jour le ");
	$ts = exec("date +%s -d \"$(wget -qO - http://osm2pgsql-monde.openstreetmap.fr/~osm2pgsql/state.txt | grep timestamp= | cut -f2- -d=  | sed -e 's/\\\\//g' -e s/.$// | sed -e 's/T/ /')\"");
	setlocale(LC_TIME, "fr_FR.UTF8");
	print strftime("%A&nbsp;%e&nbsp;%B&nbsp;%Y&nbsp;%H:%M:%S&nbsp;UTC", $ts);
	if (is_file("./maintenance"))
	  print("<font color=\"red\">The server is currently in maintenance or experiencing problems</font>");
	?>
</p>
</div>

<div id="permalinks">
      <ul>
        <li><a id="permalink" href="">Permalink</a></li>
        <li><a id="permalink.potlatch" target="_blank" href="">Edit with Potlatch</a></li>
        <!-- FIXME later  <li><a id="permalink.josm" target="_blank" href="">Edit with JOSM</a></li> -->
      </ul>
</div>

<!-- Piwik --> 
<script type="text/javascript">
var pkBaseURL = (("https:" == document.location.protocol) ? "https://openstreetmap.fr/piwik/" : "http://openstreetmap.fr/piwik/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
</script><script type="text/javascript">
try {
var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 2);
piwikTracker.trackPageView();
piwikTracker.enableLinkTracking();
} catch( err ) {}
</script><noscript><p><img src="http://openstreetmap.fr/piwik/piwik.php?idsite=2" style="border:0" alt="" /></p></noscript>
<!-- End Piwik Tracking Code -->

</body>

</html>
