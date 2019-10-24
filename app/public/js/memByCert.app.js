var memCertApp = new Vue({
  el: '#memByCertApp',
  data: {
    memCerts: [],
    certsNames:[],
    //assignInfo:{},
    selectedCertID:{},
    certLoading:true,
    membersForCertLoaded:false,
    filter: {
      cert_status: ''
    }
  },
  methods: {
    fetchCerts() {
      fetch('api/dropDowns/getcerts.php')
      .then(response => response.json())
      .then(json => {
         memCertApp.certsNames = json;
         this.certLoading=false;
       })
    },
    fetchMembersByCerts(selectedCertID){
      this.membersForCertLoaded=false;
      this.memCerts = [] ;
      fetch('api/records/membersByCert.php', {
        method:'POST',
        body: JSON.stringify(this.selectedCertID),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        memCertApp.memCerts.push(json[0]);
        this.membersForCertLoaded = true;
       })
      .catch( err => {
        console.error('Certification member POST ERROR:');
        console.error(err);
      });

    }
  },
  beforeMount() {
  //  this.fetchMembers();
    this.fetchCerts();
  }
});
