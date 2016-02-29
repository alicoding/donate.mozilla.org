// this will ignore that Bad Invocation error which is a bug in JSXHint
/* jshint -W067 */

import React from 'react';
import MozillaFooter from '../components/footer-mozilla.jsx';
import Signup from '../components/signup.jsx';
import Social from '../components/social.jsx';
import ThankYouHeader from '../components/thank-you-header.jsx';
import { injectIntl } from 'react-intl';
import analytics from '../assets/js/analytics.js';
import form from '../scripts/form.js';
import qs from 'qs';

var ThankYou = injectIntl(React.createClass({
  contextTypes: {
    location: React.PropTypes.object,
    router: React.PropTypes.object
  },
  getInitialState: function() {
    let query = qs.parse(this.props.location.search.replace("?", ""));
    return {
      email: query.email
    };
  },
  componentDidMount: function() {
    form.updateField("email", this.state.email || "");
    analytics();
  },
  render: function() {
    var className = "row thank-you-page";
    var locale = this.props.intl.locale;
    var signUpOrSocial = (<Social />);

    if (this.props.params && /^(en|de)(\b|$)/.test(locale)) {
      signUpOrSocial = (<Signup country={this.props.country} email={this.state.email} locales={this.props.intl.locales} />);
    }
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div>
        <div className={className}>
          <ThankYouHeader/>
          <div>
            {signUpOrSocial}
            <MozillaFooter/>
          </div>
        </div>
      </div>
    );
  }
}));

module.exports = ThankYou;
