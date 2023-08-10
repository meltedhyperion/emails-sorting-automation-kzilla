const fs = require('fs')

const emailsArray = JSON.parse(fs.readFileSync('./data.json'))

function filterAndRemoveDuplicates(emailsArray) {
    const validEmails = new Map()
    const filteredEmails = []
    emailsArray.forEach(obj => {
        const email = obj.email;
        if(email.includes('@srmist.edu.in')) {
            validEmails.set(email, obj.email)
        }
    })
    validEmails.forEach((value, key) => {
        filteredEmails.push({"email": key})
    })
    return filteredEmails
}

console.log("Start")

const filteredEmails = filterAndRemoveDuplicates(emailsArray)

fs.writeFileSync('filetered-emails-maps.json', JSON.stringify(filteredEmails))

console.log("done")