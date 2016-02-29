import React from 'react';
import {injectIntl, FormattedHTMLMessage } from 'react-intl';

var Footer = injectIntl(React.createClass({
  render: function() {
    return (
      <footer>
        <div className="footer">
          <div className="row">
            <div className="half">
              <img src="/assets/images/mozilla.5e83dba715a0469b92071758876f0373.svg"/>
              <p className="license">
                <FormattedHTMLMessage id="footerLicense"/>
              </p>
              <p>
                {this.props.message}
              </p>
            </div>
            <div className="quarter">
              <ul>
                <li><a href="https://www.mozilla.org/mission/" target="_blank">{this.props.intl.formatMessage({id: 'Mission'})}</a></li>
                <li><a href="https://www.mozilla.org/about/" target="_blank">{this.props.intl.formatMessage({id: 'About'})}</a></li>
                <li><a href="https://www.mozilla.org/contact/spaces/" target="_blank">{this.props.intl.formatMessage({id: 'Contact'})}</a>
                </li>
                <li><a href="https://www.mozilla.org/privacy/" target="_blank">{this.props.intl.formatMessage({id: 'privacyPolicyFooter'})}</a>
                </li>
                <li><a href="https://www.mozilla.org/about/legal/" target="_blank">{this.props.intl.formatMessage({id: 'legalNotices'})}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}));

module.exports = Footer;
