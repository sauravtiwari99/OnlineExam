using GladiatorBackend.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

// This Controller consists of Web APIs to generate sets of questions of different sets and their difficulty levels. Also, to store user scores for each level.
namespace GladiatorBackend.Controllers
{
    //This is the route prefix to access methods of this controller/class.

    [RoutePrefix("api/students/test")]
    public class testController : ApiController
    {
        // Creating an object of the Db context class to query the MSSQL database using entity framework.

        OnlineExamEntities data = new OnlineExamEntities();

        // This function is accessed through HTTP POST method which takes test subject name from POST body.
        // It is used to return a random set of 20 easy questions.

        [HttpPost]
        [Route("easy")]
        public List<questionR> level1([FromBody] filepath filepath)
        {
            var free = filepath.subject + "_Sets";
            var avail = data.Database.SqlQuery<string>(@"select table_name from " + free + " where availability = 'no'").ToList();
            var random = new Random();
            int index = random.Next(avail.Count);
            char[] questionSet = avail[index].ToArray();
            filepath.set = questionSet[questionSet.Length - 1].ToString();
            var all = data.Database.SqlQuery<questionR>(@"select top 20 sno,question,option1, option2, option3, option4, [correct option] as correct_option, difficulty from " + filepath.subject + "Question" + filepath.set + " where difficulty = 'easy' order by NEWID()").ToList();
            return all;
        }

        // This function is accessed through HTTP POST method which takes test subject name from POST body.
        // It is used to return a random set of 20 medium questions.

        [HttpPost]
        [Route("medium")]
        public List<questionR> level2([FromBody] filepath filepath)
        {
            var free = filepath.subject + "_Sets";
            var avail = data.Database.SqlQuery<string>(@"select table_name from " + free + " where availability = 'no'").ToList();
            var random = new Random();
            int index = random.Next(avail.Count);
            char[] questionSet = avail[index].ToArray();
            filepath.set = questionSet[questionSet.Length - 1].ToString();
            var all = data.Database.SqlQuery<questionR>(@"select top 20  sno,question,option1, option2, option3, option4, [correct option] as correct_option, difficulty from " + filepath.subject + "Question" + filepath.set + " where difficulty = 'medium' order by NEWID()").ToList();
            return all;
        }

        // This function is accessed through HTTP POST method which takes test subject name from POST body.
        // It is used to return a random set of 10 hard questions.

        [HttpPost]
        [Route("hard")]
        public List<questionR> level3([FromBody] filepath filepath)
        {
            var free = filepath.subject + "_Sets";
            var avail = data.Database.SqlQuery<string>(@"select table_name from " + free + " where availability = 'no'").ToList();
            var random = new Random();
            int index = random.Next(avail.Count);
            char[] questionSet = avail[index].ToArray();
            filepath.set = questionSet[questionSet.Length - 1].ToString();

            var all = data.Database.SqlQuery<questionR>(@"select top 10 sno,question,option1, option2, option3, option4, [correct option] as correct_option, difficulty from " + filepath.subject + "Question" + filepath.set + " where difficulty = 'hard' order by NEWID()").ToList();
            return all;
        }

        // This function is accessed through HTTP POST method which takes user details and scores for level 1 from POST body.
        // It is used to store the result of a particular user for a single test in Reports table.

        [HttpPost]
        [Route("insert")]
        public List<int> reportInsert([FromBody] reportStudent RS)
        {
            var exam_id = data.Database.SqlQuery<int>(@"select exam_id from Exam_List where exam_name = @exam_name", new SqlParameter("@exam_name", RS.subject)).ToList();
            var all = data.Database.ExecuteSqlCommand(@"insert into Reports(user_id,exam_id,exam_name,level1_score,level2_score,level3_score) values (@user_id,@exam_id,@exam_name,@level1_score,@level2_score,@level3_score)", new SqlParameter("@user_id", RS.user_id), new SqlParameter("@exam_id", exam_id.First()), new SqlParameter("@exam_name", RS.subject), new SqlParameter("@level1_score", RS.level1_score), new SqlParameter("@level2_score", RS.level2_score), new SqlParameter("@level3_score", RS.level3_score));
            var report_id = data.Database.SqlQuery<int>(@"select top 1 report_id from Reports order by report_id desc").ToList();
            return report_id;
        }

        // This function is accessed through HTTP POST method which takes user details and scores for level 2 or 3 from POST body.
        // It is used to store the result of a particular user for a single test in Reports table for same test if level 1 or 2 is cleared.

        [HttpPost]
        [Route("update")]
        public List<int> reportUpdate([FromBody] reportStudent RS)
        {
            if (RS.level2_score > 0)
            {

                var all = data.Database.ExecuteSqlCommand(@"update Reports set level2_score =" + RS.level2_score + " where report_id =" + RS.report_id);
                var report_id = data.Database.SqlQuery<int>(@"select top 1 report_id from Reports order by report_id desc").ToList();
                return report_id;
            }
            else if (RS.level3_score > 0)
            {
                var all = data.Database.ExecuteSqlCommand(@"update Reports set level3_score =" + RS.level3_score + " where report_id =" + RS.report_id);
                List<int> list = new List<int>() { 1 };
                return list;
            }
            else
            {
                List<int> list = new List<int>() { 0 };
                return list;
            }
        }
    }
}
