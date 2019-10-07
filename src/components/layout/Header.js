import React, { Component } from "react";
import { Container } from "reactstrap";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { theme, colors } from "../../config/var";

const styles = theme => ({
    button: {      
      borderRadius: "10",
      "&$hover": {
        backgroundColor: "white",
      }
    }
  });
  
  class Header extends Component {
    render() { 
      const { classes } = this.props;     
      return (
        <SHeaderUpper>
          <Container>
            <ThemeProvider theme={theme}>
              <SHeaderUpWrapper>
                <SHeaderLogo>
                  <Link to="/">OBYAVA</Link>
                </SHeaderLogo>
                <BtnGroup>                 
                    <>
                      <Button
                        className={classes.button}
                        variant="outlined"
                        color="primary"
                      >
                        <Link
                          style={{ color: "inherit", textDecoration: "none" }}
                          to="/login"
                        >
                          Войти
                        </Link>
                      </Button>
    
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                      >
                        <Link
                          style={{ color: "inherit", textDecoration: "none" }}
                          to="/registration"
                        >
                          Регистрация
                        </Link>
                      </Button>
                    </>
              
                </BtnGroup>
              </SHeaderUpWrapper>
            </ThemeProvider>
          </Container>
        </SHeaderUpper>
      );
    }
  }
  
  const BtnGroup = styled.div`
    display: flex;
    width: 18%;
    justify-content: space-between;
  `;
  
  const SHeaderUpper = styled.div`
    top: 0;
    right: 0;
    position: sticky;
    background: ${colors.white};
    z-index: 10;
    border-bottom: 1px solid ${colors.background_grey};
    box-shadow: 1px 1px 5px ${colors.grey};
  `;
  
  const SHeaderUpWrapper = styled.div`
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${props => props.theme.font};
  `;
  
  const SHeaderLogo = styled.div`
    a {
      color: ${colors.dark_blue};
      font-weight: 600;
      &:hover {
        text-decoration: none;
        color: ${colors.yellow};
      }
    }
  `;
export default withStyles(styles)(Header);


