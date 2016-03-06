export function Offset(obj){//获取边距
	var top=obj.offsetTop,
		left=obj.offsetLeft,
		offset1={top:top,left:left};
	if (parent=obj.offsetParent) {
		var parentoffset=Offset(parent);
		offset1.top+=parentoffset.top;
		offset1.left+=parentoffset.left;
	}else{
	}
	return offset1;
}

export function getevpos(e){
	if ('ontouchstart' in window) {
		return {x:e.touches[0].clientX,y:e.touches[0].clientY}
	}
	if (e.pageX&&e.pageY) {
		return {x:e.pageX,y:e.pageY}
	}else{
		return{x:e.clientX+document.body.scrollLeft - document.body.clientLeft,y:e.clientY+document.body.scrollTop - document.body.clientTop}
	}
}

export function bindevent(obj,type,fun){
	if (document.addEventListener) {
		obj.addEventListener(type,fun,false);
	}else if(document.attachEvent){
		obj.attachEvent('on'+type,fun);
	}else{
		obj['on'+type]=fun;
	}
}

export function unbindevent(obj,type,fun){
	if (document.removeEventListener) {
		obj.removeEventListener(type,fun,false);
	}else if(document.attachEvent){
		obj.detachEvent('on'+type,fun);
	}else{
		obj['on'+type]=null;
	}
}