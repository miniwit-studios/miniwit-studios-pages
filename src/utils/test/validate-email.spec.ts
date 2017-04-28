/// <reference types="jasmine" />

import { ValidateEmail } from '../validate-email';

describe('ValidateEmail', () => {
    it(`should return null on a valid email address`, () => {
        let control: any = { value: 'abc@def.ghi' };
        expect(ValidateEmail(control)).toBeNull();
    });
    
    it(`should return an error on an invalid email address`, () => {
        let control: any = { value: 'Not an email address!' };
        expect(ValidateEmail(control)).toEqual({ ValidateEmail: { valid: false } });
    });
});
