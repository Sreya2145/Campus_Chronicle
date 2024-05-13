export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:'Loading...',
        message:'Data is being loaded, please wait'
    },
    success: {
      title:'Success',
      message: 'Data successfully loaded'
    },

    responseFailure:{
        title: 'Error',
        message:'Error occured while fetching response from server please wait'
    },

    requestFailure:{
        title: 'Error',
        message:'An error occured while parsing request data'
    },

    networkError:{
        title: 'Error',
        message:'Unable to connect with server.Please check internet connection'
    },

}

export const SERVICE_URLS ={
    userSignup: { url:'/signup', method:'POST'},
    userLogin: {url:'/login', method:'POST'},
    uploadFile: {url: '/file/upload', method: 'POST'},
    createPost: {url: 'create', method: 'POST'},
    getAllPosts: {url: '/posts', method:'GET', params: true},
    getPostsById: {url: 'post', method:'GET' , query: true},
    updatePost: {url: 'update', method:'PUT', query: true},
    deletePost: {url: 'delete', method: 'DELETE', query: true},
    newComment: {url:'/comment/new' , method: 'POST' },
    //getAllComments: {url: 'comments', method:'GET' ,query: true},
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
}