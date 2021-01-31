import React from "react";
import dateFormat from 'dateformat';

const LoadComment = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id} style={{textAlign:"left"}}>
                    <hr />
                    <h5><b>Author: </b>{comment.author}</h5>
                    <p><b>Says: </b>{comment.comment}</p>
                    <p><small><b>Date: </b><i>{dateFormat(comment.date, "mmmm dS, yyyy, h:MM:ss TT")}</i></small></p>
                </div>                
            )
        })
    )
}
export default LoadComment