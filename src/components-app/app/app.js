import React from 'react';

import PostDetail from '../postDetail';
import PostsMenu from '../postsMenu';

import './app.css';

function App() {
    return (
        <div className="wrapper">

            <PostsMenu />

            <PostDetail
                content="Lorem ipsum dolor sir amet"
                title="This is a really long title just to see how flexbox behaves when usint long text in fixed width elements" />
        </div>
    );
}

export default App;
