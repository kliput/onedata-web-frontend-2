import ContentInfo from 'onedata-web-frontend-2/components/content-info';
import layout from 'onedata-web-frontend-2/templates/components/content-info';


// TODO: i18n
export default ContentInfo.extend({
  layout,

  header: 'welcome',
  subheader: 'to onepanel of provider',
  text: 'You had not deployed any cluster yet.',
  buttonLabel: 'Create new cluster',

  buttonAction() {
    this.sendAction('transitionTo', 'onedata.sidebar.content', 'clusters', 'new');
  }
});
