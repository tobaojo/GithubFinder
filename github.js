class GitHub {
  constructor() {
    this.client_id = '412759332bef96ee1362';
    this.client_secret = '27243ba2b0637c5cbede5733a6480470a4ad8ecc';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'


  }

  async getUser(user){

    const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      //get repos
    const repoResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}
