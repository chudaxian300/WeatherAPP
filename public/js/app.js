const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    message.textContent = ''
    fetch('http://120.24.193.73:3001/weather?city=' + location).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                message.textContent = data.error
            } else {
                console.log(data)
                message.textContent = data.data
            }
          }
        )
    })
})
