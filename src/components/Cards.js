
import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from './logo.png';
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {FlippingCard, FlippingCardBack,FlippingCardFront  }from 'react-ui-cards'
import MobileStepper from '@material-ui/core/MobileStepper';

class Cards extends React.Component  {
  render() {


  return(
    <div className='card-container'>
      <FlippingCard>
        <FlippingCardBack>
          <div
            style={{
              width: '100%',
              height: '100%',
            }}>

          Content
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <div
            style={{
              width: '100%',
              height: '100%',

            }}>
            Is my penis too small

            Dear Auntie Stella

I am a guy about to turn 14 and there is a problem which is really bothering me. It’s my penis which is too small. I am worried because it is not growing like others I have seen and that this will affect my life when I have sex later. Please tell me Auntie, what is the correct size penis for a 14-year-old boy because this is making me miserable.
Peter
          </div>
        </FlippingCardFront>
      </FlippingCard>
      <FlippingCard>
        <FlippingCardBack>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: 'url(https://i.imgur.com/m0GnZH3.jpg)'
            }}>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: 'url(https://i.imgur.com/E1jz6WQ.jpg)'
            }}>
          </div>
        </FlippingCardFront>
      </FlippingCard>
      <FlippingCard>
        <FlippingCardBack>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: 'url(https://i.imgur.com/1abAoUz.jpg)'
            }}>
          </div>
        </FlippingCardBack>
        <FlippingCardFront>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: 'url(https://i.imgur.com/UjbK2Wb.png)'
            }}>
          </div>
        </FlippingCardFront>
      </FlippingCard>
    </div>
)
}}
export default Cards;
