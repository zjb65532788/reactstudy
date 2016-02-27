import React,{Component,PropTypes} from 'react'
class AddTodo extends Component{
	render(){
		return(
			<div>
				<input type="text" ref='input' />
				<botton onClick={e=>this.handleClick(e)}>add</botton>
			</div>
			)
	}
	handleClick(e){
		const node=this.refs.input;
		const text=node.value.trim();
		this.props.onAddClick(text);
		node.value="";
	}
}
AddTodo.propTypes={
	onAddClick:PropTypes.func.isRequired
}
export default AddTodo