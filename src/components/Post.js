import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

  render() {
    return (
        <div class="postbox">
            <div class='header'>
                <h2>Hello WatchKit</h2>
            </div>
        
            <div>
                <p>{this.props.entry}</p>
            </div>
            <div class='comment-bar'>
                <a>{this.props.commentNum} Comments</a>
                <a>{this.props.likesNum} Likes</a>
            </div>
        </div>

    )
  }

}


export default Post
