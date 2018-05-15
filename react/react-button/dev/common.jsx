const React=require("react");
class Button extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.setState({
            events:this.props.eventStyle
        });
    }
    render(){
        const type=this.props.type?this.props.type:"normal";
        const size=this.props.size?this.props.size:"middle";
        const value=this.props.value?this.props.value:"button";
        const events=this.props.eventStyle?this.props.eventStyle:"";
        return (
            <div className={`btn-${type} btn-${size}`} onClick={events.click?events.click:""} onMouseMove={events.mousemove?events.mousemove:""}  onMouseOut={events.mouseout?events.mouseout:""} >{value}</div>
        )
    }
}
exports.Button=Button;