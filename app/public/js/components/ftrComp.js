Vue.component('page-footer', {
  	template: `<footer class="container py-5">
                  <div class="row">
                    <div class="col-12 col-md">
                      <img class="logoImageFooter" src="../img/OCFR-logo1.jpg">
                      <small class="d-block mb-3 text-muted">&copy; 2017-2019</small>
                    </div>
                    <div class="col-6 col-md">
                      <h5>Quick Links</h5>
                        <ul>
                          <li><a href=""> </a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                      <h5>Resources</h5>

                    </div>

                    <div class="col-6 col-md">
                      <h5>About</h5>

                    </div>
                  </div>
                </footer>`
});

new Vue({
  el: '#ftr'
})
