import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 140,
    float: 'left',
    marginRight: 50,
    marginTop: 90,
    marginLeft: 70,
    minHeight: 100,
    maxHeight: 200
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function AlbumsCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {props.id}
          </Avatar>
        }
        title={<Link to={`/albums/${props.id} `}>{props.title}</Link>}
      />
      <CardMedia className={classes.media} image={props.image} />

      <CardContent></CardContent>

      <Collapse in={expanded} timeout='auto' unmountOnExit></Collapse>
    </Card>
  );
}