var React = require('react');
var NotesList = require('./NotesList.js');
var AddNote = require('./AddNote.js');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    render: function() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <NotesList username={this.props.username} notes={this.props.notes} />
            </div>
        )
    }
});

module.exports = Notes;
