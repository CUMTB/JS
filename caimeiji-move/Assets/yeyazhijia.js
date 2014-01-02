var yeyazhijia0:GameObject;
var yeyazhijia1:GameObject;
var yeyazhijia2:GameObject;
var TranslateSpeed=1;
function Update () {
yeyazhijia0=GameObject.Find("Cube0");
yeyazhijia1=GameObject.Find("Cube1");
yeyazhijia2=GameObject.Find("Cube2");
if(Input.GetKey(KeyCode.F)){
		yeyazhijia0.transform.Translate(Vector3.forward*Time.deltaTime*(-TranslateSpeed));
}else if(Input.GetKey(KeyCode.V)){
        yeyazhijia0.transform.Translate(Vector3.forward*Time.deltaTime*TranslateSpeed);
}else if(Input.GetKey(KeyCode.G)){
        yeyazhijia1.transform.Translate(Vector3.forward*Time.deltaTime*(-TranslateSpeed));
}else if(Input.GetKey(KeyCode.B)){
        yeyazhijia1.transform.Translate(Vector3.forward*Time.deltaTime*TranslateSpeed);
}else if(Input.GetKey(KeyCode.H)){
        yeyazhijia2.transform.Translate(Vector3.forward*Time.deltaTime*(-TranslateSpeed));
}else if(Input.GetKey(KeyCode.N)){
        yeyazhijia2.transform.Translate(Vector3.forward*Time.deltaTime*TranslateSpeed);
}
}