const React = require("react");
const ReactDOM=require("react-dom");
const Common = require("./common.jsx");

//按钮样式
const type=["normal","primary","success","warning","danger","error","info"];
const size=["small","middle","large"];
const buttonStyle={
    type:type[6],
    size:size[1],
    value:"button",
    eventStyle:{
        click:function(){
            alert("click");
        }
    }
}
class Content extends React.Component{
    render(){
        return(
            <Common.Button type={buttonStyle.type} size={buttonStyle.size} value={buttonStyle.value} eventStyle={buttonStyle.eventStyle}/>
        )
    }
}
ReactDOM.render(<Content/>,document.getElementById("page"));