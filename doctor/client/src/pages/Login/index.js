import React from 'react'
import {Form,message} from "antd"
const Login = () => {
  return (
    <div>
        <Form layout='horizontal'>
            <Form.Item label = "Email"
                name="email"
                rules={[{required:true, message:"Please Enter your Email"}]}>
                    <input type='email'/>

            </Form.Item>

        </Form>
    </div>
  )
}

export default Login