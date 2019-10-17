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
    this.fetchMembersExpCerts();
  }
});
