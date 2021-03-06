import React  from 'react';
import ThunderbirdFooter from '../../components/footer-thunderbird.jsx';
import Social from '../../components/social.jsx';
import ThankYouHeader from '../../components/thank-you-header-thunderbird.jsx';
import { IntlMixin } from 'react-intl';

var ThankYou = React.createClass({
  mixins: [IntlMixin],
  render: function() {
    var className = "row share-page thunderbird";
    var language = this.props.locales[0];
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div className={className}>
        <ThankYouHeader/>
        <Social language={language}/>
        <ThunderbirdFooter/>
      </div>
    );
  }
});

module.exports = ThankYou;
