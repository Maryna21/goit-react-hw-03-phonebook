import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({value, onChangeFilter}){
    return( 
        <div>
            <p>Find contacts by name</p>
            <input type="name" value={value} onChange={e => onChangeFilter(e.target.value)}/>
        </div>
    )
}
Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
 };