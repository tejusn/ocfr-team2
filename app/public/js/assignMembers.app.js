var assignCertsApp = new Vue({
  el: '#assignCertsApp',
  data: {
    memberNames: ['a','B'],
    certsNames:[],
    assignInfo:{},
    //memToAssign:'',
    //certToAssign:'',
    memLoading:true,
    certLoading:true
  },
  methods: {
    fetchCerts() {
      fetch('api/dropDowns/getcerts.php')
      .then(response => response.json())
      .then(json => {
         assignCertsApp.certsNames = json;
         this.certLoading=false;
       })
    },
    fetchMembers() {
      fetch('api/dropDowns/getMembersName.php')
      .then(response => response.json())
      .then(json => {
        assignCertsApp.memberNames = json;
        this.memLoading=false;
        })
    },
    assignCertToMember(){
      fetch('api/assign/', {
        method:'POST',
        body: JSON.stringify(this.assignInfo),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
      //  assignCertsApp.certs.push(json[0])
      })
      .catch( err => {
        console.error('Assign POST ERROR:');
        console.error(err);
      })
    }
  },
  beforeMount() {
    this.fetchMembers();
    this.fetchCerts();
  }
});
