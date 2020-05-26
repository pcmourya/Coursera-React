import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import dateFormat from "dateformat";

class DishDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: this.props.dish,
    };
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComment(dish) {
    if (dish != null) {
      return (
        <div>
          <ul>
            {dish.comments.map((comments) => {
              const date = comments.date;
              return (
                <div>
                  {comments.comment}
                  <br />
                  <br />
                  -- {comments.author} ,{dateFormat(date, "mmmm dS, yyyy")}{" "}
                  <br />
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    // const dish=this.props.dish
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-4 col-md-5 m-1">
              <div>
                <h4>Comments</h4>
              </div>
              {this.renderComment(this.props.dish)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetailComponent;
