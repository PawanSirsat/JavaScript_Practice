// Function to fetch and display user information
async function fetchAndDisplayUserList() {
  try {
    const response = await fetch('https://api.github.com/users')
    const users = await response.json()

    const userContainer = document.getElementById('user-container')

    users.forEach((user) => {
      const userCard = document.createElement('div')
      userCard.className = 'user-card'

      const avatarImage = document.createElement('img')
      avatarImage.src = user.avatar_url
      avatarImage.className = 'user-avatar'

      const username = document.createElement('p')
      username.textContent = `Username: ${user.login}`

      const profileLink = document.createElement('a')
      profileLink.textContent = 'GitHub Profile'
      profileLink.href = user.html_url
      profileLink.target = '_blank'

      userCard.appendChild(avatarImage)
      userCard.appendChild(username)
      userCard.appendChild(profileLink)

      // Fetch additional user info (followers and following)
      fetch(user.url)
        .then((response) => response.json())
        .then((userData) => {
          const followers = document.createElement('p')
          followers.textContent = `Followers: ${userData.followers}`

          const following = document.createElement('p')
          following.textContent = `Following: ${userData.following}`

          userCard.appendChild(followers)
          userCard.appendChild(following)
        })
        .catch((error) => {
          console.error('Error fetching user data:', error)
        })

      userContainer.appendChild(userCard)
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchAndDisplayUserList()
