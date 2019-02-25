// course professor pairs
const matches = [
{
    "professor": "John Alexis Guerra Gómez",
    "courseId": "CS 5610",
    "courseName": "Web Development"
},
{
    "professor": "Ricardo Baeza-Yates",
    "courseId": "CS 5800",
    "courseName": "Algorithms"
},
{
    "professor": "Ricardo Baeza-Yates",
    "courseId": "CS 5600",
    "courseName": "Computer Systems"
},
{
    "professor": "Abraham Bagherjeiran",
    "courseId": "CS 7610",
    "courseName": "Foundations of Distributed Systems"
},
{
    "professor": "Abraham Bagherjeiran",
    "courseId": "CS 6200",
    "courseName": "Information Retrieval"
},
{
    "professor": "Suhabe Bugrara",
    "courseId": "CS 5520", 
    "courseName": "Mobile Application Development"
},
{
    "professor": "Suhabe Bugrara",
    "courseId": "CS 5500", 
    "courseName": "Managing Software Development"
},
{
    "professor": "Gao Hechen",
    "courseId": "CS 5400",
    "courseName": "Principles of Programming Language"
},
{
    "professor": "Gao Hechen",
    "courseId": "CS 5200",
    "courseName": "Database Management Systems"
},
{
    "professor": "Gao Hechen",
    "courseId": "CS 5150",
    "courseName": "Game Artificial Intelligence"

},
{
    "professor": "Matthew Goodwin",
    "courseId": "CS 5100",
    "courseName": "Foundations of Artificial Intelligence"
},
{
    "professor": "Matthew Goodwin",
    "courseId": "CS 5082", 
    "courseName": "Privacy and Security of User Accounts"
},
{
    "professor": "Matthew Goodwin",
    "courseId": "CS 5010",
    "courseName": "Programming Design Paradigm"
},
{
    "professor": "Matthew Goodwin",
    "courseId": "CS 5011", 
    "courseName": "Recitation for CS 5010"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5001",
    "courseName": "Intensive Foundations of Computer Science"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5002",
     "courseName": "Discrete and Data Structures"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5003", 
    "courseName": "Recitation for CS 5001"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5004",
    "courseName": "Object-Oriented Design"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5005",
    "courseName": "Recitation for CS 5004"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5006",
    "courseName": "Algorithms"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5007",
    "courseName": "Computer Systems"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5600",
    "courseName": "Computer Systems"
},
{
    "professor": "Gust Philip",
    "courseId": "CS 5800",
    "courseName": "Algorithms"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5001",
    "courseName": "Intensive Foundations of Computer Science"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5002", 
    "courseName": "Discrete and Data Structures"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5003", 
    "courseName": "Recitation for CS 5001"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5004",
    "courseName": "Object-Oriented Design"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5005",
    "courseName": "Recitation for CS 5004"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5006", 
    "courseName": "Algorithms"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5007",
    "courseName": "Computer Systems"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5600",
    "courseName": "Computer Systems"
},
{
    "professor": "Ed Katz",
    "courseId": "CS 5800",
    "courseName": "Algorithms"
},
{
    "professor": "Anurag Phardwaj",
    "courseId": "CS 6200",
    "courseName": "Information Retrieval"
},
{
    "professor": "Anurag Phardwaj",
    "courseId": "CS 7610",
    "courseName": "Foundations of Distributed Systems"
},
{
    "professor": "Anurag Phardwaj",
    "courseId": "CS 5150",
    "courseName": "Game Artificial Intelligence"
},
{
    "professor": "Anurag Phardwaj",
    "courseId": "CS 5200",
    "courseName": "Database Management Systems",
},
{
    "professor": "Anurag Phardwaj",
    "courseId": "CS 5400", 
    "courseName": "Principles of Programming Language"
},
{
    "professor": "Prasad Saripalli",
    "courseId": "CS 5500",
    "courseName": "Managing Software Development"
},
{
    "professor": "Prasad Saripalli",
    "courseId": "CS 5520",
    "courseName": "Mobile Application Development"
},
{
    "professor": "Chuhua Zhong",
    "courseId": "CS 5610", 
    "courseName": "Web Development"
},
{
    "professor": "Chuhua Zhong",
    "courseId": "CS 6200", 
    "courseName": "Information Retrieval"
},
{
    "professor": "Chuhua Zhong",
    "courseId": "CS 7610", 
    "courseName": "Foundations of Distributed Systems"
}
]



export function getMatches() {
  return matches.filter(g => g);
}
