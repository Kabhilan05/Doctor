import React from "react";
import { Divider, Form } from "antd";
import bgimg from "../../images/Loginbg2.jpg";
import Button from "../../components/Button";
const Login = () => {
  return (
    <div
      className="flex h-screen bg-cover justify-center items-center "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="  flex bg-slate-400/40 w-2/6 justify-center shadow-2xl shadow-slate-200 rounded-md  ">
        <Form
          layout="vertical"
          className=" justify-center  font-[apple-system,BlinkMacSystemFont] mt-2 w-full"
        >
          <h1 className="text-2xl">
            Welcome Back <br></br>Please Login 😊
          </h1>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please Enter Your Email" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please Enter Your Password" }]}
          >
            <input type="password" />
          </Form.Item>
          <Button fullWidth title="Login" type="submit"  />
          <Divider style={{borderColor:"black"}}>or Lodin with </Divider>
        </Form>
      </div>
    </div>
  );
};

export default Login;
