export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const LOADING = 'LOADING';
export const SELECT_POST = 'SELECT_POST';

export function loading () {
    return {
        type: LOADING
    };
}

export function getPostsSuccess (posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}

export function getPostsFailure (err) {
    return {
        type: GET_POSTS_FAILURE,
        err
    };
}

export function getPosts () {

    return dispatch => {

        dispatch(loading());

        return fetch('http://www.reddit.com/r/memes/top.json?limit=50')
            .then(response => response.json())
            .then(response => {
                const posts = response.data.children.map(item => {
                    const { author, created, clicked, id, num_comments, thumbnail, title } = item.data;

                    return {
                        author,
                        created,
                        clicked,
                        id,
                        comments: num_comments,
                        thumbnail,
                        title
                    };
                });

                dispatch(getPostsSuccess(posts));
            })
            .catch(err => dispatch(getPostsFailure(err)));
    }

}

export function selectPost (id) {
    return {
        type: SELECT_POST,
        id
    };
}