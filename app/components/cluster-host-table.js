import Ember from 'ember';
import {
  InvokeActionMixin
} from 'ember-invoke-action';

// TODO: validation TODO: is setting first options for some host, set this host
// as a primary cluster manager
export default Ember.Component.extend(InvokeActionMixin, {
  tagName: 'table',
  classNames: ['cluster-host-table', 'table', 'table-striped'],

  hosts: null,
  primaryClusterManager: null,

  actions: {
    checkboxChanged({
      newValue,
      context
    }) {
      let hostname = context.get('hostHostname');
      let option = context.get('hostOption');

      this.invokeAction('hostOptionChanged', hostname, option, newValue);
    },

    primaryClusterManagerChanged(hostname) {
      this.invokeAction('primaryClusterManagerChanged', hostname);
    },
  }
});
