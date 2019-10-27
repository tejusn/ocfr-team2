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
        fetch('api/certs/addCertification.php', {
          method:'POST',
          body: JSON.stringify(this.recordCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { certsRecordsApp.certs.push(json[0])
          alert("Cert Addition Successful")
        })
        .catch( err => {
          console.error('Cert Add POST ERROR:');
          console.error(err);
        })
      }
      else{ //update certification logic
        fetch('api/certs/updateCertification.php', {
          method:'POST',
          body: JSON.stringify(this.recordCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          // certsRecordsApp.certs.push(json[0])
          console.log("Cert updation Successful")
          alert("Cert Edit Successful")
        })
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
    deleteCert(cert){
      fetch('api/certs/deleteCert.php', {
        method:'POST',
        body: JSON.stringify(cert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certsRecordsApp.certs.push(json[0])
      alert("Cert Deletion Successful")
    })
      .catch( err => {
        console.error('Certification Delete POST ERROR:');
        console.error(err);
      })
    }
  }, // end methods
  created() {
    this.fetchCerts();
  }
});
