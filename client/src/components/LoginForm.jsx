// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({onSubmit,onChange,errors,successMessage,user}) => (
  // <div className='centerAreaLeft'>
    // <Card className="container">

    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">
        {localStorage.getItem('currentLanguage') == 'Eng' ? "Login":"登录"}
        {/* localStorage.getItem('currentLanguage') == 'Eng' ? "ABOUT US":"关于我们" */}
      </h2> 

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText={localStorage.getItem('currentLanguage') == 'Eng' ? "Email":"邮箱"}
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText={localStorage.getItem('currentLanguage') == 'Eng' ? "Password":"密码"}
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
          label={localStorage.getItem('currentLanguage') == 'Eng' ? "LOG IN":"登录"} 
          primary 
        />
      </div>

      <CardText>
          {localStorage.getItem('currentLanguage') == 'Eng' ? "Don't have an account? ":"没有已注册账户? "} 
          {/* Don't have an account?  */}
          <Link to={'/signup'}>
            {localStorage.getItem('currentLanguage') == 'Eng' ? "Create one":"新用户注册"} 
          </Link>
      </CardText>

    </form>
  //  </Card>
  // </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
