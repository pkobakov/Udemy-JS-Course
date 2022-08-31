class Course {
    constructor(courseTitle, courseLenght, coursePrice) {
        this.title = courseTitle;
        this.length = courseLenght;
        this.price = coursePrice;
    }
}

const jsCourse = new Course ('JavaScript', 12, 11.99);
const cSharpCourse = new Course ('CSharp', 13, 11.99);

console.log(jsCourse);
console.log(cSharpCourse);