const nodemailer = require("nodemailer");
const config = require("./config/config");
let http = require("request");

module.exports.sendMsg = (req, res) => {
  sendMesOnTelegram(req, res);
  sendMesOnMail(req, res);
};

function sendMesOnTelegram(req, res) {
  //токен и id чата берутся из config.json
  let reqBody = req.body;
  //каждый элемент обьекта запихиваем в массив
  let fields = [
    "<b>Name</b>: " + reqBody.name,
    "<b>Email</b>: " + reqBody.email,
    "<b>Company</b>: " + reqBody.company,
  ];
  let msg = "";
  //проходимся по массиву и склеиваем все в одну строку
  fields.forEach((field) => {
    msg += field + "\n";
  });
  //кодируем результат в текст, понятный адресной строке
  msg = encodeURI(msg);
  //делаем запрос
  http.post(
    `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`,
    function (error, response, body) {
      //не забываем обработать ответ
      // console.log("error:", error);
      // console.log("statusCode:", response && response.statusCode);
      // console.log("body:", body);
      if (response.statusCode === 200) {
        console.log(
          res.status(200).json({ status: "ok", message: "Успешно отправлено!" })
        );
      }
      if (response.statusCode !== 200) {
        res.status(400).json({ status: "error", message: "Произошла ошибка!" });
      }
    }
  );
}

function sendMesOnMail(req, res) {
  let reqBody = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mytestaccpleaseignore@gmail.com", // generated ethereal user
      pass: "pcfkmdeutbkenpej", // generated ethereal password
    },
  });

  var mail = {
    from: "mytestaccpleaseignore@gmail.com",
    to: "dmitriy_shikhov@ergonza.com",
    subject: "Ergonza",
    html: `<b>Name:</b> ${reqBody.name}<br><b>Email:</b> ${reqBody.email}<br><b>Company:</b> ${reqBody.company}`,
  };

  transporter.sendMail(mail, function (error, info) {
    if (error) {
      console.log("Email error: " + error);
    } else {
      console.log("Email sent: " + request.body.email);
    }
  });
}
