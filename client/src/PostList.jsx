import React, { useEffect, useState } from "react"
import axios from "axios"
import CommantCreate from "./CommantCreate"
import CommentList from "./CommentList"

export default () => {
	const [posts, setPosts] = useState({})

	const fetchPosts = async () => {
		const res = await axios.get("http://localhost:4000/posts")

		setPosts(res.data)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	// obj.value inbuild js function will give all value in posts in array
	const rederedPosts = Object.values(posts).map((posts) => {
		return (
			<div
				className="card"
				style={{ width: "30%", marginBottom: "20px" }}
				key={posts.id}
			>
				<div className="card-body">
					<h3>{posts.title}</h3>
					<CommentList postId={posts.id} />
					<CommantCreate postId={posts.id}/>
				</div>
			</div>
		)
	})

	return (
		<div className="d-flex flex-row flex-wrap justify-container-between">
			{rederedPosts}
		</div>
	)
}
