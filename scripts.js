class HelloWorld extends React.component{
    constructor() {
        super();
    }

    render(){
        return  <div>Hello World!</div>
    }
}

ReactDOM.render(
    <HelloWorld />, document.getElementsByClassName("react")[0];
)
