import React from 'react';
import './UserInfo.css'

const UserInfo = ({user}) => (
  <div className="user__info">
    <img 
        src={user.avatar_url}
        width = "130"
        height = "130"
        className = "p-2 avatar"
        alt = "profileimage"
    />
    <div className="user__infoDetail">
            <h5>{user.name}</h5>
          <div className="user__infos">

            {user.location && (
              <div className="user__infoDetail">
                <i className="fa fa-map-marker pr-1" />
                <span>{user.location} </span>
              </div>
            )}
            
          </div>
    </div>
  </div>
)

export default UserInfo
