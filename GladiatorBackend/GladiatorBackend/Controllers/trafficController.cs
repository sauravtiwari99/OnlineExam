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
            var all = data.Database.SqlQuery<User>(@"select * from Users ").ToList();
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
        //This returns the Total No of times a particular test was attempted

        [HttpPost]
        [Route("subjectTraffic")]
        public int subjectTraffic([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='" + filepath.subject+"'").ToList();
            return all.Count;
        }

        // This function is accessed through HTTP POST method
        // This returns the count of Distinct Users who attempted particular test

        [HttpPost]
        [Route("subjectDistinctTraffic")]
        public int subjectDistinctTraffic([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<User>(@"select distinct Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name ='" + filepath.subject+"'").ToList();
            return all.Count;
        }
    }
}
