var certsRecordsApp = new Vue({
  el: '#certsRecordsApp',
  data: {
    certs: [],
    recordCert: {},
    mode:"add" //mode can be add or update
  },
  methods: {
    fetchCerts() {
      fetch('api/certs/')
      .then(response => response.json())
      .then(json => { certsRecordsApp.certs = json })
    },
    handleSubmit(event) {
      if(this.mode === "add"){ // add certification logic
        fetch('api/records/addCertification.php', {
          method:'POST',
          body: JSON.stringify(this.recordCertification),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { certsRecordsApp.certs.push(json[0])})
        .catch( err => {
          console.error('Cert Add POST ERROR:');
          console.error(err);
        })
      }
      else{ //update certification logic
        fetch('api/records/updateCertification.php', {
          method:'POST',
          body: JSON.stringify(this.recordCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { certsRecordsApp.certs.push(json[0]) })
        .catch( err => {
          console.error('Cert Update POST ERROR:');
          console.error(err);
        })
        this.mode = "add";
      }

      this.handleReset();
    },
    handleReset() {
      this.recordCert = {}
    },
    updateCert(cert){
      // console.log(cert);
      this.recordCert = cert;
      this.mode = "update";
    },
    handleRowClick(certification) {
      // certsRecordsApp.cert = cert;
    }
    }, // end methods
  created() {
    this.fetchCerts();
  }
});
