class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }
  showProfile(user){
  this.profile.innerHTML =
  `<div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block" ">View Profile</a>
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary">Public Reops: ${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists: ${user.gists}</span>
      <span class="badge badge-success" >Public Followers: ${user.followers}</span>
      <span class="badge badge-info">Public Following: ${user.following}</span>
      <br><br><br>
      <ul class="list-group">
        <li class="list-group-item">Comapny: ${user.company}</li>
        <li class="list-group-item">Blog: ${user.blog}</li>
        <li class="list-group-item">location: ${user.location}</li>
        <li class="list-group-item">Member since: ${user.created_at}</li>

      </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>`

  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  showRepos(repos){
    let output = '';

    repos.forEach((repo) => {
      output += `<div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>

        <div class="col-md-6"><span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success" >Forks: ${repo.forks_count}</span></div>
        </div>
      </div>`
    });


    document.getElementById('repos').innerHTML = output;

  }

  showAlert(msg, className){
    //clear any remaining alerts
    this.clearAlert()
    // create DIV element
    const div = document.createElement('div');
    // add class name to the DIV
    div.className = className;
    // create and add text to div element
    div.appendChild(document.createTextNode(msg));
    // grab the container element
    const container = document.querySelector('.searchContainer');
    // grab the search element
    const search = document.querySelector('.search');
    // add the vid element before the search element on page
    container.insertBefore(div, search);

    // time out after 3 seconds
    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }
  // clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
