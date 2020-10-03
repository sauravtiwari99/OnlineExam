using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Results;
using GladiatorBackend.Models;
using FileReader;

// This Controller consists of Web APIs to Upload and Remove sets of questions for different subjects by Admin only. 

namespace GladiatorBackend.Controllers
{
    //This is the route prefix to access methods of this controller/class.

    [RoutePrefix("api/admins/upload")]
    public class uploadController : ApiController
    {
        // Creating an object of the Db context class to query the MSSQL database using entity framework.

        OnlineExamEntities data = new OnlineExamEntities();

        // This function is accessed through HTTP POST method it takes subject name. 
        //it returns Set and its avaliability in which upload can be performed 

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadSet")]
        public List<setTable> uploadSet([FromBody] filepath subject)
        {
            var free = subject.subject + "_Sets";
            var avail = data.Database.SqlQuery<setTable>(@"select table_name, availability from " + free).ToList();
            return avail;
        }

        // This function is accessed through HTTP POST method which takes subject_name from POST body.
        // It is used to return available sets for a particular subject and give response accordingly.

        [HttpPost]
        [AllowAnonymous]
        [Route("Available")]
        public List<string> available([FromBody] filepath subject)
        {
            var free = subject.subject + "_Sets";
            var avail = data.Database.SqlQuery<string>(@"select table_name from " + free + " where availability = 'no'").ToList();

            return avail;
        }

        // It is used to remove a set of Java questions from the table and give response accordingly.

        [HttpPost]
        [AllowAnonymous]
        [Route("removeJava")]
        public string removeJava([FromBody] filepath set)
        {
            var free = "javaQuestion" + set.set;
            data.Database.ExecuteSqlCommand(@"truncate table javaQuestion" + set.set);
            data.Database.ExecuteSqlCommand(@"update Java_Sets set availability = 'yes' where table_name=@tablename", new SqlParameter("@tablename", free));
            data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts - 1 where exam_id =1");
            return "Deleted";
        }

        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a java question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadJava")]
        public string javaSet([FromBody] filepath csv_file_path)
        {
            var count = data.Database.SqlQuery<int>(@"select exam_set_counts from Exam_List where exam_id=1").FirstOrDefault<int>();
            if (count <= 2)
            {
                var free = data.Database.SqlQuery<string>(@"select top 1 table_name from Java_Sets where availability = 'yes'").FirstOrDefault<string>();
                string tableName = free;
                CSVtoSQL c = new CSVtoSQL();
                DataTable csvData = FileReader.CSVtoSQL.GetDataTabletFromCSVFile(csv_file_path.csv_file_path);
                Console.WriteLine("Rows count:" + csvData.Rows.Count);

                c.InsertDataIntoSQLServerUsingSQLBulkCopy(csvData, tableName);
                foreach (var column in csvData.Columns)
                {
                    Console.WriteLine(column);
                }
                data.Database.ExecuteSqlCommand(@"update Java_Sets set availability = 'no' where table_name=@tablename", new SqlParameter("@tablename", free));
                data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts + 1 where exam_id =1");
                return "Added Successfully";

            }
            else
                return "No More Set Can be Added";
        }

        // This function is accessed through HTTP POST method which takes set number from POST body.
        // It is used to remove a set of Cplus questions from the table and give response accordingly.

        [HttpPost]
        [AllowAnonymous]
        [Route("removeCplus")]
        public string removeCplus([FromBody] filepath set)
        {
            var free = "CplusQuestion" + set.set;
            data.Database.ExecuteSqlCommand(@"truncate table cplusQuestion" + set.set);
            data.Database.ExecuteSqlCommand(@"update Cplus_Sets set availability = 'yes' where table_name=@tablename", new SqlParameter("@tablename", free));
            data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts - 1 where exam_id =2");
            return "Deleted";
        }

        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a Cplus question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadCplus")]
        public string CplusSet([FromBody] filepath csv_file_path)
        {
            var count = data.Database.SqlQuery<int>(@"select exam_set_counts from Exam_List where exam_id=2").FirstOrDefault<int>();
            if (count <= 2)
            {
                var free = data.Database.SqlQuery<string>(@"select top 1 table_name from Cplus_Sets where availability = 'yes'").FirstOrDefault<string>();
                string tableName = free;
                CSVtoSQL c = new CSVtoSQL();
                DataTable csvData = FileReader.CSVtoSQL.GetDataTabletFromCSVFile(csv_file_path.csv_file_path);
                Console.WriteLine("Rows count:" + csvData.Rows.Count);

                c.InsertDataIntoSQLServerUsingSQLBulkCopy(csvData, tableName);
                foreach (var column in csvData.Columns)
                {
                    Console.WriteLine(column);
                }
                data.Database.ExecuteSqlCommand(@"update Cplus_Sets set availability = 'no' where table_name=@tablename", new SqlParameter("@tablename", free));
                data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts + 1 where exam_id =2");
                return "Added Successfully";

            }
            else
                return "No More Set Can be Added";
        }


