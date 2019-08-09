import React from 'react';
import moment from 'moment';

import { Button, Status } from '../../components-ui';

import './post.css';

class Post extends React.Component {

    handleSelectPost (event) {
        this.props.selectPost(this.props.id);
    }

    handleDismissPost (event) {
        event.stopPropagation();

        this.props.dismissPost(this.props.id);
    }

    getDate () {
        return moment.unix(this.props.created).fromNow();
    }

    render () {

        return (
            <div className="post" onClick={ this.handleSelectPost.bind(this) }>
                <div className="header">
                    <div className="info">{ this.getDate() } - { this.props.author }</div>
                    <Status active={ this.props.clicked } />
                </div>

                <div className="title">
                    <img src={ this.props.thumbnail } alt={ this.props.title } />
                    <span>{ this.props.title }</span>
                </div>

                <div className="footer">
                    <div className="comments">{ this.props.comments } comments</div>
                    <Button title="Dismiss" onClick={ this.handleDismissPost.bind(this) } />
                </div>
            </div>
        );
    }
}

export default Post;