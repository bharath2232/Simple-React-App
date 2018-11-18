import React,{Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const posts = {
            id : Number (new Date()),
            imageLink : imageLink,
            description : description
        };
        this.props.addPhoto(posts);



    }

    render() {

        return(
            <div>
                <h1>Add A New Dam Photo</h1>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='link' name="link"/>
                    <input type="text" placeholder='description' name="description"/>
                    <button className="button"> Post</button>
                </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto
