import React from 'react';

import './app.css';

function App() {
    return (
        <div className="wrapper">
            <div className="posts">
                <div className="post-row">
                    <div className="header">
                        <div className="info">3 hours ago - username</div>
                        <div className="status unread"></div>
                    </div>

                    <div className="title">
                        <img src="" alt="Thu" />
                        <span>This is a really long title just to see how flexbox behaves when usint long text in fixed width elements</span>
                    </div>

                    <div className="footer">
                        <div className="comments">33 comments</div>
                        <button>Dismiss</button>
                    </div>
                </div>

                <div className="post-row">
                    <div className="header">
                        <div className="info">3 hours ago - username</div>
                        <div className="status read"></div>
                    </div>

                    <div className="title">
                        <img src="" alt="Thu" />
                        <span>This is a really long title just to see how flexbox behaves when usint long text in fixed width elements</span>
                    </div>

                    <div className="footer">
                        <div className="comments">33 comments</div>
                        <button>Dismiss</button>
                    </div>
                </div>
            </div>

            <div className="post-detail">
                <div className="title">
                    <img src="" alt="Thu" />
                    <span>This is a really long title just to see how flexbox behaves when usint long text in fixed width elements</span>
                </div>
                <div className="content">
                    Lorem ipsum dolor sir amet
                </div>
            </div>
        </div>
    );
}

export default App;
