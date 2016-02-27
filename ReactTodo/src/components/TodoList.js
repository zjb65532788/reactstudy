import React, { Component, PropTypes } from 'react'
import Todo from "./Todo";
export default class TodoList extends Component{

	render(){
		let node=this.props.list.map((item,index)=>{
			return (
				<Todo {...item} key={index} onTodoClick={(e)=>this.props.onTodoClick(index)} />
			)
		});
		return (
			<div>
				<ul>
					{node}
				</ul>
			</div>
		)
		
	}
}

TodoList.propTypes={
	onTodoClick: PropTypes.func.isRequired,
	list: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}