class Course {
    constructor(courseTitle, courseLenght, coursePrice) {
        this.title = courseTitle;
        this.length = courseLenght;
        this.price = coursePrice;
    }

    calculateValue() {
        return this.length/this.price;
    }

    printSummary() {
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
    } 
}

const jsCourse = new Course ('JavaScript', 12, 11.99);
const cSharpCourse = new Course ('CSharp', 13, 11.99);

console.log(jsCourse);
console.log(cSharpCourse);

console.log(jsCourse.calculateValue().toFixed(2));
console.log(cSharpCourse.calculateValue().toFixed(2));

console.log(jsCourse.printSummary());
console.log(cSharpCourse.printSummary());