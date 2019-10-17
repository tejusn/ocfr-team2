var certsRecordsApp = new Vue({
  el: '#certsRecordsApp',
  data: {
    certs: [],
  },
  methods: {
    fetchCerts() {
      fetch('api/certs/')
      .then(response => response.json())
      .then(json => { certsRecordsApp.certs = json })
    },
      // handleSubmit(event) {},
      // handleReset() {},
      // handleRowClick() {
      //   // memberRecordsApp.member = member;
      // }

  },
  created() {
    this.fetchCerts();
  }
});
