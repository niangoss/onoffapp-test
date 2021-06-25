import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import PersonIcon from '@material-ui/icons/Person';

function formateDate(date) {
    if (moment(date).utc().isSame(moment(), 'day'))
        return 'Today';
    else if (moment(date).utc().isSame(moment().add(-1, 'days'), 'day'))
        return 'Yesterday';
    return moment(date).utc().format("MMMM Do")
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function CallList({ items }) {
    items.sort((left, right) => moment.utc(right.date).diff(moment.utc(left.date)));

    const classes = useStyles();


    return (
        <List className={classes.root}>
            {items.map((item) => (
                <Container key={item.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.phoneNumber}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {item.phoneType}
                                    </Typography>
                                    - {formateDate(item.date)} - {moment(item.date).utc().format('hh:mm A')}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Container>
            ))}
        </List>
    );

}


CallList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};
