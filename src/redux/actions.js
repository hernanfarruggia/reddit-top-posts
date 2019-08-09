export const DISMISS_ALL = 'DISMISS_ALL';
export const DISMISS_POST = 'DISMISS_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const LOADING = 'LOADING';
export const SELECT_POST = 'SELECT_POST';

export function dismissAll () {
    return {
        type: DISMISS_ALL
    };
}

export function dismissPost (id) {
    return {
        type: DISMISS_POST,
        id
    };
}

export function getPosts () {

    return dispatch => {

        dispatch(loading());

        return fetch('http://www.reddit.com/r/memes/top.json?limit=50')
            .then(response => response.json())
            .then(response => {
                const posts = response.data.children.map(item => {
                    const { author, clicked, created_utc, id, num_comments, thumbnail, title, url } = item.data;

                    return {
                        author,
                        clicked,
                        comments: num_comments,
                        created_utc,
                        id,
                        image: url,
                        thumbnail,
                        title
                    };
                });

                dispatch(getPostsSuccess(posts));
            })
            .catch(err => dispatch(getPostsFailure(err)));
    }

}

export function getPostsFailure (err) {
    return {
        type: GET_POSTS_FAILURE,
        err
    };
}

export function getPostsSuccess (posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}

export function loading () {
    return {
        type: LOADING
    };
}

export function selectPost (id) {
    return {
        type: SELECT_POST,
        id
    };
}