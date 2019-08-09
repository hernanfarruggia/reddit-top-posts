import React from 'react';
import { connect } from 'react-redux';
import {
    dismissAll,
    dismissPost,
    getPosts,
    selectPost
} from '../../redux/actions';

import Post from '../post';
import { Button } from '../../components-ui';

import './postsMenu.css';

class PostsMenu extends React.Component {

    componentDidMount () {
        this.props.getPosts();
    }

    handleDismissAll () {
        this.props.dismissAll();
    }

    render () {

        return (
            <div className="posts-menu">

                <div className="posts-menu-header">
                    <span className="posts-menu-header-title">
                        Reddit Top Posts
                    </span>
                    { this.renderDismissAllBtn() }
                </div>
                
                { this.renderLoading() }

                { this.renderError() }

                { this.renderPosts() }

            </div>
        );
    }

    renderDismissAllBtn () {
        if (this.props.posts && this.props.posts.length > 0) {
            return (
                <Button
                    onClick={ this.handleDismissAll.bind(this) }
                    title="Dismiss All" />
            );
        }

        return null;
    }

    renderLoading () {
        if (this.props.loading) {
            return (
                <div className="posts-menu-loading">
                    Loading...
                </div>
            );
        }

        return null;
    }

    renderError () {
        if (this.props.error) {
            return (
                <div className="error">
                    There was an error trying to fetch posts... Please refresh the page.
                </div>
            );
        }

        return null;
    }

    renderPosts () {
        if (this.props.posts && this.props.posts.length > 0) {
            return this.props.posts.map(post => {
                return <Post
                    author={ post.author }
                    created={ post.created_utc }
                    clicked={ post.clicked }
                    comments={ post.comments }
                    dismissPost={ this.props.dismissPost }
                    id={ post.id }
                    key={ post.id }
                    selectPost={ this.props.selectPost }
                    thumbnail={ post.thumbnail }
                    title={ post.title } />
            });
        }

        return null;
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        dismissAll: () => dispatch(dismissAll()),
        dismissPost: id => dispatch(dismissPost(id)),
        getPosts: () => dispatch(getPosts()),
        selectPost: id => dispatch(selectPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsMenu);