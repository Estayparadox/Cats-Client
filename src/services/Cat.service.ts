export async function getCats(): Promise<String | void> {
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    return fetch(`${process.env.REACT_APP_API_URL}/getCats`, requestOptions)
      .then(response => response.text())
      .then((responseData) => {
          return responseData;
      })
      .catch(error => console.log('error', error));
}