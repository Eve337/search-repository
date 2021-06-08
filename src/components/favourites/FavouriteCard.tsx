import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FavouriteCard: React.FC = (props: any) => {
  const repo = props;
  const classes = useStyles();
  return (
    <>
      <Card className='wrapper' {...classes.root}>
        <CardContent className='mainCardContent'>
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
            <a href={repo.html_url}>Link to github</a>
          </Typography>
        </CardContent>
        <div className='addToFavourites'>
          <FavoriteIcon
            onClick={() => {
              props.handleDelete();
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default FavouriteCard;
