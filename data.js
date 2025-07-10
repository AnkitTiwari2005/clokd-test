const friends = [
  {
    id: 1,
    name: "Vansh Rana",
    phone: "87082 78517",
    timetable: {
      Monday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "11:20", end: "12:10", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Operating System", location: "Block-B2-103", faculty: "Bandan Jot Kaur" },
        { start: "13:55", end: "14:45", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Tuesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "10:20", end: "11:10", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Bandan Jot Kaur" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "12:10", end: "13:00", type: "Class", title: "Computer Networks", location: "Block-B2-103", faculty: "Himanshi" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Full Stack-I", location: "Block-B2-103", faculty: "Sumit Malhotra" },
        { start: "14:45", end: "15:35", type: "Class", title: "Full Stack-I", location: "Block-B2-103", faculty: "Sumit Malhotra" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Wednesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "10:20", end: "11:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "11:20", end: "12:10", type: "Class", title: "Computer Networks", location: "Block-B2-103", faculty: "Himanshi" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Soft Skills-III", location: "Block-B2-106", faculty: "Amit Kaur" },
        { start: "13:55", end: "14:45", type: "Class", title: "Soft Skills-III", location: "Block-B2-106", faculty: "Amit Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" },
        { start: "15:35", end: "16:25", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" }
      ],
      Thursday: [
        { start: "09:30", end: "10:20", type: "Class", title: "ADBMS", location: "Block-B2-103", faculty: "Shweta Sharma" },
        { start: "10:20", end: "11:10", type: "Class", title: "ADBMS", location: "Block-B2-103", faculty: "Shweta Sharma" },
        { start: "11:20", end: "12:10", type: "Class", title: "Soft Skills-III", location: "Block-B2-107", faculty: "Amit Kaur" },
        { start: "12:10", end: "13:00", type: "Class", title: "Soft Skills-III", location: "Block-B2-107", faculty: "Amit Kaur" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Operating System", location: "Block-B2-103", faculty: "Bandan Jot Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "10:20", end: "11:10", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "13:55", end: "14:45", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "14:45", end: "15:35", type: "Class", title: "Full Stack-I", location: "Block-B2-103", faculty: "Sumit Malhotra" },
        { start: "15:35", end: "16:25", type: "Class", title: "Full Stack-I", location: "Block-B2-103", faculty: "Sumit Malhotra" }
      ]
    }
  },
  {
    id: 2,
    name: "Ankit Tiwari",
    phone: "88375 30074",
    timetable: {
      Monday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "13:55", end: "14:45", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "14:45", end: "15:35", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20", end: "11:10", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "13:55", end: "14:45", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "14:45", end: "15:35", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "15:35", end: "16:25", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Wednesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10", end: "13:00", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ],
      Thursday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "10:20", end: "11:10", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "11:20", end: "12:10", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10", end: "13:00", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "13:05", end: "13:55", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "13:55", end: "14:45", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "14:45", end: "15:35", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 3,
    name: "Aayush Khanna",
    phone: "96464 72613",
    timetable: {
      Monday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "13:55", end: "14:45", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "14:45", end: "15:35", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20", end: "11:10", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "13:55", end: "14:45", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "14:45", end: "15:35", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "15:35", end: "16:25", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Wednesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10", end: "13:00", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ],
      Thursday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "10:20", end: "11:10", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "11:20", end: "12:10", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10", end: "13:00", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "13:05", end: "13:55", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "13:55", end: "14:45", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "14:45", end: "15:35", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 4,
    name: "Mahika Gaba",
    phone: "79760 27842",
    timetable: {
      Monday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "13:55", end: "14:45", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "14:45", end: "15:35", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20", end: "11:10", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "13:55", end: "14:45", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "14:45", end: "15:35", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "15:35", end: "16:25", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Wednesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10", end: "13:00", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ],
      Thursday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "10:20", end: "11:10", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "11:20", end: "12:10", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10", end: "13:00", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "13:05", end: "13:55", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "13:55", end: "14:45", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "14:45", end: "15:35", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 5,
    name: "Khushi Tyagi",
    phone: "99924 81747",
    timetable: {
      Monday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "13:55", end: "14:45", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "14:45", end: "15:35", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20", end: "11:10", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "13:55", end: "14:45", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "14:45", end: "15:35", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "15:35", end: "16:25", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Wednesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10", end: "13:00", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ],
      Thursday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "10:20", end: "11:10", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "11:20", end: "12:10", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10", end: "13:00", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "13:05", end: "13:55", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "13:55", end: "14:45", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "14:45", end: "15:35", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 6,
    name: "Ujjwal Garg",
    phone: "74578 10800",
    timetable: {
      Monday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "13:55", end: "14:45", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "14:45", end: "15:35", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20", end: "11:10", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10", end: "13:00", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:05", end: "13:55", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "13:55", end: "14:45", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "14:45", end: "15:35", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "15:35", end: "16:25", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Wednesday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20", end: "12:10", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10", end: "13:00", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "14:45", end: "15:35", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "15:35", end: "16:25", type: "Class", title: "Competitive Coding-I", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ],
      Thursday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20", end: "11:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20", end: "12:10", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "12:10", end: "13:00", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "13:05", end: "13:55", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "13:55", end: "14:45", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "14:45", end: "15:35", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30", end: "10:20", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "10:20", end: "11:10", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "11:20", end: "12:10", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10", end: "13:00", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "13:05", end: "13:55", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "13:55", end: "14:45", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "14:45", end: "15:35", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "15:35", end: "16:25", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  }
];
