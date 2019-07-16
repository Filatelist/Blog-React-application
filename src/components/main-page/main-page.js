import React, {Component} from 'react';
import './main-page.css';
import {connect} from 'react-redux';
import withService from '../hoc';
import {blogsLoaded, commentLoaded,singleLoaded} from "../../actions";
import BlogList from '../blog-list';
import DisplayBlog from '../display-blog';
import BlogService from '../../blog-service';
const blogService = new BlogService();
class MainPage extends Component{
    state={
        id:''
    };
    componentDidMount() {

        blogService.getAllBlogs().then(body=>{
            this.props.blogsLoaded(body);
        });
        blogService.getComments().then(body=>{
            this.props.commentLoaded(body)
        });
        blogService.getSingleBlog(this.state.id).then(body=>{
            this.props.singleLoaded(body);
        });
    }

    onMore = (id)=>{
        blogService.getSingleBlog(id).then(body=>{
            this.props.singleLoaded(body);
        });
    };
    addComment = (event,postId, id, value) =>{
        event.preventDefault();
        blogService.postComment({id,postId,body:value});

    };
    editBlog = (event, title, body, id) =>{
        event.preventDefault();
        blogService.editBlog(id, {title, body})
    };
    onDelete = (id) =>{
        blogService.deleteBlog(id)
    };
    render(){
        return(
        <div className="container">
            <div className="container-fluid">
                <h4 className="naming">Blogs</h4>
                <hr/>
            </div>
            <div className="list-of-blogs row">
                <BlogList blogs={this.props.blogs} onMore={this.onMore} />
                <DisplayBlog onDelete={this.onDelete} onEdit={this.editBlog} onMore={this.onMore} display={this.state.display} addComment={this.addComment} blog={this.props.blog} comment={this.props.comments} />
            </div>
        </div>)
    }
};
const mapStateToProps = ({blogs, comments, blog}) =>{
    return{blogs, comments, blog}
};
const mapDispatchToProps ={
    blogsLoaded,
    commentLoaded,
    singleLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(withService()(MainPage));
