import React from 'react';
import { connect } from 'react-redux';

import './postDetail.css';

class PostDetail extends React.Component {

    render () {

        return (
            <div className="post-detail">
                { this.renderPostDetails() }
            </div>
        );
    }

    renderPostDetails () {
        let Component;

        if (this.props.selectedPost) {
            Component = (
                <div>
                    <div className="title">
                        { this.props.selectedPost.author }
                    </div>
                    <div className="content">
                        <img src={ this.props.selectedPost.image } alt="Thu" />
                        <div>{ this.props.selectedPost.title }</div>
                    </div>
                </div>
            );

        } else {
            Component = (
                <div className="not_found">
                    Please select a post to see details!
                </div>
            );
        }

        return Component;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPost: state.selectedPost
    };
};

export default connect(mapStateToProps)(PostDetail);