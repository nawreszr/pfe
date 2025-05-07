import { sendEmail } from "./mailer";
import { contactUsTemplate } from "./template/contactUsTemplate";

export const sendContactUsEmail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const appDomain = process.env.APP_DOMAIN_DEV;
    const appName = process.env.APP_NAME;
    const emailUser = process.env.EMAIL_USER;

    if (!appDomain || !appName || !emailUser) {
      throw new Error(
        "Environment variables APP_DOMAIN_DEV, APP_NAME, or EMAIL_USER are missing."
      );
    }

    await sendEmail({
      from: `${appName} <${emailUser}>`,
      to: "mbarkihoussem99@gmail.com",
      //   emailUser,
      subject: "Contact Us",
      html: contactUsTemplate(name, email, message),
    });

  } catch (error) {
    console.error("Error sending contact email:", error);
  }
};
