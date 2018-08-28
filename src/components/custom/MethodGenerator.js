import React from "react";
import { Button, Label } from "semantic-ui-react";

export default props => {
  return (
    <div className="control-item">
      <Label>
        {props.id}. {props.label}
      </Label>
      <Button primary size="small" onClick={props.method}>
        {props.buttonText}
      </Button>
    </div>
  );
};
