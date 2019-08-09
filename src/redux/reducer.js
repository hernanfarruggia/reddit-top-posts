import {
    DISMISS_POST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    LOADING,
    SELECT_POST
} from './actions';

const initialState = {
    error: false,
    loading: true,
    posts: [],
    selectedPost: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case DISMISS_POST:
            return {
                posts: state.posts.filter(post => post.id !== action.id),
                selectedPost: state.selectedPost && state.selectedPost.id === action.id ? null : state.selectedPost
            };
        
        case GET_POSTS_SUCCESS:
            return {
                error: false,
                loading: false,
                posts: action.posts,
                selectedPost: null
            };
        
        case GET_POSTS_FAILURE:
            return {
                error: action.err,
                loading: false,
                posts: [],
                selectedPost: null,
            };

        case LOADING:
            return {
                loading: true
            };
        
        case SELECT_POST:
            const posts = [...state.posts],
                selectedPost = posts.find(post => post.id === action.id);

            selectedPost.clicked = true;

            return {
                posts,
                selectedPost
            };

        default:
            return state;
    }
};

export default reducer;