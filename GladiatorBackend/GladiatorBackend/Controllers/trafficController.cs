using GladiatorBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GladiatorBackend.Controllers
{
    [RoutePrefix("api/traffic")]
    public class trafficController : ApiController
    {
        OnlineExamEntities data = new OnlineExamEntities();

        //total registration 
        [HttpPost]
        [Route("allTraffic")]
        public int allTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select * from Users ").ToList();
            return all.Count;
        }

        //Total Test Attempts
        [HttpPost]
        [Route("examTrafic")]
        public int examTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id").ToList();
            return all.Count;
        }

        //Distinct Users who appeared for any time
        [HttpPost]
        [Route("distinctTraffic")]
        public int distinctTraffic()
        {
            var all = data.Database.SqlQuery<User>(@"select distinct Users.* from Users inner join Reports on Reports.user_id = Users.user_id").ToList();
            return all.Count;
        }

        //Total No of times a particular test was attempted
        [HttpPost]
        [Route("subjectTraffic")]
        public int subjectTraffic([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<User>(@"select Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name =" + filepath.subject).ToList();
            return all.Count;
        }

        // Distinct User attempted particular test
        [HttpPost]
        [Route("subjectDistinctTraffic")]
        public int subjectDistinctTraffic([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<User>(@"select distinct Users.* from Users inner join Reports on Reports.user_id = Users.user_id where Reports.exam_name =" + filepath.subject).ToList();
            return all.Count;
        }
    }
}
