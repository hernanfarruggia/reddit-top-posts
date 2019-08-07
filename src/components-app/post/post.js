import React from 'react';

import { Button, Status } from '../../components-ui';

import './post.css';

class Post extends React.Component {

    render () {

        return (
            <div className="post">
                <div className="header">
                    <div className="info">{ this.props.created } - { this.props.author }</div>
                    <Status active={ this.props.clicked } />
                </div>

                <div className="title">
                    <img src={ this.props.thumbnail } alt={ this.props.title } />
                    <span>{ this.props.title }</span>
                </div>

                <div className="footer">
                    <div className="comments">{ this.props.comments } comments</div>
                    <Button title="Dismiss" />
                </div>
            </div>
        );
    }
}

export default Post;