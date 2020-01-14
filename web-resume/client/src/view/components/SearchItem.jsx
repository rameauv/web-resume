import React from 'react';
import { makeStyles } from '@material-ui/styles/';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = makeStyles(() => ({
  root: {
    flex: 1,
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
  profileImageUrl: string,
};

const searchItem: React.FunctionComponent<Props> = (props: Props) => {
  const { firstname, lastname, profileImageUrl } = props;
  const classes = styles();
  return (
    <>
      <ButtonBase className={classes.root}>
        <div className={classes.AvatarContainer}>
          <Avatar className={classes.bigAvatar} src={profileImageUrl} data-test="Picture">
            <ImageIcon />
          </Avatar>
        </div>
        <div>
          <div>
            <Typography
              variant="subtitle1"
              data-test="Title"
            >
              {firstname}
              {' '}
              {lastname}
            </Typography>
          </div>
        </div>
      </ButtonBase>
    </>
  );
};

export default searchItem;
