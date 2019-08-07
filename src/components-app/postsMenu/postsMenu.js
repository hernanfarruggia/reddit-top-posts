import React from 'react';

import Post from '../post';

import './postsMenu.css';

class PostsMenu extends React.Component {

    render () {

        return (
            <div className="posts-menu">
                
                <Post
                    author="pepeLePew"
                    created="3 days ago"
                    clicked={ false }
                    comments="20"
                    id="123456"
                    thumbnail=""
                    title="This is a really long title just to see how flexbox behaves" />

                <Post
                    author="elGalloClaudio"
                    created="5 days ago"
                    clicked={ true }
                    comments="12"
                    id="123457"
                    thumbnail=""
                    title="This is a short title" />

            </div>
        );
    }
}

export default PostsMenu;