import React from 'react';
import { connect } from 'react-redux';
import { getPosts, selectPost } from '../../redux/actions';

import Post from '../post';

import './postsMenu.css';

class PostsMenu extends React.Component {

    componentDidMount () {
        this.props.getPosts();
    }

    render () {

        return (
            <div className="posts-menu">
                
                { this.renderPosts() }

            </div>
        );
    }

    renderPosts () {
        let Component;

        if (this.props.loading) {
            Component = (
                <div className="loading">Loading...</div>
            );
        } else {
            Component = this.props.posts.map(post => {
                return <Post
                    author={ post.author }
                    created={ post.created }
                    clicked={ post.clicked }
                    comments={ post.comments }
                    id={ post.id }
                    key={ post.id }
                    onClick={ this.props.selectPost }
                    thumbnail={ post.thumbnail }
                    title={ post.title } />
            })
        }

        return Component;
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
        selectPost: (id) => dispatch(selectPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsMenu);