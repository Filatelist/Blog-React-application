import React from 'react';
import './blog-list.css'
import user from '../display-blog/user.png';
import edit from '../display-blog/edit.png'

const BlogList = ({blogs, onMore}) =>{
        return(
            <ul className="p-2 col-6">
                {
                    blogs.map(item=>{
                        return(
                            <li className="list-group part" key={item.id}>
                                <div className="d-block border p-2">
                                    <span><h5 className="decorate">{item.title}</h5></span>
                                    <hr/>
                                    <button className="btn btn-default border" onClick={()=>{onMore(item.id)}}>Read mode...</button>
                                    <span>
                                </span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    };

export default BlogList
