// SRP

// ES6 or ECMA6 or ES2015 - Object ShortHand Use
//export const salaryOperations = {
    const salaryOperations = {
        basicSalary:0,
        hra(){
            return this.basicSalary * 0.50;
        },
        da(){
            return this.basicSalary * 0.20;
        },
        ta(){
            return this.basicSalary * 0.30;
        },
        ma(){
            return this.basicSalary * 0.25;
        },
        pf(){
            return this.basicSalary * 0.05;
        },
        tax(){
            return this.gs() * 0.10;
        },
        gs(){
            return this.basicSalary + this.hra() + this.da() + this.ta() + this.ma();
        },
        ns(){
            return this.gs() - this.tax() - this.pf();    
        }
        // Key:Value
        // hra:function(){
    
        // },
        // da:function(){
    
        // }
    }
    
    export default salaryOperations;
    
    // function hra(){ // Attach window (Current Tab)
    
    // }
    // function da(){
    
    // }
    
    // function ta(){
    
    // }