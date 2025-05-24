import {z} from 'zod';


const userValidationSchema = z.object({
    name : z.string().min(1, "Name is required"),
    email : z.string().email("Invalid email format").min(1, "Email is required"),
    password : z.string().min(6, "Password must be at least 6 characters long").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    phone : z.string().min(1, "Phone number is required").regex(/^\d{11}$/, "Phone number must be 11 digits"),
})

export default userValidationSchema;