
export interface Customer {
    _id:string;
    name:string;
    user_name:string;
    email:string;
    profile_picture:string;
}

export interface CustomerState{
    isLoading:boolean;
    customers:Customer[];
}