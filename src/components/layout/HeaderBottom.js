import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const style = theme => ({
  input: {
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "0",
    marginBottom: "0",
    focus: {
      border: "1.5px solid red"
    }
  },
  button: {
    padding: "16px 30px"
  }
});

class HeaderBottom extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Col xs="9" style={{ padding: "30px 0px" }}>
        <SForm row medium>
          <TextField
            className={classes.input}
            id="outlined-search"
            label="Что ищем?"
            type="search"
            margin="normal"
            variant="outlined"
          />      
       
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            >
            <i class="material-icons md-48">search</i>
          </Button>
        </SForm>       
      </Col>
    );
  }
}

const SForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  svg {
    width: 40px;
    height: 30px;
  }
`;

export default withStyles(style)(HeaderBottom);