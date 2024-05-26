function Container(props){
    var classes="container "+props.className
    return <div className={classes}>{props.children}</div>
}
export default Container;
