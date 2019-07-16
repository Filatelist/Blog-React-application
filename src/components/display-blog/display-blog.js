import React from 'react';
import user from './user.png'
import edit from './edit.png'
import del from './waste-bin.png';
class DisplayBlog extends React.Component{
    state={
        id:'',
        inpV:"",
        body:"",
        title:"",
        display: false
    };

    render() {
        const {blog, comment} = this.props;
        const {display, body, title, id} = this.state;
        console.log(display);
        if (!blog.id){
            return(
                <div><h5 className="naming">Chose blog for details</h5></div>
            );
        }
        if (display){
            return(
                <form className="col-6 bg-light m-10 d-block">
                    <span><input onChange={(event)=>{
                        if (event.target.value.length>0)
                            this.setState({title:event.target.value})}} className="decorate" value={title} /></span>
                    <hr/>
                    <textarea className="text-area" onChange={(event)=>{
                        if (event.target.value.length>0)
                            this.setState({body:event.target.value})}} value={body}></textarea>
                    <button className="btn btn-primary" onClick={(event)=>this.props.onEdit(event, title, body, id)}>Save</button>
                    <button className="btn btn-danger"onClick={()=>{this.setState({display:false})}}>Exit</button>
                </form>
            );
        }

        return(
            <div className={"col-6 bg-light m-10 d-block"}>
                <span><h5 className="decorate">{blog.title}</h5></span>
                <hr/>

                <span>{blog.body}</span>
                <br/>
                <img src={edit} className="float-right" onClick={()=>{this.setState({display:true, body:blog.body, title:blog.title, id:blog.id})}} />
                <img src={del} className="float-right" alt="delete" onClick={()=>this.props.onDelete(blog.id)}/>
                <form action="submit" onSubmit={(event)=>this.props.addComment(event,blog.id, comment.length+1 , this.state.inpV)} >
                    <input className="naming border-bottom" onChange={(event)=>this.setState({inpV:event.target.value})} value={this.state.inpV} placeholder="Type comment here" />
                </form>

                <ul>
                    {
                        comment.map(comm =>{
                        if(comm.postId === blog.id){
                        return(<li className="list-group d-flex" key={comm.id}>
                        <div className="p-2 d-flex">
                        <img src={user} className="m-1" width={25} height={25} />
                        {comm.body}
                        </div>
                        </li>);
                    }
                    })}
                </ul>
            </div>
        );
    }


};
export default DisplayBlog
