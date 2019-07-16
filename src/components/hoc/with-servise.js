import React from 'react';
import {ServiceConsumer} from "../service-context";

const withService = () =>(Wrapped) =>{
    return (props)=>{
        return(
            <ServiceConsumer>
                {
                    (blogService)=>{
                        return(
                            <Wrapped
                                {...props}
                                blogService={blogService} />
                        );
                    }
                }
            </ServiceConsumer>);
    }
}
export default withService;
