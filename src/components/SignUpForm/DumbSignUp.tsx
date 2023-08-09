import React from 'react';
import { Form, Field } from 'react-final-form';
import { ChildComponentProps } from '../../types'
import { Box, InputLabel, Button } from '@mui/material'

const DumSignUp: React.FC<ChildComponentProps> = ({handleSubmit}) => (
    <Box>
      <h2>Register User</h2>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
              <Box>
              <InputLabel>Firstname:</InputLabel>
              <Field name="name" component="input" type="text" placeholder="Firstname"/>
            </Box>
            <Box>
              <InputLabel>Email:</InputLabel>
              <Field name="email" component="input" type="email" placeholder="Email"/>
            </Box>
            <Box>
              <InputLabel>Password:</InputLabel>
              <Field name="password" component="input" type="password" placeholder="Password"/>
            </Box>
            <Button type="submit">Register</Button>
          </form>
        )}
      />
    </Box>
  );

export default DumSignUp;
