import React from 'react';
import {Form, Input} from "antd";
import {Button} from "antd";
import {Link} from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const  navigate = useNavigate();
    const onFinish = async(values) => {
        try{
            const response = await axios.post( '/api/users/register', values);
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Redirecting to the login page");
                navigate("/login");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
        
    }
    return (
        <div className='authentication' >
            <div className='authentication-form card p-3'>
                <h1 className ='card-title'>REGISTER HERE </h1>
                <Form layout = 'vertical' onFinish = {onFinish}>
                    <Form.Item label = 'Name' name= 'Name'>
                        <Input placeholder = 'Enter your name'/>
                    </Form.Item>

                    <Form.Item label = 'Student Number' name= 'Student Number'>
                        <Input placeholder = 'Enter your student number'/>
                    </Form.Item>

                    <Form.Item label = 'Password' name= 'Password'>
                        <Input placeholder = 'Enter your password'/>
                    </Form.Item>

                    <Button className = 'primary-button my-3' htmlType = 'submit'>REGISTER</Button>
                    <Link to='/Login' className='anchor mt-3'>CLICK HERE TO LOGIN</Link>
                </Form>


            </div>

        </div>
    );
}
export default Register;
