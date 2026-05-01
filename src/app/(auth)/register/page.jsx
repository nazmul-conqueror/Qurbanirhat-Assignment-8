'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField,  } from '@heroui/react';
import React from 'react';

const RegisterPage = () => {
const onSubmit =() =>{

}

    return (
       <Form
      className="flex  mx-auto flex-col gap-4 mt-6 p-6"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="name"
        type="text"
      
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="image"
        type="url"
     
      >
        <Label>Image Url</Label>
        <Input placeholder="Enter Image Url" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
        
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    );
};

export default RegisterPage;