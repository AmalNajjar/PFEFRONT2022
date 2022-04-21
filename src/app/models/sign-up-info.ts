export class SignUpInfo {
    
    username:string;
    email:string;
    role:string[];
    password:string;
    constructor(     password:string,  email:string,username:string,){
        
        this.username=username;
        this.email=email;
       
        this.password=password;
        this.role=['ROLE_USER']
    }
}
