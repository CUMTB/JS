##键盘控制采煤机运动

1 采煤机的运动分为采煤机整体的运动和局部运动，局部运动包括摇臂的运动和滚筒的运动，要顺利实现这些运动就要设定好他们的父子关系，父子关系首先是机架，然后是摇臂，最后是滚筒。重新创建一个立方体，将采煤机设定为他的子关系。

2 首先，在Unity3D中导入的文件为FBX格式，导入模型之前要确定模型在3Dmax中已经设定好自己的坐标系，根据自己，编写脚本，脚本编写后直接拖入模型即可，将软件切换到动画模式即可。

3 模型的运动分为位移和旋转，程序如下：


键盘A和D键控制采煤机整机运动：

	var caimeiji:GameObject;
	
	function Update ()
	 {
		caimeiji=GameObject.Find("Cube");

		if(Input.GetKey(KeyCode.D))	 //D键控制移动
		{
			print("Turn Left");
			caimeiji.transform.Translate(Vector3.right*0.1);
		}
		else if(Input.GetKey(KeyCode.A))	//A键控制相反移动
		{
			print("Turn Right");
			caimeiji.transform.Translate(-Vector3.right*0.1);
		}
		else if(Input.GetKey(KeyCode.S))
		{
			print("Go back");
		}
		else if(Input.GetKey(KeyCode.W))
		{
			print("Go");
		}
	}


键盘S、W、O、L控制摇臂转动：

	private var objzuoyaobi:GameObject;
	private var objyouyaobi:GameObject;
	private var speed:int=10;
	
	function Start () 
	{
    	objzuoyaobi=GameObject.Find("zuoyaobi");
		objyouyaobi=GameObject.Find("youyaobi");
	}

	function Update ()
	{
		if(Input.GetKey(KeyCode.S)) //S键控制左摇臂转动
		{
			objzuoyaobi.transform.Rotate (Vector3.up*Time.deltaTime*speed);
		}
		else if(Input.GetKey(KeyCode.W)) //W键控制左摇臂转动
		{
		    objzuoyaobi.transform.Rotate (-Vector3.up*Time.deltaTime*speed);
		}
		else if(Input.GetKey(KeyCode.O))	//O键控制右摇臂转动
		{
		    objyouyaobi.transform.Rotate (Vector3.up*Time.deltaTime*speed);
		}
		else if(Input.GetKey(KeyCode.L))	//L键控制右摇臂转动
		{
		    objyouyaobi.transform.Rotate (-Vector3.up*Time.deltaTime*speed);
		}
	}

键盘Z、C键控制滚筒转动：

	private var objzuoguntong:GameObject;
	private var objyouguntong:GameObject;
	private var speed:int=10000; 

	function Start ()
	{
		objzuoguntong=GameObject.Find("zuoguntong");
		objyouguntong=GameObject.Find("youguntong");
	}

	function Update ()
	{
		if(Input.GetKey(KeyCode.Z))	//Z键控制左滚动转动
		{
			objzuoguntong.transform.Rotate (Vector3.up*Time.deltaTime*speed);
		}
		else if(Input.GetKey(KeyCode.C))	//C键控制右滚筒转动
		{
		    objyouguntong.transform.Rotate (Vector3.up*Time.deltaTime*speed);
		}
	}
