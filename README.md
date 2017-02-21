# hapi-email-dispatch

In progress email dispatcher service GMAIL

Methods

```
method: POST
path: /send-email
body : {
  to: 'user@email.com'
  subject: 'Important email'
  text : 'some text to add' (optional)
  name: 'username'
  type : welcome || custom (future feature)
}
```

You need node environments, creating `.env` file like this

```
GMAIL_USER=user@gmail.com
GMAIL_PASS=strongGmailPassword

PORT=8000
```

Then run `npm install`

```
npm start
```

#Enjoy it!
