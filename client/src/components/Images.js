import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

const Images  = (props) => {
    return (
        <div>
            {
                props.props.map((image, index) => (

                        <li key={ index } >
                            <img key={ index } src={ image + "&output=embed" } alt="flicker_image" className="card card-body mb-3" width="450px"
                            height="450px"/>
                        </li>

                    )
                )
            }
        </div>
    );
}

export default Images;