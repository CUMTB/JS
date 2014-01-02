private var objzuoguntong:GameObject;
private var objyouguntong:GameObject;
private var speed:int=10000; 
function Start () {
	objzuoguntong=GameObject.Find("zuoguntong");
	objyouguntong=GameObject.Find("youguntong");
}
function Update ()
{

	if(Input.GetKey(KeyCode.Z))
	{
		objzuoguntong.transform.Rotate (Vector3.up*Time.deltaTime*speed);
	}
	else if(Input.GetKey(KeyCode.C))
	{
	    objyouguntong.transform.Rotate (Vector3.up*Time.deltaTime*speed);
	}
}
