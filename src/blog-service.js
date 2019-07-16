const path = 'http://bloggy-api.herokuapp.com/';

export default class BlogService {
    addBlog = (data) =>{
        return fetch(path+'posts',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json()).then(
                window.location.replace('/')
            );
    };

    getComments = async() =>{
        const comments = await fetch(path + 'comments');
        const body = await comments.json();
        return body;
    };
    getSingleBlog = async (id)=>{
        const blog = await fetch(path + 'posts/' +id);
        const body = await blog.json();
        return body;
    };
    getAllBlogs = async () =>{
        const res = await fetch(path + 'posts');
        const body = await res.json();
        return body
    };
    postComment = async (data) =>{

        return fetch(path+'comments',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(()=>{
                window.location.reload()
            })
    };


    editBlog = async (id,data) =>{
        return fetch(path + 'posts/' + id,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(()=>{
            window.location.reload()
        })

    };
    deleteBlog = async (id) =>{
        console.log(id)
        return fetch(path + 'posts/'+ id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            window.location.reload()
        })
    }

}
