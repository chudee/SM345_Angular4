import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

import BackgroundImage from 'imgs/bg1.JPG';
import Logo1 from 'imgs/Logo1.jpg';

const styles = theme => ({
    Login: {
        borderRadius: '8px',
        width: '350px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255,255,255, 1)',
    },
    Card: {
        width: '268px',
        margin: '0 auto',
        boxShadow: 'none',
        paddingBottom: '50px',
    },
    CardMedia: {
        height: '200px',
        opacity: '0.8',
    },
    Icon: {
        display: 'block',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black'
    },
    TextField: {
        width: '100%',
        color: '#333',
        borderRadius: '3px',
        marginTop: '10px',
        padding: '5px 10px 5px 10px',
        boxSizing: 'border-box',
    },
    Button: {
        width: '100%',
        boxSizing: 'border-box',
    },
    Link: {
        width: '100%',
        margin: '4px 20px',
        textDecoration: 'none',
    }
});


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    animation: scrollBgGridLinks 35s linear;
    -mozkit-animation: scrollBgGridLinks 35s linear;
    -webkit-animation: scrollBgGridLinks 35s linear;
    animation-fill-mode: forwards;
    -mozkit-animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
`;

const Shadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: -1;
`;

const TextAlign = styled.div`
    > div {
        > div {
            > input {
                text-align: center;
            }
        }
    }
`;

const Login = ({ classes, handleAuth }) => {
    return (
        <Container>
            <div className={classes.Login}>
                <Card className={classes.Card}>
                    <CardMedia
                        className={classes.CardMedia}
                        image={Logo1}
                        title="SMLogo">
                    </CardMedia>

                    <CardContent style={{paddingTop: 0}}>
                        <TextAlign>
                            <TextField 
                                id="id"
                                type="id"
                                placeholder="(직원,교수,학생) 고유번호"
                                className={classes.TextField}
                                autoComplete="current-password"
                            />
                        </TextAlign>
                        <TextAlign>
                            <TextField 
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                className={classes.TextField}
                                autoComplete="current-password"
                            />
                        </TextAlign>
                    </CardContent>
                    <CardActions>
                        <Link to="/dashboard" className={classes.Link}>
                            <Button 
                                raised 
                                color="accent" 
                                className={classes.Button}
                                onClick={handleAuth}
                            >
                                로그인
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            <Shadow />
        </Container> 
    );
};

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login);

