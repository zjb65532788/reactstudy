import React,{Component,PropTypes} from 'react';
import dom from 'react-dom';
import {Offset,getevpos,bindevent,unbindevent} from '../events/myevent'
class Drag extends Component{
	constructor(props){
		super();
		this.state={
			position:"relative",
			cursor:'pointer'
		}
	}
	onmousedown(e){
		const t=this;
		const nowdom=dom.findDOMNode(this);
		const pos=Offset(nowdom);
		const mousepos=getevpos(e);
		t._czx=pos.left-mousepos.x;
		t._czy=pos.top-mousepos.y;
		let nowstate=this.state.position;
		nowstate="absolute";
		this.setState({
			position:nowstate,
			cursor:'move'
		});
		/*this.setState({
			style:{position:"absolute",top:pos.top,left:pos.left}
		});*/
		function moving(e){
			t.dragmoving(e);
		}
		function mouseup(e){
			unbindevent(document,'mousemove',moving);
			unbindevent(document,'mouseup',mouseup);
			document.onselectstart = null;
			t.dragend(e);
		}
		document.onselectstart = function(){return false;}
		bindevent(document,'mousemove',moving);
		bindevent(document,'mouseup',mouseup);
	}
	dragmoving(e){
		const mousepos=getevpos(e);
		let nowstate=this.state.position;
		let top=mousepos.y+this._czy;
		let left=mousepos.x+this._czx;
		this.setState({
			left:left,
			top:top
		});
	}
	dragend(e){
		this.setState({
			cursor:'pointer'
		});
	}

	render(){
		return (
			<div onMouseDown={e=>this.onmousedown(e)} style={{position:this.state.position,top:this.state.top,left:this.state.left,cursor:this.state.cursor}}>{this.props.children}</div>
		)
	}
}
export default Drag