export type LoginFormValue = {
    email : string;
    password: string; 
}

export type RegisterFormValue = {
    firstname : string;
    lastname: string; 
    email : string;
    userpassword: string; 
}

export type RegisterCustomersForm = {
    customername: string;
    phone : number;
    site: string; 
    email: string; 
    approved:boolean;
}
