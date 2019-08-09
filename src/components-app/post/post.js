import React from 'react';
import moment from 'moment';

import { Button, Status } from '../../components-ui';

import './post.css';

const Post = (props) => {

    const handleSelectPost = event => {
        props.selectPost(props.id);
    }

    const handleDismissPost = event => {
        event.stopPropagation();

        props.dismissPost(props.id);
    }

    const getDate = () => {
        return moment.unix(props.created).fromNow();
    }

    return (
        <div className="post" onClick={ handleSelectPost }>
            <div className="post-header">
                <span>{ getDate() } - { props.author }</span>
                <Status active={ props.clicked } />
            </div>

            <div className="post-header-title">
                <img src={ props.thumbnail } alt={ props.title } />
                <span>{ props.title }</span>
            </div>

            <div className="post-footer">
                <span>{ props.comments } comments</span>
                <Button title="Dismiss" onClick={ handleDismissPost } />
            </div>
        </div>
    );
}

export default Post;