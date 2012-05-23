////////////////////////////////////////////////////////////////////////////// SETUP
var GLGE_doc = new GLGE.Document();

GLGE_doc.load("./glge/scene_arena.xml");

var GLGE_renderer = new GLGE.Renderer(canvas);
var GLGE_scene = new GLGE.Scene();
var GLGE_camera = GLGE_scene.camera;

var Arena; 
var GLGE_Tiles = new Array;
var GLGE_Player;
var GLGE_Bots = new Array;
var GLGE_BombotSpawn = new Array;
var GLGE_BombotBlast = new Array;

var GLGE_HasLoaded = false;
////////////////////////////////////////////////////////////////////////////// LOAD
GLGE_doc.onLoad = function() {
		
}
function GLGE_LoadScene(){	
	GLGE_scene = GLGE_doc.getElement("mainscene");
	GLGE_camera = GLGE_doc.getElement("maincamera");
	GLGE_scene.setBackgroundColor('#000');
	GLGE_renderer.setScene(GLGE_scene);

}
///////////////////////////////////////////////////////////////////////////// RENDER
function GLGE_Loop(){	
	if(Modernizr.webgl)
	GLGE_renderer.render();	
}
///////////////////////////////////////////////////////////////////////////// UPDATE
var lol = 0;
function GLGE_Update(){	
	if(Modernizr.webgl){
	        GLGE_UpdateCamera();
	
	}
}