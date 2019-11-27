import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import { Theme, createStyles } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import AsyncSelect from "react-select/async";

import Routes from "../../utils/Routes";
import Utils from "../../utils/Utils";

import "../utils/Select.css";
import Constants from "./../../utils/Constants";
import ZTextField from "../utils/form/ZTextField";

import ZValidator from "../utils/form/ZValidator";
// import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  Layout,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Typography,
  Select
} from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import { Row, Col } from "antd";
const { Option } = Select;

const styles = (theme: Theme) =>
  createStyles({
    reactSelect: {
      marginTop: "8px",
      height: "43px"
    },
    resetButton: {
      width: "100%"
    }
  });

interface FormState {
  username: string;
  email: string;
  id?: number;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  telephone: string;
  genderOptions: any;
  roleOptions: any;
  gender: any;
  validationErrors: any;
  isFormValid: boolean;
  useDefaultPwd: boolean;
  password?: string;
}

interface FormProps extends FormComponentProps {
  user?: any;
  mode: string;
  action?: any;
  actionPending?: boolean;
  actionFulfilled?: boolean;
}

class UserForm extends React.Component<FormProps> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     email: "",
  //     id: -1,
  //     firstname: "",
  //     lastname: "",
  //     address1: "",
  //     address2: "",
  //     telephone: "",
  //     genderOptions: [],
  //     roleOptions: [],
  //     gender: "",
  //     validationErrors: {},
  //     isFormValid: true,
  //     useDefaultPwd: true,
  //     password: ""
  //   };
  // }
  // componentDidMount() {
  //   const { user, mode } = this.props;
  //   if (mode != "new") {
  //     console.log(user);
  //     let roleOptions = user.roles.map((role: any) => {
  //       return {
  //         value: role.id,
  //         label: role.code
  //       };
  //     });
  //     console.log(roleOptions);
  //     this.setState({
  //       username: user.username,
  //       email: user.email,
  //       id: user.id,
  //       gender: user.gender,
  //       firstname: user.firstname,
  //       lastname: user.lastname,
  //       address1: user.address1,
  //       address2: user.address2,
  //       telephone: user.telephone,
  //       genderOptions: [
  //         {
  //           value: user.gender,
  //           label: user.gender.toUpperCase()
  //         }
  //       ],
  //       roleOptions: roleOptions,
  //       validationErrors: {}
  //     });
  //   }
  // }

  // handleChange(event: any) {
  //   let {
  //     target: { name, value }
  //   } = event;

  //   if (name === "useDefaultPwd") {
  //     value = event.target.checked;
  //   }

  //   // Ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
  //   this.setState({ [name]: value } as Pick<FormState, keyof FormState>, () => {
  //     // this.validateForm(name);
  //   });
  // }

  // validateForm(field: string) {
  //   if (field === "username") {
  //     if (_.isNil(this.state.username) || this.state.username === "") {
  //       this.setFormError("username", "Username can not by empty!");
  //     } else {
  //       this.setFormError("username", undefined);
  //     }
  //   }

  //   if (field === "email") {
  //     if (_.isNil(this.state.email) || this.state.email === "") {
  //       this.setFormError("email", "Email can not by empty!");
  //     } else {
  //       this.setFormError("email", undefined);
  //     }
  //   }
  // }

  // validationCallback({
  //   name,
  //   isValid,
  //   errorMsg
  // }: {
  //   name: string;
  //   isValid: boolean;
  //   errorMsg: string;
  // }) {
  //   this.setFormError(name, errorMsg);

  //   let prevValidationErrors = this.state.validationErrors;

  //   prevValidationErrors[name] = isValid;

  //   let isFormValid = true;

  //   Object.keys(prevValidationErrors).forEach(key => {
  //     isFormValid = isFormValid && prevValidationErrors[key];
  //   });

  //   this.setState({
  //     isFormValid: isFormValid
  //   });
  // }

  // setFormError(field: string, errorMsg: string) {
  //   let next: any = this.state.validationErrors;

  //   next[field] = errorMsg;

  //   this.setState({
  //     validationErrors: next
  //   });
  // }

  // handleSubmit() {
  //   console.log(this.state);
  //   if (!this.state.isFormValid) {
  //     return;
  //   }
  //   if (this.props.mode == Constants.FORM.MODE.UPDATE) {
  //     let _user: any = _.cloneDeep(this.state);
  //     console.log(_user);

  //     if (!_.isNil(_user.genderOptions.value)) {
  //       _user.gender = _user.genderOptions.value;
  //     }

  //     delete _user["genderOptions"];

  //     _user.roles = _user.roleOptions.map((roleOption: any) => {
  //       return {
  //         id: roleOption.value,
  //         code: roleOption.label
  //       };
  //     });

  //     delete _user["roleOptions"];

  //     delete _user["password"];

  //     this.props.action(_user);
  //   }

  //   if (this.props.mode == Constants.FORM.MODE.NEW) {
  //     let _user: any = _.cloneDeep(this.state);
  //     console.log(_user);

  //     if (!_.isNil(_user.genderOptions.value)) {
  //       _user.gender = _user.genderOptions.value;
  //     }

  //     delete _user["genderOptions"];

  //     _user.roles = _user.roleOptions.map((roleOption: any) => {
  //       return {
  //         id: roleOption.value,
  //         code: roleOption.label
  //       };
  //     });

  //     delete _user["roleOptions"];

  //     if (this.state.useDefaultPwd) {
  //       _user.password = `welcome@${new Date().getFullYear()}`;
  //     }

  //     this.props.action(_user);
  //   }
  // }

  // handleGenderOptionChange = (newValue: any) => {
  //   this.setState({
  //     genderOptions: newValue
  //   });
  // };

  // handleRoleOptionChange = (newValue: any) => {
  //   this.setState({
  //     roleOptions: newValue
  //   });
  // };

  // // FIXME Should we load gender dynamically
  // loadGenderOptions = async (inputValue: any, callback: any) => {
  //   return [
  //     {
  //       value: "M",
  //       label: "M"
  //     },
  //     {
  //       value: "F",
  //       label: "F"
  //     }
  //   ];
  // };

  // loadRoleOptions = async (inputValue: any, callback: any) => {
  //   const url = `/api/users/roles${"?keyword=" + inputValue}`;
  //   let token = sessionStorage.getItem("token");

  //   let json: any = [];

  //   try {
  //     let response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: "application/json"
  //       }
  //     });

  //     let json = await response.json();

  //     if (json.status == 403) {
  //       Utils.logout();
  //       location.href = Routes.USER.LOGIN;
  //       return json;
  //     }

  //     json = json._embedded.roleList.map((item: any) => {
  //       return {
  //         value: item.id,
  //         label: item.code
  //       };
  //     });
  //     console.log(json);
  //     return json;
  //   } catch (error) {
  //     // console.log(error);
  //   }
  //   console.log(json);
  //   return json;
  // };
  // hasError(field: string) {
  //   return !_.isNil(this.state.validationErrors[field]);
  // }

  handleSubmit = (e: any) => {
    event.preventDefault();

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.props.dispatch(
        //   fetchAuthInfo({
        //     headers: {
        //       Authorization: `Basic ${btoa(
        //         `${values.username}:${values.password}`
        //       )}`
        //     }
        //   })
        // );
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { user, mode, actionPending, actionFulfilled } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div style={{ maxWidth: "500px" }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Id">
            {getFieldDecorator("id", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input disabled={true} />)}
          </Form.Item>
          <Form.Item label="Username">
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Telephone">
            {getFieldDecorator("telephone", {
              rules: [
                { required: true, message: "Please input your telephone!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Gender">
            {getFieldDecorator("gender", {
              initialValue: "M",
              rules: [{ required: true, message: "Please input your gender!" }]
            })(
              <Select style={{ width: "100%" }}>
                <Option value="M">Male</Option>
                <Option value="F">female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="First Name">
            {getFieldDecorator("firstName", {
              rules: [
                { required: true, message: "Please input your firstname!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator("lastName", {
              rules: [
                { required: true, message: "Please input your lastname!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Address1">
            {getFieldDecorator("address1", {
              rules: [
                { required: true, message: "Please input your address1!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Address2">
            {getFieldDecorator("address2", {
              rules: [
                { required: true, message: "Please input your address2!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Role">
            {getFieldDecorator("roles", {
              initialValue: [],
              rules: [{ required: true, message: "Please input your roles!" }]
            })(
              <Select style={{ width: "100%" }} mode="multiple">
                <Option value="USER">USER</Option>
                <Option value="ADMIN">ADMIN</Option>
                <Option value="VENDOR">VENDOR</Option>
                <Option value="TEACHER">TEACHER</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedUserForm = Form.create<FormProps>({ name: "user_form" })(UserForm);

export default WrappedUserForm;
