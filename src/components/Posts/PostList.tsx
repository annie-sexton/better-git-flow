import React from 'react';
import Post from './Post';

const PostList = () => {
  function render() {
    return(
      <div>
        <h2>My posts</h2>
        <Post/>
      </div>
    )
  }

  return render()
}

export default PostList