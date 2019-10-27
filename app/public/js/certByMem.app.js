var certMemApp = new Vue({
  el: '#certMemApp',
  data: {
    certsMem: [],
    memNames:[],
    //assignInfo:{},
    selectedMemID:{},
    memLoading:true,
    certsForMemberLoaded:false,
    filter: {
      cert_status: ''
    },
    expClass:'',
  },
  methods: {
    fetchMembers() {
      fetch('api/dropDowns/getMembersName.php')
      .then(response => response.json())
      .then(json => {
         certMemApp.memNames = json;
         this.memLoading=false;
       })
    },
    fetchCertsByMembers(selectedMemID){
      this.certsForMemberLoaded=false;
      this.certsMem =[];
      fetch('api/certs/certsByMember.php', {
        method:'POST',
        body: JSON.stringify(this.selectedMemID),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        certMemApp.certsMem=json;
        this.certsForMemberLoaded = true;
       })
      .catch( err => {
        console.error(' member cert POST ERROR:');
        console.error(err);
      });
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
  },
  beforeMount() {
    this.fetchMembers();
  }
});
