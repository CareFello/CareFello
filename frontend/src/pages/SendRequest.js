import React from 'react'
import Sidebar from '../components/Sidebar'
import '../index.css';
import Header from '../components/Header'
import { Box } from '@mui/material'
import { Button, Card, Checkbox, Datepicker, Label, TextInput, Select } from 'flowbite-react';
import "../styles/form.css"
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import { Grid } from '@mui/material';


function SendRequest() {
    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <br />
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Grid item xs={9} spacing={1}>
                                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
                                    Noteworthy technology acquisitions 2021
                                </h3>
                                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Grid>
                            <Box height={80} />
                            <Grid item xs={9} spacing={1}>
                                <Card className="max-w-sm">

                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        <p>
                                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                        </p>
                                    </p>
                                    <Button>
                                        Read more
                                    </Button>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <div className="mb-2 block text-left">
                                    <Label
                                        htmlFor="small"
                                        value="Elder Name"
                                    />
                                </div>
                                <TextInput
                                    id="name"
                                    sizing="md"
                                    type="text"
                                    className='mb-2'
                                    placeholder='Enter Full Name'
                                />
                                <div className="mb-2 block text-left">
                                    <Label
                                        htmlFor="small"
                                        value="NIC No"
                                    />
                                </div>
                                <TextInput
                                    id="nic"
                                    sizing="md"
                                    type="text"
                                    className='mb-2'
                                    placeholder='Enter NIC No'
                                />
                                <div className="mb-2 block text-left">
                                    <Label
                                        htmlFor="small"
                                        value="Gender"
                                    />
                                    <Select
                                        id="gender"
                                        required
                                        defaultValue=""
                                        className='mb-2'
                                    >
                                        <option value="" disabled hidden>
                                            Choose gender
                                        </option>
                                        <option>
                                            Male
                                        </option>
                                        <option>
                                            Female
                                        </option>

                                    </Select>
                                </div>

                                <div className="mb-2 block text-left">
                                    <Label
                                        htmlFor="small"
                                        value="Birthday"
                                    />
                                    <Datepicker
                                        className='mb-2'
                                        value='dob' />
                                </div>
                                <div className="mb-2 block text-left">
                                    <Label
                                        htmlFor="small"
                                        value="Relationship to Elder"
                                    />
                                    <Select
                                        id="relationship"
                                        required
                                        defaultValue=""
                                        className='mb-4'
                                    >
                                        <option value="" disabled hidden>
                                            Choose a relationship
                                        </option>
                                        <option>
                                            Father
                                        </option>
                                        <option>
                                            Mother
                                        </option>
                                        <option>
                                            Father-in-law
                                        </option>
                                        <option>
                                            Mother-in-law
                                        </option>
                                        <option>
                                            Other
                                        </option>
                                    </Select>
                                </div>
                                <div>
                                    <Button as="span" className="cursor-pointer">Span Button</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default SendRequest;


