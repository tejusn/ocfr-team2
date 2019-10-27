var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordMember: {},
    mode:"add" //mode can be add or update
  },
  methods: {
    fetchMembers() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    },
    handleSubmit(event) {
      if(this.mode === "add"){ // add member logic
        fetch('api/records/addMember.php', {
          method:'POST',
          body: JSON.stringify(this.recordMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          memberRecordsApp.members.push(json[0])
            this.handleReset();
        })
        .catch( err => {
          console.error('Member Add POST ERROR:');
          console.error(err);
        })
      }
      else{ //update member logic
        fetch('api/records/updateMember.php', {
          method:'POST',
          body: JSON.stringify(this.recordMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          memberRecordsApp.members.push(json[0]);
            this.handleReset();
         })
        .catch( err => {
          console.error('Member Update POST ERROR:');
          console.error(err);
        })
        this.mode = "add";
      }
      this.handleReset();
    },
    handleReset() {
      this.recordMember = {}
    },
    updateMember(mem){
      this.recordMember = mem;
      this.mode = "update";
    },
    deleteMember(mem){
      fetch('api/records/deleteMember.php', {
        method:'POST',
        body: JSON.stringify(mem),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        // memberRecordsApp.members.push(json[0])
        console.log('Deletion Successful');
      })
      .catch( err => {
        console.error('Member Delete POST ERROR:');
        console.error(err);
      })
    }

  }, // end methods
  created() {
    //this.handleReset();
    this.fetchMembers();
  }
});
