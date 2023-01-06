import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h5>Terms & conditions</h5>
            <p>Go back to registration <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default TermsAndConditions;