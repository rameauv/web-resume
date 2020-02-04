import React from 'react';
import { makeStyles } from '@material-ui/styles/';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';

const styles = makeStyles(() => ({
  root: {
    flex: 1,
    display: 'flex',
  },
  button: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  AvatarContainer: {
    alignSelf: 'start',
    marginRight: 20,
  },
  bigAvatar: {
    margin: 'auto',
    width: 60,
    height: 60,
  },
}));

type Props = {
  firstname: string,
  lastname: string,
  profilePicture: string,
  userid: string,
};

const searchItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    firstname, lastname, profilePicture, userid,
  } = props;
  const classes = styles();

  return (
    <>
      <Link to={`/profile/${userid}`} className={classes.root}>
        <ButtonBase className={classes.button}>
          <div className={classes.AvatarContainer}>
            <Avatar className={classes.bigAvatar} src={profilePicture} data-test="Picture">
              <ImageIcon />
            </Avatar>
          </div>
          <div>
            <div>
              <Typography
                variant="subtitle1"
                data-test="Title"
              >
                {`${firstname} ${lastname}`}
              </Typography>
            </div>
          </div>
        </ButtonBase>
      </Link>
    </>
  );
};

export default searchItem;
