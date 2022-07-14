import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {

    const postList = posts.map((post) => {
        return <Article title={ post.title } preview={ post.preview } date={ post.date } minutes={ post.minutes } key={ post.id } />
    })

    return (
        <main>
            { postList }
            
        </main>
    )
}

export default ArticleList

