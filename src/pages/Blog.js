import {Button, Grid} from "@mui/material";
import Article from "../components/Article";
import data from '../data.json';
import {Link} from "react-router-dom";

const styles = {
    paper: {
        height: 400,
        width: 800,
        color: '#808080'
    }
}

function Blog() {
    return <>
        <div>
            <Link to={`/`}>Home</Link> -> Blog
        </div>
        <Grid container
              spacing={4}>
            {data.data.map((item) => (
                <Grid item xs={6} md={6}>
                    <Article key={item.id} article={item}/>
                </Grid>
            ))}
        </Grid>
        <Button variant="contained">Load More</Button>
    </>
}

export default Blog;