import React from 'react'

class ActivityItem extends React.Component {
    render() {
        const {activity} = this.props; //ES6 desctructuring aka replaces `const activity = this.props.activity;

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

    }
}