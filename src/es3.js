function People(name){
    this.name = name
}
People.prototype.run = function(){
    console.log(this.name+' 在跑步~')
}

function Student(name,grade){
    People.call(this,name)
    this.grade = grade
}
extend(People,Student)
Student.prototype.exam = function(){
    console.log(this.grade +' 同学 '+this.name + ' 在考试~')
}

function Doctor(name,grade,paperNumber){
    Student.call(this,name,grade)
    this.paperNumber = paperNumber
}
extend(Student,Doctor)
Doctor.prototype.writePaper = function(){
    console.log(this.grade + '博士同学' + this.name + ' 在写论文,写了 '+ this.paperNumber +' 页')
}

function extend (parent,child){
    var Fn = function(){}
    Fn.prototype = parent.prototype
    child.prototype = new Fn();
    child.prototype.constructor = child;

}
var doctor = new Doctor('张三','博士二年级',10);
console.log(doctor.name)
console.log(doctor.grade)
console.log(doctor.paperNumber)

doctor.run()
doctor.exam()
doctor.writePaper()
 console.log(doctor)