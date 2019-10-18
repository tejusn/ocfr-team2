Vue.component('page-header', {
  	template: `<header>
                <!-- Fixed navbar -->
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                  <a class="navbar-brand" href="index.html">OCONEE COUNTY</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">

                      <li class="nav-item">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                      </li>


                      <li class="nav-item">
                        <a class="nav-link" href="certs.html">Certifications</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="members.html" tabindex="-1" aria-disabled="true">Members</a>
                      </li>


                      <li class="nav-item">
                        <a class="nav-link" href="assignCert.html" tabindex="-1" aria-disabled="true">Assign Certification</a>
                      </li>




                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Certifications</a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="certs.html">Show All Certifications</a>
                          <a class="dropdown-item" href="membersByCert.html">Show Members by Certification</a>
                        </div>
                      </li>

                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Members</a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="members.html">Show All Members</a>
                          <a class="dropdown-item" href="certsByMember.html">Show Certifications by Member</a>
                        </div>
                      </li>


                    </ul>
                  </div>
                </nav>
              </header>`
});

new Vue({
  el: '#hdr'
});
