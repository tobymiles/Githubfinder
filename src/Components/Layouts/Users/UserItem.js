import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

  // This is called destructing in react.
const UserItem = ({user: {login, avatar_url, html_url}}) => {
        return (
            <div>
                <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
                <h4>{login}</h4>
                <div>
                <Link  to={`/user/${login}`} className="btn btn-dark btn-sm my-1">View more</Link>
                </div>
                </div>
            </div>
        )
    }

 UserItem.propTypes = {
     user: PropTypes.object.isRequired,
}   

export default UserItem
