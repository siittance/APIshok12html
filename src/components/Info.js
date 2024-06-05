import React from "react";

class Info extends React.Component{
    render(){
        return(
            <div>
                <h3 className="card-title">{this.props.name}</h3>
                <img src={this.props.url} width="600px" height="400px" alt=""/>
                <p>{this.props.query}</p>
                <p><h3>Описание:</h3> {this.props.description}</p>
                <p><h3>Возрастной рейтинг: {this.props.ageRating}</h3></p>
            </div>
        )
    }
}
export default Info;