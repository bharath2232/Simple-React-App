import  React, {Component} from 'react'
import Photos from "./Photos";
import {Link} from 'react-router-dom'

class Photowall extends Component{
    render() {
        return (
            <div>
                <Link  to="/AddPhoto" className="addIcon"> + </Link>
                <div className="photo-Grid">
                    {this.props.posts.sort(function(x,y) {
                        return y.id - x.id
                    }).map((post,index) => <Photos key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}

            </div>
            </div>
        )

    }
    
}
export default Photowall