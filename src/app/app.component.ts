import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from './models/employee.model'
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  title = 'emp_management';

  employeeForm: FormGroup;

  employees: Employee[];
  employeesToDisplay: Employee[];
  educationOptions = [
    '10th pass',
    '12th pass',
    'diploma',
    'graduate',
    'post graduate',
    'phD',
    'M.C.A',
    'B.C.A',
  ];

  constructor( private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit():void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control('dfd'),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });
  }

  this.employeeService.getEmployees().subscribe((res: any) => {
    console.log(res);

  })

  ngAfterViewInit(): void {
      //this.buttontemp.nativeElement.click();
  }

  addEmployee() {
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthday: this.BirthDay.value,
      gender: this.gender.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      company: this.Comany.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
      profile: this.fileInput.nativeElement.files[0]?.name,

    }
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,

    }
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,

    }
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,

    }
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,

    }
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,

    }
    let employee: Employee {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      
    }
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
  }

  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }

  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  
  public get BirthDay(): FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }

  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  
  public get Education(): FormControl {
    return this.employeeForm.get('education') as FormControl ;
  }

  public get Company(): FormControl {
    return this.employeeForm.get('company') as FormControl;
  }

  public get JobExperience(): FormControl {
    return this.employeeForm.get('jobExperience') as FormControl;
  }

  public get Salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
  }
}

