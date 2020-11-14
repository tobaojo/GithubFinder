// init GitHub

const github = new GitHub;

// init UI
const ui = new UI;
//search input
const searchUser = document.getElementById('search-user')

// search input event listener
searchUser.addEventListener('keyup', (e)=>{
    //get inout text
  const  userText = e.target.value;

  if (userText !== '') {
    //make http call
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('user not found', 'alert alert-danger')
      } else {
        //show profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    })
  } else {
    // clear profile
    ui.clearProfile();
  }
})
