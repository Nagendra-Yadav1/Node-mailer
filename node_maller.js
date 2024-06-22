const nodemailer = require('nodemailer');
require('dotenv').config()
const fs = require('fs');


const mailSender = async () => {
    const mails = [
        "waseem23@navgurukul.org"

    ];

    const emailCredentials = {
        user: 'nagendra22@navgurukul.org',
        pass: process.env.password
    };

    let mailCount = 0;

    for (const mail of mails) {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: emailCredentials.user,
                    pass: emailCredentials.pass
                }
            });

            const body = `<b>Hii,</b>

                <p>
                    I hope this email finds you well. I am writing to express my interest in the Full Stack Developer position at your company. With a strong background in backend development, I am excited about the opportunity to contribute to your innovative team.
                </p>
                
                <b>key skills :</b>
                <p>
                    * Proficient in Node.js and server-side JavaScript.<br>
                    * Expertise in API development and database management.<br>
                    * Strong problem-solving abilities and a commitment to code quality.<br>

                    I am confident that my technical skills and passion for clean, efficient code align with the needs of your company. I am eager to bring my expertise to your team and contribute to the success of your projects.<br>

                    Thank you for considering my application. I have attached my resume for your review, and I look forward to the opportunity to discuss how my skills can benefit your company.
                </p>
               
                <p><b>Regards,</b>
                <br>Nagendra Yadav
                <br>+91-8299762759
                <br>Github :-'https://github.com/Nagendra-Yadav1'
                <br>Linkedin :- 'https://www.linkedin.com/in/nagendra-yadav-57a0ba23a/'</p>`;

            const info = await transporter.sendMail({
                from: '"Nagendra Yadav" <nagendra22@navgurukul.org>',
                to: mail,
                subject: 'Application for the Full Stack Developer Position',
                text: 'This is mail by me',
                html: body,
                attachments: [
                    {
                        filename: 'Nagendra_Yadav.pdf',
                        content: fs.createReadStream('./Nagendra_Yadav.pdf')
                    }
                ]
            });

            console.log(info);
            mailCount++;
        } catch (error) {
            console.log(error);
        }
    }

    console.log(mailCount, ' mail has been sent');
};

mailSender();
