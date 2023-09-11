import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';  // Added Button import
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Register = () => {

    const navigate = useNavigate();
    const[loading,setLoading] = useState(false)
  // Form submit
  const submitHandler = async(values) => {
    try{
        setLoading(true);
        await axios.post('/users/register', values);
        message.success('Registration Successful');
        setLoading(false);
        navigate('/login');

    }
    catch(error){
        setLoading(false);
        message.error('something went wrong.');
    }
  };

  return (
    <>
      <Header />
      <div className='register-page'>
        {loading && <Spinner/>}
        <Form
          layout="vertical"
          onFinish={submitHandler}
        >
          <h1>Register Form</h1>  {/* Changed the heading to "Login Form" */}
          <Form.Item
            label="name"
            name="name"
            autoComplete="name"

          >
            <Input />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            autoComplete="email"

          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            autoComplete="password"

          >
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already registered? click here to Login.</Link> {/* Changed to register */}
            <Button type="primary" htmlType="submit">Register</Button> {/* Replaced button element with Ant Design's Button */}
          </div>
        </Form>
      </div>
      <Footer />
    </>
  )
}

export default Register;