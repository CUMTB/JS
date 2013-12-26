<HTML>
 <HEAD>
 <TITLE>变量赋值</TITLE>
 <SCRIPT Language="JavaScript">
   document.writeln("<br>变量的值是:",);
   document.writeln("<br>变量的类型是:",);
  </SCRIPT>
 </HEAD>
 <BODY>
 </BODY>
</HTML>


function Update(){                     //声明Update的方法
   this.transform.Rotate(20,0,0);      //绕X轴上旋转20度
}

var gameobject : GameObject;           //声明一个游戏对象
function Update(){                     //声明Update方法
   gameobject.transform.Rotate(20,0,0);//实现绕X轴上旋转20度

}

var gameobject : GameObject;           //声明一个游戏对象
function Update(){                     //声明Update方法
   gameobject.transform.Translate(0,0,1);//实现gameobject每帧向前移动一个单位
}

若想均匀地旋转一个物体，不考虑帧速率的情况下，代码片段如下：
var gameobject : GameObject;                                 //声明一个游戏对象
function Update(){                                           //声明Update方法
   gameobject.transform.Rotate(10*Time.deltaTime,0,0);       //绕X轴均匀旋转
}

若想均匀地移动一个物体，不考虑帧速率的情况下，代码片段如下：
var gameobject:GameObject;                                    //声明一个游戏对象
function Update(){                                            //声明Update方法
gameobject.transform.Translate(0,0,1*Time.deltaTime);	      //沿Z轴向前移动
}

若想让游戏对象沿y轴每秒上升5个单位的长度，代码片段如下：
var gameobject:GameObject;                                    //声明一个游戏对象
function Update(){                                            //声明Update方法
	gameobject.transform.position.y+=5*Time.deltaTime;        //游戏对象沿Y轴每秒上升5个单位的长度
}

当涉及刚体时，可以写在FixUpdate()里面，这样就不需要乘以Time.deltaTime，例如
想让一个刚体沿Y轴每秒上升2个单位长度，代码片段如下：
var gameobject:Rigidbody;                                    //声明一个游戏对象 
function FixUpdate(){                                        //声明Update方法
	gameobject.rigidbody.transform.position.y+=2;            //游戏对象沿Y轴每秒上升2个单位的长度
}

在Unity中，附加到游戏对象上的组件可以通过GetComponent获得，具体使用
如下面的代码片段所示：
var gameobject:Rigidbody                                      //声明一个游戏对象
function Update(){                                            //声明Update方法
gameobject.transform.Translate(1,0,0);                        //沿X轴移动一个单位
gameobject.GetComponent(Transform).Translate(1,0,0);          //沿X轴移动一个单位
}