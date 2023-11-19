type User = {
  id: number;
  email: string;
  dob: Date;
  firstName: string;
  lastName: string;
  gender: "MALE" | "FEMALE";
};

type SignInFields = {
  firstName: string;
  lastName: string;
  dob: Date;
  gender: "MALE" | "FEMALE";
  email: string;
  password: string;
};
