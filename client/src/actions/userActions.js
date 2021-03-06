import variabels from '../config/variables'
const axios = require('axios')

export const fetchUsersRequest = async () => {
  return await axios
    .get(`${variabels.url}/users`)
    .then(response => {
      if (response.status === 200) {
        let users = response.data.users
        return users
      }
    })
    .catch(error => {
      return 'Something went wrong when GET on users:  ' + error
    })
}

export const getRecommendationsForUserRequest = async (
  selectedUser,
  selectAlgorithm,
  resultCount
) => {
  let params = new URLSearchParams()

  params.append('UserID', selectedUser)
  params.append('numberOfResults', resultCount)

  let lowerCaseAlgo = selectAlgorithm.toLowerCase()

  return await axios
    .post(`${variabels.url}/recommendations/${lowerCaseAlgo}`, params)
    .then(response => {
      return response.data.recommendations
    })
    .catch(error => {
      return (
        'Something went wrong on POST for recommendations for a users:  ' +
        error
      )
    })
}
