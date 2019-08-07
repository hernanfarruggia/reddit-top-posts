import React from 'react';

import './postDetail.css';

class PostDetail extends React.Component {

    render () {

        return (
            <div className="post-detail">
                <div className="title">
                    <img src="" alt="Thu" />
                    <span>{ this.props.title }</span>
                </div>
                <div className="content">
                    { this.props.content }
                </div>
            </div>
        );
    }
}

export default PostDetail;