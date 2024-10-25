import axios from "axios"
import React, { useEffect, useState } from "react"

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([])

	const fetchData = async () => {
		const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

		setComments(res.data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const renderedComments = comments.map((com) => {
		return <li key={com.id}>{com.content}</li>
	})

	return(
		<ul>
			{renderedComments}
		</ul>
	)
}

export default CommentList
