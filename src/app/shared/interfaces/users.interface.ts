export interface UsersInterface  {
  id: number;
  email:string;
  username:string;
  password: string;
  name: nameDetailUserInterface;
  address: AddressUserInterface;
  phone:string;
}

export interface nameDetailUserInterface {
  firstname: string;
  lastname: string;
}

export interface AddressUserInterface {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation:{
      lat: string;
      long:string;
  }
}
