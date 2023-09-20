import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';  // Added Button import
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Spinner from '../components/Spinner';

const Login = () => {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
  // Form submit
  const submitHandler = async(values) => {
    try{
        setLoading(true)
        const{data} = await axios.post('/users/login',values);
        setLoading(false)
        message.success('login success');
        localStorage.setItem('user', JSON.stringify({...data,password:''}))
        navigate('/')
    }
    catch(error){
        setLoading(false)
        message.error('something went wrong.')
    }
  };

    //prevent for login user
    useEffect(() => {
      if(localStorage.getItem('user')){
        navigate('/')
      }
    }, [navigate]);

  return (
    <>
      <Header />
      <div className='register-page'>
        {loading && <Spinner/>}
        <Form
          layout="vertical"
          onFinish={submitHandler}
        >
          <h1>Login Form</h1>  {/* Changed the heading to "Login Form" */}

          <Form.Item
            label="email"
            name="email"
            autoComplete="email"
            rules={[{ required: "true", type: 'email', message: 'Please input a valid email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            autoComplete="password"
            rules={[{ required: "true", message: 'Please input your password!' }]}
          >
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user? Click here to register.</Link> {/* Changed to register */}
            <Button type="primary" htmlType="submit">Login</Button> {/* Replaced button element with Ant Design's Button */}
          </div>
        </Form>
      </div>
      <Footer />
    </>
  )
}

export default Login;