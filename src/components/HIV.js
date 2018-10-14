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

class HIV extends React.Component  {
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


                <Typography
                  variant="body1"
                  paragraph={true}
                  style={{ padding: "15px", fontSize: "16px" }}
                >
                Dear Peter


                <br/>

                Don’t worry – there is nothing wrong with you. Boys’ penises start growing during puberty, which is usually between 11 and 15 years but can begin earlier or later. It’s natural for teenage boys to compare their penises, but since everyone reaches puberty at different times, it’s normal for boys of the same age to have different size penises.
    <br/>
              Auntie Stella



                </Typography>
              </div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: '100%',
                  height: '100%',

                }}>
                <Typography
                  variant="button"
                  align="left"
                  style={{ padding: "5px", fontSize: "16px" }}
                >
                  Q: Is my penis too small’?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph={true}
                  style={{ padding: "5px", fontSize: "16px" }}
                >
                Dear Auntie Stella
                <br/>

    I am a guy about to turn 14 and there is a problem which is really bothering me. It’s my penis which is too small. I am worried because it is not growing like others I have seen and that this will affect my life when I have sex later. Please tell me Auntie, what is the correct size penis for a 14-year-old boy because this is making me miserable.
    <br/>
    Peter



                </Typography>
              </div>
            </FlippingCardFront>
          </FlippingCard>

        </div>
    )
    }}
export default HIV;
