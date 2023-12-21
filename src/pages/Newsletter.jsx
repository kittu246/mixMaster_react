import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { toast } from 'react-toastify'


const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
export const action = async ({request}) =>{

  const formData= await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  // we are using try  catch here because we want user not to display singlepage and globalerror as user need to correct over here

  try{
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg)
   
  return redirect('/'); // redirect can only be used with action and loader
  }
  catch(error){
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;   // return should in both try and catch or will get big fat error no return value

  }
   

}
const Newsletter = () => {
    return (
      <Form method="POST" className='form'>
        <h4>Newsletter</h4>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" defaultValue='Kritika' required type="text"/>
        <label htmlFor="lastName">LastName</label>
        <input id="lastName" name="lastName" defaultValue='Burman' required type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" defaultValue='test@test.com' required type="text"/>
        <button type="submit">Submit</button>
      </Form>
    )
  }
  
  export default Newsletter