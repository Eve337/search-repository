import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Repo.css";

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

const RepositoryCard = (props: any) => {
  const classes = useStyles();
  console.log(props, "here");
  return (
    <>
      <Card className='wrapper' {...classes.root}>
        <CardContent className='mainCardContent'>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            {props.index}
          </Typography>
          <Typography variant='h5' component='h2'>
            <NavLink to={`/RepositoryPage/${props.owner.login}/${props.name}`}>
              {props.name}
            </NavLink>
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {props.owner.login}
          </Typography>
          <Typography variant='body2' component='p'>
            {props.description}
          </Typography>
          <Typography variant='body1' component='p'>
            <Link href={props.html_url}>Link to github</Link>
          </Typography>
        </CardContent>
        <div className='addToFavourites'>
          <FavoriteIcon onClick={() => props.handleFunc(props)} />
        </div>
      </Card>
    </>
  );
};

export default RepositoryCard;
