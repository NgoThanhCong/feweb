import React from "react";
import NavBar from "../../NavBar";
import { Container, Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function SetDate() {
    return (
        <>
            <body>
                <header>
                    <NavBar />
                </header>
                
                <Container maxWidth="md">
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6} >
                            <Item>1</Item>
                        </Grid>
                    </Grid>
                </Container>
            </body>
        </>
    )
}