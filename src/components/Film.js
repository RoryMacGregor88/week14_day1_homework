import React, { Component } from 'react';

class Film extends Component {
    render() { 
        return ( 
            <div>
                <a href={this.props.url}>
                    {this.props.name}
                </a>
            </div>
         );
    }
}
 
export default Film;