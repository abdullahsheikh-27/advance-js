const info = {
    emp_id: 1001,
    name:'Amed Ali',
    age: 25,
    salary: 15000,

    print: function(){
        console.log("Employee ID", this.emp_id);
        console.log("Name", this.name);
        console.log("Age", this.age);
        console.log("Salary", this.salary)
    },

    display() {
        console.log(`Employee ID:${this.emp_id}
            Name: ${this.name},
            Age:${this.age},
            Salary:${this.salary},
                `)
    },

    incermentSalary(amount){
        this.salary += amount; //this.salary +amount;
        return this.salary;
    }
};

const department = {
    mang:'M01',
    dept_name:'IT',
    location:'Karachi',

    displayDeptInfo() {
        console.log(`mang: $(this.mang),
            Department: $(this.dept_name),
            Location: $(this.location)
            `);
    }
};

// Object based inhertaince
department.__proto__ =info;