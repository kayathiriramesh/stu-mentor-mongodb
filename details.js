/*inserting users*/
// use students;

db.users.insertMany([
    {
        userid: 1,
        name: "Kayathiri",
        email: "kayu@gmail.com",
        mentorid: 1
    },
    {
        userid: 2,
        name: "Kavi",
        email: "kavi@gmail.com",
        mentorid: 2
    },
    {
        userid: 3,
        name: "Mahi",
        email: "mahi@gmail.com",
        mentorid: 3
    },
    {
        userid: 4,
        name: "Renuga",
        email: "Renu@gmail.com",
        mentorid: 1
    },
    {
        userid: 5,
        name: "nikisha",
        email: "niki@gmail.com",
        mentorid: 2
    }

])

/*codekata*/
//    use students;
db.codekata.insertMany([
    {
        userid: 1,
        problems: 10
    },
    {
        userid: 2,
        problems: 40
    },
    {
        userid: 3,
        problems: 20
    },
    {
        userid: 4,
        problems: 50
    },
    {
        userid: 5,
        problems: 70
    }
])

/*topics*/
// use students;
db.topics.insertMany([
    {
        topicid: 1,
        topic: "html",
        topic_date: new Date("4-oct-2020")
    },
    {
        topicid: 2,
        topic: "css",
        topic_date: new Date("10-oct-2020")
    },
    {
        topicid: 3,
        topic: "Javascript",
        topic_date: new Date("15-oct-2020")
    },
    {
        topicid: 4,
        topic: "React",
        topic_date: new Date("20-oct-2020")
    },
    {
        topicid: 5,
        topic: "NodeJs",
        topic_date: new Date("25-oct-2020")
    }
])

/*tasks*/
//use students;
db.tasks.insertMany([
    {
        taskid: 1,
        topicid: 1,
        userid: 1,
        task: "html task",
        due_date: new Date("4-oct-2020"),
        submitted: true
    },
    {
        taskid: 2,
        topicid: 2,
        userid: 2,
        task: "css task",
        due_date: new Date("10-oct-2020"),
        submitted: true
    },
    {
        taskid: 3,
        topicid: 3,
        userid: 3,
        task: "Javascript task",
        due_date: new Date("15-oct-2020"),
        submitted: false
    },
    {
        taskid: 4,
        topicid: 4,
        userid: 4,
        task: "React task",
        due_date: new Date("20-oct-2020"),
        submitted: false
    },
    {
        taskid: 5,
        topicid: 5,
        userid: 5,
        task: "Node task",
        due_date: new Date("25-oct-2020"),
        submitted: false
    },
    {
        taskid: 6,
        topicid: 4,
        userid: 5,
        task: "React task",
        due_date: new Date("20-oct-2020"),
        submitted: true
    },
    {
        taskid: 7,
        topicid: 4,
        userid: 1,
        task: "React task",
        due_date: new Date("20-oct-2020"),
        submitted: true
    }
])

/*attendance*/
//use students;
db.attendance.insertMany([
    {
        userid: 1,
        topicid: 1,
        attended: true
    },
    {
        userid: 2,
        topicid: 2,
        attended: true
    },
    {
        userid: 3,
        topicid: 3,
        attended: false
    },
    {
        userid: 4,
        topicid: 4,
        attended: false
    },
    {
        userid: 5,
        topicid: 5,
        attended: false
    },
    {
        userid: 4,
        topicid: 4,
        attended: true
    },
    {
        userid: 1,
        topicid: 4,
        attended: true
    }

])

/*mentors*/
//use students;
db.mentors.insertMany([
    {
        mentorid: 1,
        mentorname: "Nagaraj",
        mentor_email: "nagaraj@gmail.com"
    },
    {
        mentorid: 2,
        mentorname: "Sasi",
        mentor_email: "sasi@gmail.com"
    },
    {
        mentorid: 3,
        mentorname: "Kasthuri",
        mentor_email: "kasthuri@gmail.com"
    },
    {
        mentorid: 4,
        mentorname: "Mirna",
        mentor_email: "mirna@gmail.com"
    },
    {
        mentorid: 5,
        mentorname: "sakthi",
        mentor_email: "sakthi@gmail.com"
    }
])


/*company drives*/
//use students;
db.companies.insertMany([
    {
        userid: 1,
        date: new Date("10-oct-2020"),
        company: "Google"
    },
    {
        userid: 1,
        date: new Date("15-oct-2020"),
        company: "Amazon"
    },
    {
        userid: 2,
        date: new Date("20-oct-2020"),
        company: "Zoho"
    },
    {
        userid: 3,
        date: new Date("25-oct-2020"),
        company: "Zolo"
    },
    {
        userid: 4,
        date: new Date("27-oct-2020"),
        company: "HCL"
    }
])
