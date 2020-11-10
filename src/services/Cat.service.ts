export async function getCats(): Promise<String | void> {
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    return fetch(`https://europe-west1-matters-test.cloudfunctions.net/getCats`, requestOptions)
      .then(response => response.text())
      .then((responseData) => {
          return responseData;
      })
      .catch(error => console.log('error', error));
}