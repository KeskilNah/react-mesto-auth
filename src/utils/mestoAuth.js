export const BASE_URL = 'https://auth.nomoreparties.co';
export const register = ({password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    try {
      if (response.status === 201) {
        return response.json();
      }
    } catch(e) {
      return(e)
    }
  })
  .then ((res) => {
    return res;
  })
  .catch((err) => console.log(err))
};

export const login = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      }
    } catch(e) {
      console.log(e)
    }
  })
  .then ((res) => {
    return res;
  })
  .catch((err) => console.log(err))
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      }
    } catch(e) {
      return(e)
    }
  })
  .then ((res) => {
    return res;
  })
  .catch((err) => console.log(err))
}