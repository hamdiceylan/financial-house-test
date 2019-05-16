import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Header, Form, Segment, Button, Label, Image } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput/TextInput';
import { login } from '../authActions'
import { withRouter } from 'react-router-dom'

const actions = {
    login
}

export class LoginPage extends Component {
  render() {
    const {login, handleSubmit, error, history} = this.props;
    return (
      <Container className='main'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='red' textAlign='center'>
            <Image style={{height:'80px', width: '250px'}} src='assets/financial-house-logo.png' />
            </Header>
            <Form error size="large" onSubmit={handleSubmit((creds) => login(creds,history))}>
              <Segment>
                <h2>Log-in to your account</h2>
                <Field
                  name="email"
                  component={TextInput}
                  type="text"
                  placeholder="Email Address"
                />
                <Field
                  name="password"
                  component={TextInput}
                  type="password"
                  placeholder="password"
                />
                {error && <Label basic color='red'>{error}</Label>}
                <Button fluid size="large" color="red" className="btn-login">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(connect(null,actions)(reduxForm({form: 'loginForm'})(LoginPage)));
