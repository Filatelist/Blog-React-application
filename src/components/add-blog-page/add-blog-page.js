import React, {Component} from 'react';
import './add-blog-page.css'
import BlogService from '../../blog-service';
const blogService = new BlogService();
class AddBlogPage extends Component{
    state = {
        id:0,
        title:"",
        body:""
    };
    onPost = (event) =>{
        event.preventDefault();
        if (!this.state.title.length<1 && !this.state.body.length<1)
        blogService.addBlog(this.state);
    };
    render(){
        return(<div className={"container"}>
            <div className="container-fluid">
                <h4 className="naming">Add your blog</h4>
                <hr/>
            </div>
            <form>
                <input type="text" className="bg-white" onChange={(event)=>{this.setState({title:event.target.value})}} value={this.state.title} />
                <textarea name="blog" className="text-area" onChange={(event)=>{this.setState({body:event.target.value})}} value={this.state.body}></textarea>
                <button className="btn btn-primary" type="submit" onClick={this.onPost}>Post</button>
            </form>
        </div>);
    }
};

export default AddBlogPage;
