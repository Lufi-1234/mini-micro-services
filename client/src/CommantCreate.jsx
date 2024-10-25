import axios from "axios"
import React, { useState } from "react"

const CommantCreate = ({ postId }) => {

	const [content, setContent] = useState("")
	const onSubmit = async (e) => {
		e.preventDefault()
		
		const data = await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content
		});
		setContent('');
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-contain">
					<input
						type="text"
						className="form-data"
						value={content}
						onChange= {(e) => setContent(e.target.value)}
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	)
}

export default CommantCreate
