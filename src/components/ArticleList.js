import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {

    const postList = posts.map((post) => {
        return <Article title={ post.title } preview={ post.preview } date={ post.date } key={ post.id } />
    })

    return (
        <main>
            { postList }
            {console.log(posts)}
        </main>
    )
}

export default ArticleList