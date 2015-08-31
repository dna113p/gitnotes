var React = require('react');

var AddNote = React.createClass({
    propType: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },

    handleSubmit: function(){
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote);
    },

    render: function() {
        return (
            <div className="input-group">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"> Submit </button>
                    </span>
                </form>
            </div>
        )
    }
});

module.exports = AddNote;
