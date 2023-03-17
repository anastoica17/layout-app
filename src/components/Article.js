import {Box, Card, CardContent, CardHeader, CardMedia} from "@mui/material";

function Article(article) {
    console.log(article);
    const item = article.article;
    return <>
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                <CardHeader title={item.title}>

                </CardHeader>
                <CardMedia component="img"
                           height="300"
                           width="200"
                           image={item.img}
                           alt={item.title}
                />
                <CardContent>
                    {item.description}
                </CardContent>
            </Card>
        </Box>
    </>
}

export default Article;