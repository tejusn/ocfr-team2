var membersExpCertsApp = new Vue({
  el: '#membersExpCertsApp',
  data: {
    memExpCerts: [],
    filter: {
      certification_name: ''
    },
    expClass:'',
    certLoading:true,
    certsNames:[]
  },
  methods: {
    fetchMembersExpCerts() {
      fetch('api/reports/membersExpCerts.php')
      .then(response => response.json())
      .then(json => { membersExpCertsApp.memExpCerts = json })
    },
    fetchCerts() {
      fetch('api/dropDowns/getcerts.php')
      .then(response => response.json())
      .then(json => {
         membersExpCertsApp.certsNames = json;
         this.certLoading=false;
       })
    },
    displayWaitingLocalDate(d) {
      return moment.utc(d).local().format("YYYY MMM Do");
    },
    displayWaitingSince(d) {
      return moment.utc(d).local().fromNow();
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
  },// end methods
  created() {
    this.fetchCerts();
    this.fetchMembersExpCerts();
  }
});
