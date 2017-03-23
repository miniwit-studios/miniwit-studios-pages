import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateEmail } from 'shared/util/validate-email';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {}
    
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, ValidateEmail]],
            content: ['', [Validators.required, Validators.minLength(10)]]
        });
    }
    submitForm(): void {
        console.log(this.contactForm);
    }
}
