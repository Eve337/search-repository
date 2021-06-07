import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function Repo(props: any) {
  const repo = props.repo;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {props.index}
        </Typography>
        <Typography variant='h5' component='h2'>
          <NavLink to={`/RepositoryPage/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {repo.owner.login}
        </Typography>
        <Typography variant='body2' component='p'>
          {repo.description}
        </Typography>

        <Typography variant='body1' component='p'>
          <Link href={repo.html_url}>Link to github</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
