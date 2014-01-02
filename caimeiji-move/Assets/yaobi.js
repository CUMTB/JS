private var objzuoyaobi:GameObject;
private var objyouyaobi:GameObject;
private var speed:int=10;
function Start () {
    objzuoyaobi=GameObject.Find("zuoyaobi");
	objyouyaobi=GameObject.Find("youyaobi");
}
function Update ()
{

	if(Input.GetKey(KeyCode.S))
	{
		objzuoyaobi.transform.Rotate (Vector3.up*Time.deltaTime*speed);
	}
	else if(Input.GetKey(KeyCode.W))
	{
	    objzuoyaobi.transform.Rotate (-Vector3.up*Time.deltaTime*speed);
	}
	else if(Input.GetKey(KeyCode.O))
	{
	    objyouyaobi.transform.Rotate (Vector3.up*Time.deltaTime*speed);
	}
	else if(Input.GetKey(KeyCode.L))
	{
	    objyouyaobi.transform.Rotate (-Vector3.up*Time.deltaTime*speed);
	}
}