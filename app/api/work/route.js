import {resend, EMAIL_RECIPIENT} from '../constant.js'

export async function POST(request){
    const req = await request.json()

    const email = req.email || 'No email'
    const audioUrl = req.audioUrl || null;

    if (!audioUrl) {
        return Response.json({data: 'No audio url'})
    }

    // send it to email

    const data = await resend.emails.send({
        from: "League Of Sound <leagueofsound@resend.dev>",
        to: [EMAIL_RECIPIENT],
        subject: 'New Audio Submitted on League Of Sound',
        attachments: [
          {
            path: audioUrl,
            filename: 'audio.mp3',
          },
        ],
        html: `
        <h1>New Audio Form</h1>
        <p><b>Email:</b> ${email}</p>
        <p><b>Music:</b> ${audioUrl}</p>
        `,
        text: `
        New Contact Form
        Email: ${email}
        Music: ${audioUrl}
        `
      });

      console.log(data)

      return Response.json({data:data.id})

}
