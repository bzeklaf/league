import {resend, EMAIL_RECIPIENT} from '../constant.js'

export async function POST(request){
    const req = await request.json()
    const name= req.name || 'No name'
    const email = req.email || 'No email'
    const message = req.message || 'No message'

    // send it to email

    const data = await resend.emails.send({
        from: "League Of Sound <leagueofsound@resend.dev>",
        to: [EMAIL_RECIPIENT],
        subject: 'New contact form on League Of Sound',
        // attachments: [
        //   {
        //     path: '/Users/bappy/Desktop/league_of_sound/cat.jpg',
        //     filename: 'cat.jpg',
        //   },
        // ],
        html: `
        <h1>New Contact Form</h1>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
        `,
        text: `
        New Contact Form
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `
      });

      console.log(data)

      return Response.json({data:data.id})

}
