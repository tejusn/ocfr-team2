var membersContactApp = new Vue({
  el: '#membersContactApp',
  data: {
    memContacts: [],
    //recordMember: {}
  },
  methods: {
    fetchMembersContacts() {
      fetch('api/reports/membersContact.php')
      .then(response => response.json())
      .then(json => { membersContactApp.memContacts = json })
    },
    handleSubmit(event) {
      // fetch('api/records/post.php', {
      //   method:'POST',
      //   body: JSON.stringify(this.recordMember),
      //   headers: {
      //     "Content-Type": "application/json; charset=utf-8"
      //   }
      // })
      // .then( response => response.json() )
      // .then( json => { memberRecordsApp.members.push(json[0]) })
      // .catch( err => {
      //   console.error('RECORD POST ERROR:');
      //   console.error(err);
      // })
      // this.handleReset();
    },
    handleReset() {
      // this.recordMember = {
      //   firstName: '',
      //   lastName: '',
      //   dob: '',
      //   sexAtBirth: ''
      // }
    },
    handleRowClick(member) {
      // memberRecordsApp.member = member;
    }
  }, // end methods
  created() {
    //this.handleReset();
    this.fetchMembersContacts();
  }
});
