import React from 'react';
// import InputField from './inputField'
import ToDo from './ToDO';

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map((item) => (
					<ToDo
						key={item.id}
						checkItem={this.props.checkItem}
						remItem={this.props.removeItem}
						todoItem={item}
						editItem={this.props.editItem}
					/>
				))}
			</ul>
		);
	}
}

export default TodoList;
