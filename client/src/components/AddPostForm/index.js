import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { ADD_POST } from '../../utils/mutations';

const AddPostForm = () => {
	const { id } = useParams();
	const [postBody, setText] = useState('');
	const [characterCount, setCharacterCount] = useState(0);

	const [addPost, { error }] = useMutation(ADD_POST);

	const handleTextChange = (event) => {
		if (event.target.value.length <= 280) {
			setText(event.target.value);
			setCharacterCount(event.target.value.length);
		}
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await addPost({
				variables: { threadId: id, postBody },
			});

			setText('');
			setCharacterCount(0);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='container'>
			<p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
				Character Count: {characterCount}/280
				{error && <span className='ml-2'>Something went wrong...</span>}
			</p>
			<form
				className='flex-row justify-center justify-space-between-md align-stretch row'
				onSubmit={handleFormSubmit}
			>
				<textarea
					placeholder="Here's a new post..."
					value={postBody}
					className='form-input col-12 col-md-12 mx-2'
					onChange={handleTextChange}
				></textarea>
				<button
					className='btn col-5 col-md-12 border border-dark mx-2'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddPostForm;
