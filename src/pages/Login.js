import React from 'react';
import {Form, Input} from "antd";
import {Button} from "antd";
import {Link} from "react-router-dom";
import {toast} from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
     
    const onFinish = async(values) => {
        try {
            const response = await axios.post('/api/user/login', values);
            if (response.data.success) {
                toast.success(response.data.message);
                toast( "Redirecting you to the home page");
                localStorage.setItem("token", response.data.data);
                navigate('/');
            }  else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error( "Something went wrong");
        }
    };
    return (
        <div className='authentication' >
            <div className='authentication-form card p-3'>
                <h1 className ='card-title'>Login!</h1>
                <Form layout = 'vertical' onFinish = {onFinish}>
                    

                    <Form.Item label = 'Student Number' name= 'Student Number'>
                        <Input placeholder = 'Enter your student Number'/>
                    </Form.Item>

                    <Form.Item label = 'Password' name= 'Password'>
                        <Input placeholder = 'Enter your password' type = 'password'/>
                    </Form.Item>

                    <Button className = 'primary-button my-3' htmlType = 'submit'>LOGIN</Button>
                    <Link to='/Register' className='anchor mt-3'>CLICK HERE TO REGISTER</Link>
                </Form>


            </div>

        </div>
    );
}
export default Login;
