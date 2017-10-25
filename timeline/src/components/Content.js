// test component courtesy of https://www.fullstackreact.com/30-days-of-react/day-5/

import React, {Component} from 'react';

class Content extends Component {
    render() {
        const {activities} = this.props; //ES6 destructuring
      return (
        <div className="content">
          <div className="line"></div>
  
        {/* Timeline item */}
        {activities.map((activity) => {
            return (
                <div className="item">
                <div className="avatar">
                  <img 
                        alt={activity.text}
                        src={activity.user.avatar} />
                  {activity.user.name}
                </div>
      
                <span className="time">
                  {activity.timestamp}
                </span>
                <p>{activity.text}</p>
                <div className="commentCount">
                  {activity.comments.length}
                </div>
              </div>
    
            );
        })}
  
        </div>
      )
    }
  }

  export default Content