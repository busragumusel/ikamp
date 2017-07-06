function Teacher(age, gender, interests, subject, lessons) {
        this.name = [];
        this.gender = gender;
        this.age = age;
        this.interests = interests;
        this.subject = subject;
        this.lessons = lessons;

}

Teacher.prototype.fullName= function(firstName, lastName){
    this.name[0] = firstName;
    this.name[1] = lastName;
};

Teacher.prototype.bio = function() {
    console.log(this.name[0] +" "+ this.name[1] + " is " + this.age + " years old. They like " + this.interests + ".");
};

/*function getPrefix(gender) {
    var prefix;
    if (gender == "male"){
        prefix = "Mr.";
    } else {
        prefix = "Ms.";
    }
    return prefix;
}*/

function getPrefix(gender) {
    return gender == 'female' ? 'Ms.' : 'Mr.';

}

Teacher.prototype.greetings = function(){
    console.log("Hello. My name is " + getPrefix(this.gender) + this.name[1] + ", and I teach " + this.subject +".");
};

var lesson = {
        id: "123",
        semester: "fall",
        name: "math"
},

lesson1 = {
    id: "456",
    semester: "fall",
    name: "physic"
},

lesson2 = {
    id: "789",
    semester: "fall",
    name: "paint"
};

Teacher.prototype.getLesson = function () {
    this.lessons.forEach(function (item, index) {
        item.id;
        console.log(item.id, item.name);
    })
};

var teacher = new Teacher("25","female","js","prototype", [lesson, lesson1, lesson2]);
teacher.fullName("Helen", "Smith");
teacher.bio();
teacher.greetings();
teacher.getLesson();
