layui.use(['table','layer','jquery'], function(){
  
  
  alert("ok............");
  
  
  
  var table = layui.table;
  var layer = layui.layer;
  var $ = layui.$;
  
  
  //第一个实例
  table.render({
    elem: '#demo'
    ,toolbar:"#toolbar0"
    ,height: 312
    ,url: '/txt/whmanage.json' //数据接口
    ,page: true //开启分页
    ,cols: [[ //表头
      {field: 'username', title: '仓库编号', width:"20%", sort: true,align:"center", fixed: 'left',templet:'#username'}
      ,{field: 'sex', title: '仓库名称', width:"20%", sort: true,align:"center"}
      ,{field: 'city', title: '仓库面积', width:"20%",align:"center",sort: true} 
      ,{field: 'sign', title: '仓库类别', width: "20%",align:"center",sort: true}
      ,{field: 'operation', title: '操作', width: "20%",align:"center",templet:'#operation',sort: true}
    ]]
  });
  
  
  /***********************增加按钮********************/
	  $("#save").click(function(){
				
				layer.open({
			  type: 2,
			  title:'<h1>添加仓库</h1>',
			  shade: true, //模态窗
			  area: ['1150px','400px'],
			  maxmin: false,
			  anim:1,
			  content: 'save.html',
			  zIndex: layer.zIndex, //重点1
			  success: function(layero){
			    layer.setTop(layero); //重点2
			  }
			}); 
		});
  
  
  
  /*******************************监听工具条*****************************/ 
	//监听行工具事件
	  table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
	    var data = obj.data //获得当前行数据
	    ,layEvent = obj.event; //获得 lay-event 对应的值
	    if(layEvent === 'detail'){
	      
	      //显示详情页面,弹出层组件
	      //通过这种方式弹出的层，每当它被选择，就会置顶。
			layer.open({
			  type: 2,
			  title:'<h1>仓库详情</h1>',
			  shade: true, //模态窗
			  area: ['1150px','400px'],
			  maxmin: false,
			  anim:1,
			  content: 'detail.html',
			  zIndex: layer.zIndex, //重点1
			  success: function(layero){
			    layer.setTop(layero); //重点2
			  }
			}); 
	      
	      
	    } else if(layEvent === 'del'){
	      layer.confirm('真的删除行么', function(index){
	        obj.del(); //删除对应行（tr）的DOM结构
	        layer.close(index);
	        //向服务端发送删除指令
	      });
	    } else if(layEvent === 'edit'){
	      //显示编辑页面,弹出层组件
	      //通过这种方式弹出的层，每当它被选择，就会置顶。
			layer.open({
			  type: 2,
			  title:'<h1>修改仓库信息</h1>',
			  shade: true, //模态窗
			  area: ['1150px','400px'],
			  maxmin: false,
			  anim:1,
			  content: 'update.html',
			  zIndex: layer.zIndex, //重点1
			  success: function(layero){
			    layer.setTop(layero); //重点2
			  }
			}); 
	      
	    }
	  });
  
  
  
});