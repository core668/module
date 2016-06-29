/*组件化*/
/*1.生产*/
(function(){
	//闭包
	//弹窗UI结构
	var html = '<div class="layer">\
		    		<h2>提示</h2>\
		    		<p>{text}</p>\
		    		<button>知道了</button>\
		    	</div>';
	//弹窗构造函数
	function Layer(text){
		//弹窗参数配置
		this.text = text;
		//初始化弹窗
		this.init();
	}
    //弹窗的初始化方法
    Layer.prototype.init = function(){
    	//初始化弹窗的DOM结构
    	this.initDom();
    	//初始化弹窗中的事件
    	this.initEvent();
    }
    //初始化弹窗的DOM结构的方法
    Layer.prototype.initDom = function(){
    	var node = document.createElement("div");
    	//根据配置生成弹窗内容
    	node.innerHTML = html.replace("{text}",this.text);
    	//完成弹窗DOM结构的初始化
    	this.dom = node.childNodes[0];
    }
    //初始化弹窗中的事件的方法
    Layer.prototype.initEvent = function(){
    	this.dom.addEventListener("click",function(event){
            //如果点击了按钮
            if (event.target.tagName == "BUTTON") {
            	//关闭弹窗
            	this.hide();
            }
    	}.bind(this));/*bind(this)确保函数体内的this指向是正确的*/
    }
    //显示弹窗的方法
    Layer.prototype.show = function(){
    	document.body.appendChild(this.dom);
    }
    //关闭弹窗的方法
    Layer.prototype.hide = function(){
    	document.body.removeChild(this.dom);
    }
    /*2.渠道*/
    /*暴露到全局*/
    window.Layer = Layer;
})();