        // This function is accessed through HTTP POST method which takes set number from POST body.
        // It is used to remove a set of Csharp questions from the table and give response accordingly.

        [HttpPost]
        [AllowAnonymous]
        [Route("removeCsharp")]
        public string removeCsharp([FromBody] filepath set)
        {
            var free = "CsharpQuestion" + set.set;
            data.Database.ExecuteSqlCommand(@"truncate table csharpQuestion" + set.set);
            data.Database.ExecuteSqlCommand(@"update Csharp_Sets set availability = 'yes' where table_name=@tablename", new SqlParameter("@tablename", free));
            data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts - 1 where exam_id =3");
            return "Deleted";
        }


        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a Csharp question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadCsharp")]
        public string CsharpSet([FromBody] filepath csv_file_path)
        {
            var count = data.Database.SqlQuery<int>(@"select exam_set_counts from Exam_List where exam_id=3").FirstOrDefault<int>();
            if (count <= 2)
            {
                var free = data.Database.SqlQuery<string>(@"select top 1 table_name from Csharp_Sets where availability = 'yes'").FirstOrDefault<string>();
                string tableName = free;
                CSVtoSQL c = new CSVtoSQL();
                DataTable csvData = FileReader.CSVtoSQL.GetDataTabletFromCSVFile(csv_file_path.csv_file_path);
                Console.WriteLine("Rows count:" + csvData.Rows.Count);

                c.InsertDataIntoSQLServerUsingSQLBulkCopy(csvData, tableName);
                foreach (var column in csvData.Columns)
                {
                    Console.WriteLine(column);
                }
                data.Database.ExecuteSqlCommand(@"update Csharp_Sets set availability = 'no' where table_name=@tablename", new SqlParameter("@tablename", free));
                data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts + 1 where exam_id =3");
                return "Added Successfully";

            }
            else
                return "No More Set Can be Added";
        }

        // This function is accessed through HTTP POST method which takes set number from POST body.
        // It is used to remove a set of Php questions from the table and give response accordingly.


        [HttpPost]
        [AllowAnonymous]
        [Route("removePhp")]
        public string removePhp([FromBody] filepath set)
        {
            var free = "PhpQuestion" + set.set;
            data.Database.ExecuteSqlCommand(@"truncate table phpQuestion" + set.set);
            data.Database.ExecuteSqlCommand(@"update Php_Sets set availability = 'yes' where table_name=@tablename", new SqlParameter("@tablename", free));
            data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts - 1 where exam_id =4");
            return "Deleted";
        }

        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a Php question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadPhp")]
        public string PhpSet([FromBody] filepath csv_file_path)
        {
            var count = data.Database.SqlQuery<int>(@"select exam_set_counts from Exam_List where exam_id=4").FirstOrDefault<int>();
            if (count <= 2)
            {
                var free = data.Database.SqlQuery<string>(@"select top 1 table_name from Php_Sets where availability = 'yes'").FirstOrDefault<string>();
                string tableName = free;
                CSVtoSQL c = new CSVtoSQL();
                DataTable csvData = FileReader.CSVtoSQL.GetDataTabletFromCSVFile(csv_file_path.csv_file_path);
                Console.WriteLine("Rows count:" + csvData.Rows.Count);

                c.InsertDataIntoSQLServerUsingSQLBulkCopy(csvData, tableName);
                foreach (var column in csvData.Columns)
                {
                    Console.WriteLine(column);
                }
                data.Database.ExecuteSqlCommand(@"update Php_Sets set availability = 'no' where table_name=@tablename", new SqlParameter("@tablename", free));
                data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts + 1 where exam_id =4");
                return "Added Successfully";

            }
            else
                return "No More Set Can be Added";
        }

