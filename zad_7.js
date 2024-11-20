


class Employee {
    constructor(name, startDate, baseSalary) {
        this.name = name;
        this.startDate = startDate;
        this.baseSalary = baseSalary;
    }
}

class SalesPerson extends Employee {

    constructor(name, startDate, baseSalary, targetProfit, salesMonth, geoArea) {
        super(name, startDate, baseSalary);
        this.geoArea = geoArea;
        this.targetProfit = targetProfit
        this.salesMonth = salesMonth;
        this.monitored = false;
        this.monthlyPercentage = 0;
    }

    getArea(){
        return this.geoArea;
    }

    getPercentage(){
        return this.monthlyPercentage;
    }

    getMonitored(){
        return this.monitored;
    }

    checkSuccess(){
        const timestamp = Date.now();
        const today = new Date(timestamp);
        const monthsWorked =
            (today.getFullYear() - this.startDate.getFullYear()) * 12 +
            (today.getMonth() - this.startDate.getMonth());

        let sum = this.salesMonth.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let monthlyPercentage = (sum / this.targetProfit) * 100;
        this.monthlyPercentage = monthlyPercentage;
        let message = "";
        let totalSalary = (sum * 0.2) + this.baseSalary;
        if(monthsWorked < 12){
            if(monthlyPercentage < 30){
                console.log(this.name, "has low success and a salary of ", totalSalary);
                message = "low success";
            }
            else if(monthlyPercentage >= 30 && monthlyPercentage < 80){
                console.log(this.name, "has medium success and a salary of ", totalSalary);
                message = "medium success";
            }
            else {
                console.log(this.name, "has high success and a salary of ", totalSalary);
                message = "high success";
            }
        }
        else {
            if(monthlyPercentage < 50){
                console.log(this.name, "has low success and a salary of ", totalSalary);
                message = "low success";
            }
            else if(monthlyPercentage >= 50 && monthlyPercentage < 90){
                console.log(this.name, "has medium success and a salary of ", totalSalary);
                message = "medium success";
            }
            else {
                console.log(this.name, "has high success and a salary of ", totalSalary);
                message = "high success";
            }
        }
        return message;
    }

    toString(){
        let sum = this.salesMonth.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let monthlyPercentage =(sum / this.targetProfit) * 100;
        if(this.monitored){
            console.log("Employee", this.name, "has", this.monthlyPercentage.toFixed(2), "% success rate and is being monitored.");
        }
        else {
            console.log("Employee", this.name, "has", this.monthlyPercentage.toFixed(2), "% success rate and is not being monitored.");
        }
    }
}

class SalesDepartment {

    constructor() {
        this.salesPeople = [];
    }

    addEmployee(newEmployee){
        this.salesPeople[this.salesPeople.length] = newEmployee;
    }

    updateMonitoring(){
        for(let i =0; i<this.salesPeople.length; i++){
            let salesPerson = this.salesPeople[i];
            if(salesPerson.checkSuccess() === "low success"){
                this.salesPeople[i].monitored = true;
            }
        }
    }

    checkMonitoring(){
        this.updateMonitoring();
    }

    successRate(area){
        let sum = 0;
        let counter = 0;
        for(let i=0; i<this.salesPeople.length; i++){
            if((!this.salesPeople[i].getMonitored()) && this.salesPeople[i].getArea()===area){
                sum += this.salesPeople[i].getPercentage();
                counter++;
            }
        }
        if(sum===0){
            console.log("The average success rate for", area, "is 0 %");
            return;
        }
        console.log("The average success rate for", area, "is", (sum / counter).toFixed(2), "%");
    }

    print(){
        for(let i=0; i<this.salesPeople.length; i++){
            this.salesPeople[i].toString();
        }
    }
}