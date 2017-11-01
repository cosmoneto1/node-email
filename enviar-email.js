const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lkpntp5skhobclcy@ethereal.email',
        pass: 'sesUUgvM9m4jyvMQUf'
    }
})


//opções de envio do e-mail
let mailOptions = {
    from: '"Fred Foo" <foo@blurdybloop.com>', // e-mail de envio
    to: 'lkpntp5skhobclcy@ethereal.email', // lista de e-mail
    subject: 'Bom dia... ', // assunto do e-mail
    text: 'Texto simples lorem', // texto simples do e-mail
    html: '<b>Html simples lorem</b>' // html do e-mail
}

// envio de e-mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error)
    }
    console.log('mensagem enviada: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

})

//e-mail de teste 
// https://ethereal.email/
//login:  lkpntp5skhobclcy@ethereal.email
//senha:  sesUUgvM9m4jyvMQUf  


//configurações 

// SMTP configuration
// Host 	smtp.ethereal.email
// Port 	587
// Security 	STARTTLS
// Username 	lkpntp5skhobclcy@ethereal.email
// Password 	sesUUgvM9m4jyvMQUf

// IMAP configuration
// Host 	imap.ethereal.email
// Port 	993
// Security 	TLS
// Username 	lkpntp5skhobclcy@ethereal.email
// Password 	sesUUgvM9m4jyvMQUf

// POP3 configuration
// Host 	pop3.ethereal.email
// Port 	995
// Security 	TLS
// Username 	lkpntp5skhobclcy@ethereal.email
// Password 	sesUUgvM9m4jyvMQUf