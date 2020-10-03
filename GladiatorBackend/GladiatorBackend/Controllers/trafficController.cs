using GladiatorBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

//This Controller is Used to get total Traffic of LTIeQ.

namespace GladiatorBackend.Controllers
{
    //This is the route prefix to access methods of this controller/class.

    [RoutePrefix("api/traffic")]
    public class trafficController : ApiController
    {
        // Creating an object of the Db context class to query the MSSQL database using entity framework.

        OnlineExamEntities data = new OnlineExamEntities();

        // This function is accessed through HTTP POST method
        //This returns count of All users who have registered 


        [HttpPost]
        [Route("allTraffic")]
        public int allTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select * from Users").ToList();
            return all.Count;
        }


        // This function is accessed through HTTP POST method
        //This returns count of total test given by all registered users

        [HttpPost]
        [Route("examTraffic")]
        public int examTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id").ToList();
            return all.Count;
        }

        // This function is accessed through HTTP POST method
        //This returns the count of Distinct Users who appeared for any test

        [HttpPost]
        [Route("distinctTraffic")]
        public int distinctTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select distinct Users.* from Users inner join Reports on Reports.user_id = Users.user_id").ToList();
            return all.Count;
        }
        // This function is accessed through HTTP POST method
        //This returns the Total No of times Java test was attempted

        [HttpPost]
        [Route("javaTraffic")]
        public int javaTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='Java'").ToList();
            return all.Count;
        }
        
        // This function is accessed through HTTP POST method
        //This returns the Total No of times Cplus test was attempted

        [HttpPost]
        [Route("cplusTraffic")]
        public int cplusTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='Cplus'").ToList();
            return all.Count;
        }
        
        // This function is accessed through HTTP POST method
        //This returns the Total No of times Csharp test was attempted

        [HttpPost]
        [Route("csharpTraffic")]
        public int csharpTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='Csharp'").ToList();
            return all.Count;
        }
        
        // This function is accessed through HTTP POST method
        //This returns the Total No of times PHP test was attempted

        [HttpPost]
        [Route("phpTraffic")]
        public int phpTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='Php'").ToList();
            return all.Count;
        }

        // This function is accessed through HTTP POST method
        //This returns the Total No of times SQL test was attempted

        [HttpPost]
        [Route("sqlTraffic")]
        public int sqlTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='Sql'").ToList();
            return all.Count;
        }

        // This function is accessed through HTTP POST method
        //This returns the Total No of times Python test was attempted

        [HttpPost]
        [Route("pythonTraffic")]
        public int pythonTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='Python'").ToList();
            return all.Count;
        }

    }
}
