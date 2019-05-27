import React, { Component } from 'react';
import Film from "./Film";

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        const filmNodes = this.props.data.map((film) => {
            return (
                <Film name={film.name} url={film.url} key={film.id}></Film>
            )
        })
        return ( 
            <div>
                <ol>
                    {filmNodes}
                </ol>
            </div>
         );
    }
}
 
export default FilmList;