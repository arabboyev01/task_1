import React from 'react';
import { Form, Field } from 'react-final-form';
import { ChildComponentProps } from '../../types'
import { Box, InputLabel, Button, Typography } from '@mui/material'

const DumSignUp: React.FC<ChildComponentProps> = ({handleSubmit, styles}) => (
    <Box className={styles.mainBody}>
        <Box className={styles.container}>
            <Typography variant="h5" gutterBottom> Register User </Typography>
            <Form
                onSubmit={handleSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box className={styles.pop}>
                            <InputLabel >Firstname:</InputLabel>
                            <Field name="name" component="input" type="text" placeholder="Firstname" className={styles.paper}/>
                        </Box>
                        <Box className={styles.pop}>
                            <InputLabel>Email:</InputLabel>
                            <Field name="email" component="input" type="email" placeholder="Email" className={styles.paper}/>
                        </Box>
                        <Box className={styles.pop}>
                            <InputLabel>Password:</InputLabel>
                            <Field name="secret" component="input" type="password" placeholder="Password" className={styles.paper}/>
                        </Box>
                        <Button type="submit" className={styles.button}>Register</Button>
                    </form>
                )}
            />
        </Box>
    </Box>
);

export default DumSignUp;
