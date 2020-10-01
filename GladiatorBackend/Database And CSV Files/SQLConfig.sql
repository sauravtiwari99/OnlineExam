Create database Online_Exam
Use Online_Exam

create table Users(
user_id int primary key IDENTITY(1,1),
full_name varchar(MAX) not null,
mobile varchar(10) not null unique,
email_id varchar(100) not null unique,
password varchar(MAX) not null ,
city varchar(MAX) not null,
dob date not null,
state varchar(MAX) not null,
qualification varchar(MAX) not null,
yoc varchar(MAX) not null)

create table Admin(
admin_id int primary key Identity(1,1),
full_name varchar(MAX) not null,
email_id varchar(100) not null unique,
password varchar(max) not null)

create table Exam_List(
exam_id int primary key Identity(1,1),
exam_name varchar(MAX) not null,
exam_set_counts int not null,
total_marks int not null)

create table Reports(
report_id int primary key Identity(1,1),
user_id int constraint User_ID foreign key references Users(user_id),
exam_id int constraint Exam_ID foreign key references Exam_List(exam_id),
exam_name varchar(Max) not null,
level1_score int not null,
level2_score int not null,
level3_score int not null
)

create table javaQuestion1
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table javaQuestion2
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table javaQuestion3
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table Java_Sets(
table_name varchar(100) primary key,
exam_id int constraint Exam_ID1 foreign key references Exam_List(exam_id),
availability varchar(3)
)


insert into Exam_List values ('Java','0',100)
insert into Java_Sets values ('javaQuestion1',1,'yes')


insert into Java_Sets values ('javaQuestion2',1,'yes')
insert into Java_Sets values ('javaQuestion3',1,'yes')

create table Cplus_Sets(
table_name varchar(100) primary key,
exam_id int constraint Exam_ID2 foreign key references Exam_List(exam_id),
availability varchar(3)
)
create table Csharp_Sets(
table_name varchar(100) primary key,
exam_id int constraint Exam_ID3 foreign key references Exam_List(exam_id),
availability varchar(3)
)

create table Php_Sets(
table_name varchar(100) primary key,
exam_id int constraint Exam_ID4 foreign key references Exam_List(exam_id),
availability varchar(3)
)
create table Sql_Sets(
table_name varchar(100) primary key,
exam_id int constraint Exam_ID5 foreign key references Exam_List(exam_id),
availability varchar(3)
)
create table Python_Sets(
table_name varchar(100) primary key,
exam_id int constraint Exam_ID6 foreign key references Exam_List(exam_id),
availability varchar(3)
)

insert into Exam_List values ('Cplus','0',100)
insert into Exam_List values ('Csharp','0',100)
insert into Exam_List values ('Php','0',100)
insert into Exam_List values ('Sql','0',100)
insert into Exam_List values ('Python','0',100)

insert into Cplus_Sets values ('cplusQuestion1',2,'yes')
insert into Cplus_Sets values ('cplusQuestion2',2,'yes')
insert into Cplus_Sets values ('cplusQuestion3',2,'yes')

insert into Csharp_Sets values ('csharpQuestion1',3,'yes')
insert into Csharp_Sets values ('csharpQuestion2',3,'yes')
insert into Csharp_Sets values ('csharpQuestion3',3,'yes')

insert into Php_Sets values ('phpQuestion1',4,'yes')
insert into Php_Sets values ('phpQuestion2',4,'yes')
insert into Php_Sets values ('phpQuestion3',4,'yes')

insert into Sql_Sets values ('sqlQuestion1',5,'yes')
insert into Sql_Sets values ('sqlQuestion2',5,'yes')
insert into Sql_Sets values ('sqlQuestion3',5,'yes')

insert into Python_Sets values ('pythonQuestion1',6,'yes')
insert into Python_Sets values ('pythonQuestion2',6,'yes')
insert into Python_Sets values ('pythonQuestion3',6,'yes')

create table cplusQuestion1
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)
create table cplusQuestion2
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)
create table cplusQuestion3
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table csharpQuestion1
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)
create table csharpQuestion2
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table csharpQuestion3
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table phpQuestion1
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table phpQuestion2
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table phpQuestion3
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table sqlQuestion1
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table sqlQuestion2
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table sqlQuestion3
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table pythonQuestion1
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table pythonQuestion2
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

create table pythonQuestion3
(
sno int primary key,
question varchar(max),
option1 varchar(max),
option2	varchar(max),
option3 varchar(max),
option4	varchar(max),
[correct option] varchar(max),
difficulty varchar(max)
)

insert into Admin values ('Admin User','ltieq.noreply@gmail.com','Admin@123')
