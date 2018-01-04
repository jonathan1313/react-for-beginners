import React from 'react';

const List = props => (
	<ul>
		{
			props.items.map((item, index) => 
				<li key={index}>
					<a href="#">{index+1} - {item}</a>
					<button class="btn danger" onClick={() => props.deleteItem(index)}>Delete</button>
					<button class="btn edit" onClick={() => props.startEditItem(index)}>Edit</button>
				</li>
			)
		}
	</ul>
);

export default List;