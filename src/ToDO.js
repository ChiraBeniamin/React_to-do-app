import React from 'react';

export default function ToDO(props) {
	return (
		<div style={{ display: 'flex' }}>
			{/* <input
				className='checkInput'
				type='checkbox'
				onClick={() => {
					props.checkItem(props.todoItem.id);
				}}
			/> */}
			<button
				className='check-Btn'
				onClick={() => {
					props.checkItem(props.todoItem.id);
				}}
			>
				✔
			</button>
			<li
				className='list'
				style={{
					textDecoration: props.todoItem.completed ? 'line-through' : '',
				}}
				key={props.todoItem.id}
			>
				{props.todoItem.text}
			</li>
			<button
				className='xBtn'
				onClick={() => {
					props.remItem(props.todoItem.id);
				}}
			>
				✘
			</button>
			<button
				className='edit-Btn'
				onClick={() => {
					props.editItem(props.todoItem.id);
				}}
			>
				✎
			</button>
		</div>
	);
}
