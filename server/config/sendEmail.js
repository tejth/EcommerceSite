import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.RESEND_API) {
  console.log("❌ Provide RESEND_API inside the .env file");
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async({sendTo , subject , html })=>{
    try {

      const { data, error } = await resend.emails.send({
      from: 'TusharElectricals onboarding@resend.dev',
      to: sendTo,
      subject: subject,
      html: html,
   
    });

    if (error) {
      console.error("❌ Email error:", error);
      return;
    }


    return data

        
    } catch (error) {
            console.log(error)      
    }
}


export default sendEmail