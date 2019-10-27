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
    },
    expClass:'',

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
    checkIsActiveOrExpired(d){
        if(moment(d).diff()>0){
          this.expClass = 'activeCell';
          return "Active";
        }
        else{
          this.expClass = 'expCell';
          return "Expired";
        }
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
        memCertApp.memCerts=json;
        // this.checkIsActiveOrExpired();
        this.membersForCertLoaded = true;
       })
      .catch( err => {
        console.error('Certification member POST ERROR:');
        console.error(err);
      });

    },displayWaitingLocalDate(d) {
      return moment.utc(d).local().format("YYYY MMM Do");
    },
    displayWaitingSince(d) {
      return moment.utc(d).local().fromNow();
    },
  },
  beforeMount() {
  //  this.fetchMembers();
    this.fetchCerts();
  }
});
