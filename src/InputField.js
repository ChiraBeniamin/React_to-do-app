import React from 'react';
import TodoList from './ToDoList';

class InputField extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: '', editedItem: false, editedItemId: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onClickAddTodo = this.onClickAddTodo.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.checkItem = this.checkItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.saveEditedItem = this.saveEditedItem.bind(this);
		this.handleEnterPress = this.handleEnterPress.bind(this);
	}

	// CRUD= CREATE, READ,UPDATE,DELELTE!!!
	// inputValue = [document.getElementById('new-todo')];
	saveEditedItem() {
		var mappedItems = this.state.items.map((savedItem) => {
			if (savedItem.id === this.state.editedItemId) {
				return { ...savedItem, text: this.state.text };
			}

			return savedItem;
		});
		this.setState({
			items: mappedItems,
			editedItem: false,
			editedItemId: '',
			text: '',
		});
	}
	editItem(toDoId) {
		// var filteredItem = this.state.items.filter((todo) => todo.id !== toDoId);
		var selectedItem = this.state.items.find((todo) => todo.id === toDoId);
		this.setState({
			text: selectedItem.text,
			editedItem: true,
			editedItemId: selectedItem.id,
		});
	}

	checkItem(toDoId) {
		var checkedItems = this.state.items.map((todoItem) => {
			if (todoItem.id === toDoId) {
				return {
					...todoItem,
					completed: !todoItem.completed,
					// ...(todoItem = { completed: !todoItem.completed }),
				};
			}
			return todoItem;
		});
		this.setState({
			items: checkedItems,
		});
	}

	deleteItem(toDoId) {
		var newTodoList = this.state.items.filter(function (todo) {
			if (todo.id === toDoId) {
				return false;
			} else {
				return todo;
			}
		});
		this.setState({
			items: newTodoList,
		});
		// cleaner version ES6 (arrow function)
		//this.setState({
		// items: this.state.items.filter((todo) => todo.id !== toDoId)
		// })
	}

	handleInputChange(e) {
		this.setState({ text: e.target.value });
	}

	handleEnterPress(keyPressEvent) {
		if (keyPressEvent.which === 13) {
			if (this.state.editedItem) {
				this.saveEditedItem();
			} else {
				this.addTodo();
			}
		}
	}
	// addTodo
	onClickAddTodo() {
		if (this.state.text.length === 0) {
			return;
		}
		this.addTodo();
	}

	addTodo() {
		const newItem = {
			text: this.state.text,
			id: Date.now(),
			completed: false,
		};

		this.setState((state) => ({
			items: state.items.concat(newItem),
			text: '',
		}));
	}

	render() {
		return (
			<div className='container'>
				<label className='label' htmlFor='new-todo'>
					What needs to be done?
				</label>
				<input
					className='inputText'
					placeholder='Enter to-do'
					id='new-todo'
					onChange={this.handleInputChange}
					onKeyPress={this.handleEnterPress}
					value={this.state.text}
					autoFocus
				/>
				{this.state.editedItem ? (
					<button className='save-btn' onClick={this.saveEditedItem}>
						Save
					</button>
				) : (
					<button className='add-btn' onClick={this.onClickAddTodo}>
						Add #{this.state.items.length + 1}
					</button>
				)}

				{/* <button className='clearBtn'>Clear</button> */}
				<h3>TODO</h3>
				<TodoList
					checkItem={this.checkItem}
					removeItem={this.deleteItem}
					items={this.state.items}
					editItem={this.editItem}
				/>
			</div>
		);
	}
}

export default InputField;
