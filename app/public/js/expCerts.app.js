var membersExpCertsApp = new Vue({
  el: '#membersExpCertsApp',
  data: {
    memExpCerts: [],
    filter: {
      certification_name: ''
    }
    //recordMember: {}
  },
  methods: {
    fetchMembersExpCerts() {
      fetch('api/reports/membersExpCerts.php')
      .then(response => response.json())
      .then(json => { membersExpCertsApp.memExpCerts = json })
    },displayWaitingLocalDate(d) {
      return moment.utc(d).local().format("YYYY MMM Do");
    },
    displayWaitingSince(d) {
      return moment.utc(d).local().fromNow();
    },
  },// end methods
  created() {
    //this.handleReset();
    this.fetchMembersExpCerts();
  }
});
