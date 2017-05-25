class HelloWorld extends React.Component{
    constructor() {
        super();
    }

    render(){
        return  <div>Hello World!</div>
    }
}

// ReactDOM.render(
//     <HelloWorld />,
//     document.getElementsByClassName("react")[0]
// )


class Message extends React.Component{
    constructor(props) {
        super(props);
        this.post = {
            title: props.title,
            content: props.content
        }
        this.state = {
            title: this.props.title
        }
        this.text = props.text;
    }

    render(){
        return  <div><div>{this.text}</div>
        <div>{this.post.title}</div>
        <div>{this.post.content}</div>
        </div>
    }
}

ReactDOM.render(
    <Message text="this is a new message" title="message Title" content="MessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContent"/>,
    document.getElementsByClassName("react")[0]
)


class Post extends React.Component{
    constructor(props) {
        super(props);
        this.post = {
            title: props.title,
            content: props.content
        }
        this.state = {
            title: "",
            content: ""
        }
        this.text = props.text;
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    render(){
        return  <div>
                    <div>Title:
                        <input onChange={this.updateTitle} value={this.state.title}/>
                    </div>
                    <div> Content:
                        <input onChange={this.updateContent} value={this.state.content}/>
                    </div>
                    <div>{this.state.title}: {this.state.content}</div>
                </div>
    }

    updateTitle(event){
        this.setState({
            title: event.target.value
        })
    }

    updateContent(event){
        this.setState({
            content: event.target.value
        })
    }
}

ReactDOM.render(
    <Post title="message Title" content="MessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContentMessageContent"/>,
    document.getElementsByClassName("react")[0]
)
