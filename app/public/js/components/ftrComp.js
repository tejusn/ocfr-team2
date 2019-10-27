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
                          <li><a href="index.html"> Home</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                      <h5>Certifications</h5>
                        <ul>
                          <li><a href="certs.html">Add/Delete/Edit Certifications</a></li>
                          <li><a href="membersByCert.html">Show Members by Certification</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md">
                      <h5>Members</h5>
                        <ul>
                        <li><a href="members.html">Add/Delete/Edit Members</a></li>
                        <li><a href="certsByMember.html">Show Certifications</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                      <h5>Reports</h5>
                        <ul>
                        <li><a href="membersContact.html">Member Contact Details</a></li>
                        <li><a href="membersExpCerts.html">Certification Details</a></li>
                        </ul>
                    </div>
                  </div>
                </footer>`
});

new Vue({
  el: '#ftr'
})
