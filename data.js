const friends = [
  {
    id: 1,
    name: "Vansh Rana",
    phone: "87082 78517",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B4-911", faculty: "Vishal Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B4-911", faculty: "Vishal Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Soft Skills-III", location: "Block-B4-705", faculty: "Akash Kumar" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Soft Skills-III", location: "Block-B4-705", faculty: "Akash Kumar" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B4-906", faculty: "Prashant Ahluwalia" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Aptitude-III", location: "Block-B4-906", faculty: "Manphool Singh" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Aptitude-III", location: "Block-B4-906", faculty: "Manphool Singh" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "23CSP-339", location: "Block-B4-905", faculty: "Daulat Ram" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "23CSP-339", location: "Block-B4-905", faculty: "Daulat Ram" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B4-906", faculty: "Neeraj Kumar" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B4-912", faculty: "Ankita Sharma" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B4-912", faculty: "Ankita Sharma" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "ADBMS", location: "Block-B4-919", faculty: "Girish Dilip Chitte" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "ADBMS", location: "Block-B4-919", faculty: "Girish Dilip Chitte" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B4-906", faculty: "Neeraj Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Operating System", location: "Block-B4-906", faculty: "Prashant Ahluwalia" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "23CSP-339", location: "Block-B4-905", faculty: "Daulat Ram" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "23CSP-339", location: "Block-B4-905", faculty: "Daulat Ram" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B4-906", faculty: "Ankita Sharma" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Aptitude-III", location: "Block-B4-906", faculty: "Manphool Singh" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Aptitude-III", location: "Block-B4-906", faculty: "Manphool Singh" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B4-918", faculty: "Vishal Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B4-918", faculty: "Vishal Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B4-911", faculty: "Kusum Lata" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B4-911", faculty: "Kusum Lata" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B4-906", faculty: "Kusum Lata" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B4-906", faculty: "Ankita Sharma" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Operating System", location: "Block-B4-906", faculty: "Prashant Ahluwalia" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B4-906", faculty: "Kusum Lata" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Computer Networks", location: "Block-B4-906", faculty: "Ankita Sharma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B4-906", faculty: "Neeraj Kumar" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B4-905-A", faculty: "Akash Kumar" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B4-905-A", faculty: "Akash Kumar" },
        { start: "02:45 PM", end: "03:35 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 2,
    name: "Mahika Gaba",
    phone: "79760 27842",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Puneet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Puneet Kaur" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Jyoti Arora" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "ADBMS", location: "Block-B3-303", faculty: "Aditya Singh" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "ADBMS", location: "Block-B3-303", faculty: "Aditya Singh" },
        { start: "11:20 AM", end: "12:10 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ]
    }
  },
  {
    id: 3,
    name: "Ankit Tiwari",
    phone: "88375 30074",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Kuldeep Kumar" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Madhu Kumari" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Madhu Kumari" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Madhu Kumari" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Madhu Kumari" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "ADBMS", location: "Block-B3-303", faculty: "Pramatma Vishwakarma" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "ADBMS", location: "Block-B3-303", faculty: "Pramatma Vishwakarma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" }
      ]
    }
  },
  {
    id: 4,
    name: "Khushi Tyagi",
    phone: "99924 81747",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-305", faculty: "Madhu Kumari" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-305", faculty: "Madhu Kumari" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-305", faculty: "Vinay Kumar" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-305", faculty: "Vinay Kumar" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-305", faculty: "Charnpreet Kaur" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-305", faculty: "Radha" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-305", faculty: "Radha" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "ADBMS", location: "Block-B3-305", faculty: "Pramatma Vishwakarma" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "ADBMS", location: "Block-B3-305", faculty: "Pramatma Vishwakarma" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-305", faculty: "Khushbu Cheetu" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Computer Networks", location: "Block-B3-305", faculty: "Kuldeep Kumar" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-305", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-305", faculty: "Charnpreet Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-305", faculty: "Kuldeep Kumar" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-305", faculty: "Natali Singla" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-305", faculty: "Natali Singla" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-305", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-305", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-305", faculty: "Jyoti Arora" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-305", faculty: "Madhu Kumari" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-305", faculty: "Madhu Kumari" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Computer Networks", location: "Block-B3-305", faculty: "Kuldeep Kumar" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-305", faculty: "Charnpreet Kaur" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-305", faculty: "Khushbu Cheetu" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Operating System", location: "Block-B3-305", faculty: "Jyoti Arora" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 5,
    name: "Ujjwal Garg",
    phone: "74578 10800",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-306", faculty: "Amrita Chaudhary" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-306", faculty: "Khushbu Cheetu" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-306", faculty: "Ankush" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-306", faculty: "Ankush" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-306", faculty: "Puneet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-306", faculty: "Vivek Singh" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-306", faculty: "Vivek Singh" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-306", faculty: "Radha" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-306", faculty: "Amrita Chaudhary" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Nidhi Sood" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Nidhi Sood" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-306", faculty: "Puneet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "ADBMS", location: "Block-B3-306", faculty: "Pramatma Vishwakarma" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "ADBMS", location: "Block-B3-306", faculty: "Pramatma Vishwakarma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-306", faculty: "Puneet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-306", faculty: "Amrita Chaudhary" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-306", faculty: "Radha" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110-A", faculty: "Nidhi Sood" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110-A", faculty: "Nidhi Sood" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-306", faculty: "Ankush" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-306", faculty: "Ankush" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-306", faculty: "Radha" },
        { start: "02:45 PM", end: "03:35 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-306", faculty: "Khushbu Cheetu" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-306", faculty: "Khushbu Cheetu" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-306", faculty: "Madhu Kumari" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-306", faculty: "Madhu Kumari" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-306", faculty: "Radha" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-306", faculty: "Radha" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-306", faculty: "Khushbu Cheetu" }
      ]
    }
  },
  {
    id: 6,
    name: "Aayush Khanna",
    phone: "96464 72613",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Puneet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Puneet Kaur" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-303", faculty: "Tarun Kumar Pandey" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Khushbu Cheetu" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-303", faculty: "Jyoti Arora" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "ADBMS", location: "Block-B3-303", faculty: "Aditya Singh" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "ADBMS", location: "Block-B3-303", faculty: "Aditya Singh" },
        { start: "11:20 AM", end: "12:10 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Computer Networks", location: "Block-B3-303", faculty: "Kuldeep Kumar" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-303", faculty: "Jyoti Arora" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ]
    }
  }
];