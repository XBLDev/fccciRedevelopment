// import React, { PropTypes } from 'react';
import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({onSubmit,onChange,errors,user}) => (
  // <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">
        {localStorage.getItem('currentLanguage') == 'Eng' ? "Sign Up":"注册"}
        {/* Sign Up */}
      </h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText={localStorage.getItem('currentLanguage') == 'Eng' ? "Name":"用户名"}
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText={localStorage.getItem('currentLanguage') == 'Eng' ? "Email":"用户邮箱"}
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText={localStorage.getItem('currentLanguage') == 'Eng' ? "Password":"用户密码"}
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <br/>

      <div className="button-line">
        <RaisedButton 
          type="submit" 
          label={localStorage.getItem('currentLanguage') == 'Eng' ? "Create New Account":"创建新用户"}
          primary 
        />
      </div>

      <CardText>
        {localStorage.getItem('currentLanguage') == 'Eng' ? "Already have an account? ":"已经有账户了? "}
        {/* Already have an account?  */}
        <Link to={'/login'}>
        {localStorage.getItem('currentLanguage') == 'Eng' ? "Log in":"登录"}
          {/* Log in */}
        </Link>
        </CardText>
    </form>
  // </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
