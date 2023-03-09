import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import DropDown from './Dropdown';
import "./Portfolio.css"

export default function Portfolio() {
    const [collection, setCollection] = React.useState([...info.portfolio])
    return (
        <Box>
            {/* <DropDown  */}
                {/* // setCollection={setCollection} */}
                {/* // collection={collection} */}
                {/* // /> */}
            <Grid container display={'flex'} justifyContent={'center'}>
                {collection.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} skills={project.skills} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};