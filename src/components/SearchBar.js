import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ value, onInput }) {
    return (
        <InputGroup className="mb-3 mt-3" size="lg">
            <Form.Control type="text" placeholder="Search" value={value}
                onInput={onInput} />
            <InputGroup.Append>
                <InputGroup.Text>
                    <span className="fa fa-search"></span>
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}
export default SearchBar;