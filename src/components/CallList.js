import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";

function formateDate(date) {
    if (moment(date).isSame(moment(), 'day'))
        return 'Today';
    else if (moment(date).isSame(moment().add(-1, 'days'), 'day'))
        return 'Yesterday';
    return moment(date).format("MMMM Do")
}

export default function CallList({ items }) {
    items.sort((left, right) => moment.utc(right.date).diff(moment.utc(left.date)));

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>Number: {item.phoneNumber}, Date: {formateDate(item.date)}</li>
            ))}
        </ul>
    );

}


CallList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};
