import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AppSettings {
  static TIEUP_ENDPOINT: string;
    
    constructor(){};
    public static COMMON_ENDPOINT = 'http://localhost:3000/';
    // public static COMMON_ENDPOINT = environment.production ? 'https://'+environment.commonUrl+':8083/mmg/api/v1/' : 'http://'+environment.commonUrl+':8083/mmg/api/v1/';
    public static ERROR_MSGS = 
    {
        REQUIRED: 'Field is required!!',
        MAX_LENGTH: 'Max length Reached!!',
        MAX: 'Max Value Reached!!',
        EMAIL: 'Please Provide Proper Email!!',
        MOBILE: 'Please Provide Proper Mobile Number!!',
        PINCODE: 'Please Provide Proper Pincode!!',
        AADHAR: 'Please Provide Proper Aadhar Number!!',
        PAN: 'Please Provide Proper PAN Number!!',
        ACCOUNT_NO: 'Please Provide Proper Account Number!!',
        IFSC: 'Please Provide Proper IFSC Code!!',
        CONTRACT: 'Max Contract Time is Two years!!',
        REGISTRATION: 'Please Provide Proper Vehicle Registration Number',
        MIN_TWO: 'Min character Required is Two!!',
        MAX_FOUR: 'Max OTP Code is Four!!',
        PASSWORD: 'Minimum 8 characters are needed for Password!!',
        PASSWORD_PATTERN: 'Password should contain minimum of 8 characters and have atleast One UpperCase, LowerCase, Special Character and Number!!',
        OTP: 'OTP has to be digits, not Alphabets!!',
        MIN_WEIGHT: 'Min Weight Required is 40Kg!!',
        MAX_WEIGHT: 'Max Weight Reached!!',
        MIN_HEIGHT: 'Min Height Required is 100cm!!',
        MAX_HEIGHT: 'Max Height Reached!!',
        MISMATCH: 'Password Mismatch!!',
        USERNAME: 'Please Provide Proper Email or Mobile Number!!',
        EMISSION_TWO_YEARS: 'Emission is required for vehicles older than 2 years!!'
    };
 }