const blogsLoaded = (newBlog) =>{
    return{
        type:'BLOGS_LOADED',
        payload: newBlog
    }
};
const commentLoaded = (comments) =>{
    return{
        type:'COMMENTS_LOADED',
        payload: comments
    }
};
const singleLoaded = (single) =>{
    return{
        type:'BLOG_LOADED',
        payload:single
    }
};
export {
    blogsLoaded,
    commentLoaded,
    singleLoaded
}
