const fs = require('fs')

const emailsArray = JSON.parse(fs.readFileSync('data.json'))

function filterAndRemoveDuplicates(emailsArray) {
    const uniqueEmails = new Set()
    const filteredEmails = []

    emailsArray.forEach(obj => {
        const email = obj.email;
        if (email.includes('@srmist.edu.in')) {
            uniqueEmails.add(email);
        }
    })

    uniqueEmails.forEach(email => {
        filteredEmails.push({ "email": email });
    })

    return filteredEmails
}

console.log("Start")

const filteredEmails = filterAndRemoveDuplicates(emailsArray)

fs.writeFileSync('emails.json', JSON.stringify(filteredEmails))

console.log("done")
