var assignCertsApp = new Vue({
  el: '#assignCertsApp',
  data: {
    memberNames: ['a','B'],
    certsNames:[],
    memToAssign:'',
    certToAssign:'',
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

    }
  },
  beforeMount() {
    this.fetchMembers();
    this.fetchCerts();
  }
});
