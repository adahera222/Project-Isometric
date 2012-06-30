#pragma strict

public var x:int;
public var y:int;
public var z:int;

public var type:CubeType;

public static var kLayerMask:int = 1 << 8;

enum CubeType{
	None,
	Dirt,
	Grass,
	Water,
};

// Need to be called before CubeManager Initialize
function Awake () {
	SnapToGrid();
}

public static var GRID_SIZE_X:float = 10.0;
public static var GRID_SIZE_Y:float = 5.0;
public static var GRID_SIZE_Z:float = 10.0;

function SnapToGrid(){
	x = Mathf.Round(transform.position.x/GRID_SIZE_X);
	y = Mathf.Round(transform.position.y/GRID_SIZE_Y);	
	z = Mathf.Round(transform.position.z/GRID_SIZE_Z);	
}

function Update () {
	transform.position = Vector3(x * GRID_SIZE_X, y * GRID_SIZE_Y, z * GRID_SIZE_Z);
}

function SetXYZ(newx:int, newy:int, newz:int){
	x = newx;
	y = newy;
	z = newz;
}

function Hide(){
	renderer.enabled = false;
}

function Show(){
	renderer.enabled = true;
}