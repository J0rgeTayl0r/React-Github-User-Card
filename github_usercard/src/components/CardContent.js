import React from 'react';
import { Card } from 'reactstrap';


class CardContent extends React.Component {
    // constructor(props) {
    //     super(props);
            
       
    // }
    render() {
        console.log("rite now",this.props.cardConProps)
        return (
          
           <>
            {this.props.cardConProps.map((follower) => (
              <Card key={follower.id}>
                <div>
                  <img
                    src={follower.avatar_url}
                    alt={`pic of ${follower.login}`}
                  />
                </div>
                <div>
                  <div>{follower.login}</div>
                  <div>{follower.name}</div>
                  <div>{follower.html_url}</div>
                </div>
              </Card>
            ))}
          </>
        );
    }    
}
export default CardContent;