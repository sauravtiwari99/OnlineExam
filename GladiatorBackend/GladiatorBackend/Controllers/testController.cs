﻿using GladiatorBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GladiatorBackend.Controllers
{
    [RoutePrefix("api/students/test")]
    public class testController : ApiController
    {
        OnlineExamEntities data = new OnlineExamEntities();
        [HttpPost]
        [Route("easy")]
        public List<javaQuestion1> level1([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<javaQuestion1>(@"select sno,question,option1, option2, option3, option4, [correct option] as correct_option, difficulty from " + filepath.subject + "Question" + filepath.set + " where difficulty = 'easy' order by NEWID()").ToList();
            return all;
        }
        [HttpPost]
        [Route("medium")]
        public List<javaQuestion1> level2([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<javaQuestion1>(@"select sno,question,option1, option2, option3, option4, [correct option] as correct_option, difficulty from " + filepath.subject + "Question" + filepath.set + " where difficulty = 'medium' order by NEWID()").ToList();
            return all;
        }
        [HttpPost]
        [Route("hard")]
        public List<javaQuestion1> level3([FromBody] filepath filepath)
        {
            var all = data.Database.SqlQuery<javaQuestion1>(@"select sno,question,option1, option2, option3, option4, [correct option] as correct_option, difficulty from " + filepath.subject + "Question" + filepath.set + " where difficulty = 'hard' order by NEWID()").ToList();
            return all;
        }
    }
}