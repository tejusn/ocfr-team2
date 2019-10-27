var membersContactApp = new Vue({
  el: '#membersContactApp',
  data: {
    memContacts: [],
    filter: {
      station: ''
    }
    //recordMember: {}
  },
  methods: {
    fetchMembersContacts() {
      fetch('api/reports/membersContact.php')
      .then(response => response.json())
      .then(json => { membersContactApp.memContacts = json })
    }
  }, // end methods
  created() {
    //this.handleReset();
    this.fetchMembersContacts();
  }
});
