import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config/var';
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";

class Footer extends Component {
    render() {
      return (
        <SFooter>
          <Container>
            <SFooterWrapper>
              <div>
                <Link to="/">OBYAVA.kg</Link>
              </div>
              <SFooterUl>
                <li>
                  <Link to="/">Вопросы-ответы</Link>
                </li>
                <li>
                  <Link to="/">Помощь</Link>
                </li>
              </SFooterUl>
              <SFooterUl>
                <li>
                  <Link to="/">Правила подачи объявлений</Link>
                </li>
                <li>
                  <Link to="/">Пользовательское соглашение</Link>
                </li>
              </SFooterUl>
              <SFooterUl>
                <li>
                  <Link to="/">Обратная связь</Link>
                </li>
                <li>
                  <Link to="/">Все объявления</Link>
                </li>
              </SFooterUl>
              <SFooterContacts>
                <p>Мы в соцсетях:</p>
                <SFooterIcons>
                  <a href="/">
                    <TelegramIcon />
                  </a>
                  <a href="/">
                    <FacebookIcon />
                  </a>
  
                  <a href="/">
                    <InstagramIcon />
                  </a>
                </SFooterIcons>
              </SFooterContacts>
            </SFooterWrapper>
          </Container>
        </SFooter>
      );
    }
  }
  
  const SFooter = styled.footer`
    padding: 2em 0;
    width: 100%;
    background-color: #000015;
    color: #fefefe;
  `;
  
  const SFooterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 1em;
    a {
      color: ${colors.white};
      font-size: 16px;
      text-decoration: none;
      font-weight: 600;
      &:hover {
        color: ${colors.blue};
      }
    }
  `;
  
  const SFooterUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    a {
      font-weight: 400;
    }
  `;
  
  const SFooterContacts = styled.div`
    display: flex;
    flex-direction: column;
    p {
      margin-bottom: 5px;
    }
  `;
  const SFooterIcons = styled.div`
    display: flex;
    a {
      width: 2em;
      height: 2em;
      margin-right: 0.5em;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  `;
export default Footer;