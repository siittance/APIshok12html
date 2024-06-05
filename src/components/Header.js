import React from "react";

class Header extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.films}>
                <div class="f">
                    <input name="query" class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="button" type="submit">Топ 10</button>
                </div>
            </form>
        )
    }
}

export default Header