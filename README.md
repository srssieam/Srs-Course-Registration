### Projects Features:-
1. Course Catalog:
  + Display all courses with images, descriptions, prices and credit hours.
  + provide a select button so that a user can select courses as he like.
2. Cart:
  + Display a list of course which is selected by user.
  + Calculate and display the total price and remaining hour
3. Notification:
  + Provide toast alert for already selected courses and shortage of credit hours limit

### How i managed the state in this project:-
  - In this project i have used useState hook. I have declared total four state variable which are-
  ``` js
    const [selectedCourse, setSelectedCourse]=useState([])
    const [creditHours, setCreditHours]=useState(0);
    const [coursePrice, setCoursePrice]=useState(0);
    const [remainingHours, setRemainingHours] = useState(20);
  ```
  here i have set the initial value of "selectedCourse" an empty array ([]), because when we call the handleSelectBtn() multiple time , it will give multiple selected course name.
  then i put these selected coureses in a new array named "newSelectedCourse" and set the value of 'selectedCourse' variable equal to "newSelectedCourse".
  example is given bello:-
  ``` js
    const handleSelectBtn= course=>{
      const newSelectedCourse = [...selectedCourse, course];
      setSelectedCourse(newSelectedCourse);
    }
  ```
  incase of "creditHours, CoursePrice, remainingHours", i have set the initial value of these variable gradually 0 , 0 , 20. these values are number.
  when we call the handleSelectedBtn() function, it will give number values. then i have calculated and set the calculated values to these variables.
  example is given bello:-
  ``` js
    const handleSelectBtn= (creditHour, price)=>{
      const totalHour = creditHours + creditHour
      setCreditHours(totalHour);
      setRemainingHours(remainingHours- creditHour);
      setCoursePrice(coursePrice + price);
    }
  ```