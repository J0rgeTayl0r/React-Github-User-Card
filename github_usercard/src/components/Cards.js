import React from 'react';
import { Card } from 'reactstrap';
class FirstCard extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    // console.log('firstcard props',props)
    render() {
        console.log('here now', this.props.cardProps)
        return (
          <Card>
            <div className="image">
              <img
                src={this.props.cardProps.avatar_url}
                alt={`photo of ${this.props.cardProps.name}`}
              />
            </div>
            <div>
              <div>{this.props.cardProps.name}</div>
              <div>{this.props.cardProps.html_url}</div>
        
              <div>{this.props.cardProps.followers} Followers</div>
              <div>Following {this.props.cardProps.following}</div>
              <div>My Location is {this.props.cardProps.location}</div>
            </div>
          </Card>
        );
    }
}
export default FirstCard;