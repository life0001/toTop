;(function($,document,window,undefined){
	 function ToTop(ele,options){
		 var $this=ele,   //回到顶部按钮的class/id
	 		 _this=this,
			 pos=options.pos,     
			 scrollPos=options.scrollPos,
		 	 scrolltop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	 	_this.isShow=function(pos){
			 if(scrolltop > pos){
				 $this.show();
			 }else{
				 $this.hide();
			 }
	 	}
 		_this.isShow(pos)
		 $this.on('click',function(){
			 $('html,body').animate({scrollTop:scrollPos})
		 })
		 $(window).scroll(function(){
			 scrolltop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 _this.isShow(pos)
		 });
	 }
	 $.fn.toTop=function(parameter,callback){
		 if(typeof parameter == 'function'){
             callback = parameter;
             parameter = {};
         }else{
             parameter = parameter || {};
             callback = callback || function(){};             
         }
		 var defaults={
			 pos:100,     //滚动条在该位置时显示
			 scrollPos:0  //点击之后滚动条到达的位置
		 }
		 var options=$.extend({},defaults,parameter),
		 newtoTop= new ToTop(this,options)
	 }
 })(jQuery,document,window)