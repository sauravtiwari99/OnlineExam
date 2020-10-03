using GladiatorBackend.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Results;

// This Controller consists of Web APIs to validate students and admins. Also, it consists of APIs to register new users.
namespace GladiatorBackend.Controllers
{
    //This is the route prefix to access methods of this controller/class.

    [RoutePrefix("api/accounts")]
    public class examController : ApiController
    {
        // Creating an object of the Db context class to query the MSSQL database using entity framework.

        OnlineExamEntities data = new OnlineExamEntities();

        // This function is accessed through HTTP POST method by providing email_id and password entered by user in the POST body.
        // It is used to validate a particular user and send response repectively.

        [HttpPost]
        [Route("getUser")]
        public List<User> validateUser([FromBody] User userDetails)
        {
            var name = data.Database.SqlQuery<User>(@"Select * from Users where email_id =@email and password = @password", new SqlParameter("@email", userDetails.email_id), new SqlParameter("@password", userDetails.password)).ToList();
            return name;
        }

        // This function is accessed through HTTP GET method.
        // It is used get all the Users present in the users table. It is used to check list of users enrolled.
        
        [HttpGet]
        [Route("showAllUsers")]
        public IEnumerable<User> getAllUsers()
        {
            var all = data.Database.SqlQuery<User>(@"select * from Users").ToList();
            return all;
        }

        // This function is a accessed through HTTP POST method by providing all the necessary registration details entered by user in the POST body.
        // It is used to store a new user in Users Table and send response repectively.
        
        [HttpPost]
        [Route("registerUser")]
        public string registerUser([FromBody] User registerDetails)
        {
            var checkEmail = data.Database.SqlQuery<string>(@"select email_id from Users where email_id=@email", new SqlParameter("@email", registerDetails.email_id)).ToList();
            var checkMobile = data.Database.SqlQuery<string>(@"select mobile from Users where mobile=@mobile", new SqlParameter("@mobile", registerDetails.mobile)).ToList();

            if (checkEmail.Count != 0)
            {
                return "Email ID Already Exists";
            }
            else if (checkMobile.Count != 0)
            {
                return "Mobile Number Already Exists";
            }
            else
            {
                var register = data.Database.SqlQuery<register>(@"insert into Users (full_name,mobile,email_id,password,city,dob,state,qualification,yoc) values (@full_name,@mobile,@email_id,@password,@city,@dob,@state,@qualification,@yoc) ", new SqlParameter("@city", registerDetails.city), new SqlParameter("@password", registerDetails.password), new SqlParameter("@dob", registerDetails.dob), new SqlParameter("@state", registerDetails.state), new SqlParameter("@qualification", registerDetails.qualification), new SqlParameter("@yoc", registerDetails.yoc), new SqlParameter("@email_id", registerDetails.email_id), new SqlParameter("@full_name", registerDetails.full_name), new SqlParameter("@mobile", registerDetails.mobile)).ToList();
                return "Added Successfully";
            }
        }

        // This function is accessed through HTTP POST method by providing email_id and password entered by Admin in the POST body.
        // It is used to validate a particular admin and send response repectively.
        
        [HttpPost]
        [Route("getAdmin")]
        public List<string> validateAdmin([FromBody] User userDetails)
        {
            var name = data.Database.SqlQuery<string>(@"Select full_name from Admin where email_id =@email and password = @password", new SqlParameter("@email", userDetails.email_id), new SqlParameter("@password", userDetails.password)).ToList();
            return name;
        }

        // This function is a accessed through HTTP POST method by providing email_id entered by user in the POST body.
        // It is used generate random OTP, send it to the provided email using smtp server of gmail and send it to angular repectively.
        
        [HttpPost]
        [AllowAnonymous]
        [Route("sendMail")]
        public string PostSendGmail([FromBody] User userDetails)
        {
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);

            SmtpClient client = new SmtpClient();
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.EnableSsl = true;
            client.Host = "smtp.gmail.com";
            client.Port = 587;
            // setup Smtp authentication
            System.Net.NetworkCredential credentials =
                new System.Net.NetworkCredential("ltieq.noreply@gmail.com", "saurav_123");
            client.UseDefaultCredentials = false;
            client.Credentials = credentials;
            //can be obtained from your model
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("ltieq.noreply@gmail.com");
            msg.To.Add(new MailAddress(userDetails.email_id));
            msg.Subject = "Dear User, your otp is " + otp;
            msg.IsBodyHtml = true;
            msg.Body = string.Format("<html><head></head><body><b>Message Email</b></body>");
            try
            {
                client.Send(msg);
                return otp.ToString();
            }
            catch (Exception ex)
            {
                return "error:" + ex.ToString();
            }
        }

        // This function is a accessed through HTTP POST method by providing the new entered password entered by user in the POST body.
        // It is used to store a new password in Users Table if user chooses the forgot password option and send reponse repectively.
        
        [HttpPost]
        [AllowAnonymous]
        [Route("resetPassword")]
        public string resetPassword([FromBody] User userDetails)
        {
            data.Database.ExecuteSqlCommand(@"update Users set password = @password where email_id = @email", new SqlParameter("@password", userDetails.password), new SqlParameter("@email", userDetails.email_id));
            return "Password Changed Successfully";

        }
    }
}