        // This function is accessed through HTTP POST method which takes set number from POST body.
        // It is used to remove a set of Sql questions from the table and give response accordingly.

        [HttpPost]
        [AllowAnonymous]
        [Route("removeSql")]
        public string removeSql([FromBody] filepath set)
        {
            var free = "SqlQuestion" + set.set;
            data.Database.ExecuteSqlCommand(@"truncate table sqlQuestion" + set.set);
            data.Database.ExecuteSqlCommand(@"update Sql_Sets set availability = 'yes' where table_name=@tablename", new SqlParameter("@tablename", free));
            data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts - 1 where exam_id =5");
            return "Deleted";
        }

        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a Sql question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadSql")]
        public string SqlSet([FromBody] filepath csv_file_path)
        {
            var count = data.Database.SqlQuery<int>(@"select exam_set_counts from Exam_List where exam_id=5").FirstOrDefault<int>();
            if (count <= 2)
            {
                var free = data.Database.SqlQuery<string>(@"select top 1 table_name from Sql_Sets where availability = 'yes'").FirstOrDefault<string>();
                string tableName = free;
                CSVtoSQL c = new CSVtoSQL();
                DataTable csvData = FileReader.CSVtoSQL.GetDataTabletFromCSVFile(csv_file_path.csv_file_path);
                Console.WriteLine("Rows count:" + csvData.Rows.Count);

                c.InsertDataIntoSQLServerUsingSQLBulkCopy(csvData, tableName);
                foreach (var column in csvData.Columns)
                {
                    Console.WriteLine(column);
                }
                data.Database.ExecuteSqlCommand(@"update Sql_Sets set availability = 'no' where table_name=@tablename", new SqlParameter("@tablename", free));
                data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts + 1 where exam_id =5");
                return "Added Successfully";

            }
            else
                return "No More Set Can be Added";
        }

        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a Python question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("removePython")]
        public string removePython([FromBody] filepath set)
        {
            var free = "PythonQuestion" + set.set;
            data.Database.ExecuteSqlCommand(@"truncate table pythonQuestion" + set.set);
            data.Database.ExecuteSqlCommand(@"update Python_Sets set availability = 'yes' where table_name=@tablename", new SqlParameter("@tablename", free));
            data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts - 1 where exam_id =6");
            return "Deleted";
        }

        // This function is accessed through HTTP POST method which takes subject_name and csv from POST body.
        // It is used to upload a Python question set and self determine which position to fill in.

        [HttpPost]
        [AllowAnonymous]
        [Route("uploadPython")]
        public string PythonSet([FromBody] filepath csv_file_path)
        {
            var count = data.Database.SqlQuery<int>(@"select exam_set_counts from Exam_List where exam_id=6").FirstOrDefault<int>();
            if (count <= 2)
            {
                var free = data.Database.SqlQuery<string>(@"select top 1 table_name from Python_Sets where availability = 'yes'").FirstOrDefault<string>();
                string tableName = free;
                CSVtoSQL c = new CSVtoSQL();
                DataTable csvData = FileReader.CSVtoSQL.GetDataTabletFromCSVFile(csv_file_path.csv_file_path);
                Console.WriteLine("Rows count:" + csvData.Rows.Count);

                c.InsertDataIntoSQLServerUsingSQLBulkCopy(csvData, tableName);
                foreach (var column in csvData.Columns)
                {
                    Console.WriteLine(column);
                }
                data.Database.ExecuteSqlCommand(@"update Python_Sets set availability = 'no' where table_name=@tablename", new SqlParameter("@tablename", free));
                data.Database.ExecuteSqlCommand(@"update Exam_List set exam_set_counts = exam_set_counts + 1 where exam_id =6");
                return "Added Successfully";

            }
            else
                return "No More Set Can be Added";
        }

    }
}
