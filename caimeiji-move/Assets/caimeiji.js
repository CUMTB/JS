var caimeiji:GameObject;
function Update () {
	caimeiji=GameObject.Find("Cube");

	if(Input.GetKey(KeyCode.D)){
		print("Turn Left");
		caimeiji.transform.Translate(Vector3.right*0.1);
	}else if(Input.GetKey(KeyCode.A)){
		print("Turn Right");
		caimeiji.transform.Translate(-Vector3.right*0.1);
	}else if(Input.GetKey(KeyCode.S)){
		print("Go back");
	}else if(Input.GetKey(KeyCode.W)){
		print("Go");
}
}