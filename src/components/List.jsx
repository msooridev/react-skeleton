var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingrediants = [
    {"id": 1, "text": "ham"},
    {"id": 2, "text": "cheese"},
    {"id": 3, "text": "eggs"},
    {"id": 4, "text": "potatoes"}
];

class List extends React.Component {
    render() {
        var listItems = ingrediants.map(function (item) {
            return <ListItem key={item.id} ingrediant={item.text}/>
        })

        return (<ul>{listItems}</ul>);
    }
}

module.exports = List;
