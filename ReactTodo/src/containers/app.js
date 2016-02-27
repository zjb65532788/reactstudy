import React, { Component, PropTypes } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
/*import {connect} from */

class App extends Component{
	constructor(props){
		super();
	    this.state = {
	      list: props.list || []
	    };
	}
	onAddClick(text){
		let nowstate=this.state.list;
		let newstate={text:text,completed:false};
		nowstate.unshift(newstate);
		this.setState({list:nowstate});
	}
	onTodoClick(index){
		let nowstate=this.state.list;
		nowstate[index].completed=nowstate[index].completed?false:true;
		this.setState({list:nowstate});
	}
	componentDidMount() {
	    this.setState({
	    	list:[{text:'ceshi1','completed':true},{text:'ceshi2',completed:false}]
	    });
	}
	render(){
		return (
			<div>
				<AddTodo onAddClick={text=>this.onAddClick(text)} />
				<TodoList onTodoClick={index=>this.onTodoClick(index)} list={this.state.list} />
			</div>
			)
	}
}
export default App;