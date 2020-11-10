export async function postAppointment(catId: number): Promise<String | void> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"catId":Number(catId)});

    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment`, requestOptions)
        .then(response => response.text())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.log('error', error));
}

