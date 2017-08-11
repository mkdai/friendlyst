import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ posts, mainUser }) => {
  return (
    <div>
      {posts.map((post, key) => <FeedListEntry post={post} key={post.id} mainUser={mainUser} />)}
    </div>
  )
}

export default FeedList