const apiURL = 'https://calm-cove-22157.herokuapp.com/api/data'


const sendData = (data)=>{
    fetch(apiURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:data.user ,
          date: data.date
        })
      })
}

export default sendData;