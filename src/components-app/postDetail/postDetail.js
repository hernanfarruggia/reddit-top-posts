import React from 'react';
import { connect } from 'react-redux';

import './postDetail.css';

class PostDetail extends React.Component {

    render () {

        return (
            <div className="post-detail">
                { this.renderDetails() }

                { this.renderEmpty() }
            </div>
        );
    }

    renderDetails () {
        if (this.props.selectedPost) {
            return (
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

        }
        
        return null;
    }

    renderEmpty () {
        if (!this.props.selectedPost) {
            return (
                <span>
                    Please select a post to see details!
                </span>
            );
        }

        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPost: state.selectedPost
    };
};

export default connect(mapStateToProps)(PostDetail);