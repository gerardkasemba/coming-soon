// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

const contact = async (req, res) => {

  const {email} = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'tendanceboston@gmail.com',
      pass: 'G2508199595d@$!'
    }
  })

  try{
    const emailResponse = await transporter.sendMail({
      from: 'vendorforest1@gmail.com', 
      to: 'gerardkasemba@gmail.com',
      subject: 'Carsemba new user subscribe!',
      html: `<table className="table">
      <thead>
        <tr>
          <th scope="col">Email address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${email}</td>
        </tr>
      </tbody>
    </table>`

    })
    console.log('Thank you for subscribing', emailResponse.messageId)
  }catch(err){
    console.log(err)
  }
  res.status(200).json(req.body)
}

export default contact