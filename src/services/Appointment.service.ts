export async function postAppointment(catId: number): Promise<String | void> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("catId", JSON.stringify(catId));

    var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_API_URL}/getAdoptionAppointment`, requestOptions)
        .then(response => response.text())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.log('error', error));
}

