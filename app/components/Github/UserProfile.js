var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                <h2>
                    {this.props.username}
                </h2>
            </div>
        )
    }
});

module.exports = UserProfile;
