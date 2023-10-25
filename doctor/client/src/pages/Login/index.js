import React from "react";
import { Divider, Form,Button, } from "antd";
import {GoogleCircleFilled }from "@ant-design/icons"
import{Link} from "react-router-dom"
import bgimg from "../../images/Loginbg2.jpg";


const Login = () => {
  return (
    <div
      className="flex h-screen bg-cover justify-center items-center "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="  flex bg-slate-400/40 w-2/6 justify-center shadow-2xl shadow-slate-200 rounded-md  ">
        <Form
          layout="vertical"
          wrapperCol={{ span: 12 }}
          className=" justify-center  font-[apple-system,BlinkMacSystemFont]  w-max text-center"
        >
          <h1 className="text-3xl m-4 ">Welcome Back Please Login 😊</h1>
          <Form.Item
            className="text-center"
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please Enter Your Email" }]}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                height: "40px",
                width: "450px",
                border: "1px solid #8a8a8a",
                paddingLeft: "15px",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please Enter Your Password" }]}
          >
            <input
              type="password"
              placeholder="Enter Your Password"
              style={{
                height: "40px",
                width: "450px",
                border: "1px solid #8a8a8a",
                paddingLeft: "15px",
              }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
            <Button type="primary" htmlType="submit" block className="border-sky-700 border-solid bg-sky-600">
              Submit
            </Button>
          </Form.Item>
          <Divider style={{ borderColor: "black" }}>Or Login Using </Divider>
          <div>
          <GoogleCircleFilled className="text-2xl text-neutral-950 hover:text-red-600"/>
          </div>
          <Link to="/register" className="text-base text-neutral-950 hover:text-red-600" >
            {" "}
          Do not have a account? Register</Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
