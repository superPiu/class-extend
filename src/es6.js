class People {
    constructor(name) {
        this.name = name;
    }
    run(){
        console.log(this.name+' 在跑步~')
    }
}
 class Student extends People{
     constructor(name,grade){
        super(name)
        this.grade = grade
     }
     exam(){
        console.log(this.grade +' 同学 '+this.name + ' 在考试~')
    }
 }

 class Doctor extends Student{
    constructor(name,grade,paperNumber){
       super(name,grade)
       this.paperNumber = paperNumber
    }
    writePaper(){
        console.log(this.grade + '博士同学' + this.name + ' 在写论文,写了 '+ this.paperNumber +' 页')
   }
}

const doctor = new Doctor('张三','博士二年级',10);
console.log(doctor.name)
console.log(doctor.grade)
console.log(doctor.paperNumber)

doctor.run()
doctor.exam()
doctor.writePaper()