import Topheader from "../components/inc/header";
import Link from 'next/link'
import Slider from "../components/slider";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Home() {
 
  const flashMessage = () => {
    return(
      <>Thank you for subscribing! We'll be in touch promise :)</>
    )
  }
  const {register, handleSubmit, errors, reset} = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `http://localhost:3000/api/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: values,
    }
    try{
      const response = await axios(config)
      if(response.status == 200){
        reset()
        alert("Thank you for subscribing! We'll be in touch promise :)")
        // alert('Thank you or subscribing!')
      }
    }catch(err){
      console.log(err)
    }
  }
  // function onSubmitForm(values) {
  //   console.log(values)
  // }

  return (
    <>
      <section className="row" style={{padding: 0}}>
        <div className="col-md-6 p-0">
            <Topheader />
            <div className="" style={{padding: '50px 100px'}}>
              <Slider />
            </div>
        </div>
        <div className="col-md-6 p-0" style={{marginTop: 200}}>
          <img className="w-100" src="https://ymimg1.b8cdn.com/resized/article/7064/pictures/5876588/listing_main_AAC_Nissan_Lineup-Image.jpg" alt="Hero image"/>
        </div>
        <div className="col-md-12" style={{background: '#e76f51'}}>
          <div className="row">
            <div className="col-md-6" style={{padding: 100}}>
              <p style={{lineHeight: '1.7', fontSize: 17, color: '#fff'}}>
                Generally, you need to have a good credit score in order to buy a car, but Carsemba eliminates that requirement. With our help, you don’t have to worry about going through a bank and finance a vehicle.
              </p>
              <p style={{lineHeight: '1.7', fontSize: 17, color: '#fff'}}>
                We are building a great platform, simple process that makes the experience exciting and easy for both the car buyer and seller.
              </p>
              <p style={{lineHeight: '1.7', fontSize: 17, color: '#fff'}}>
                If you want to buy or sell a car without dealing with banks and credit score restrictions, you are at the right place! We have an ever-growing car offer, and we focus on bringing you the best possible results and experience.
              </p>
            </div>
            <div className="col-md-6" style={{padding: 100}}>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="email" {...register('email', { required: 
                    {value: true, message: 'You need to enter a valid email address.' },
                    minLength: {value: 8, message: 'This is not long enought to be an email'},
                    maxLength: {value: 120, message: 'This is too long'}
                    })} name="email" className="form-control" placeholder="Enter your email" style={{border: '1px solid #fff', outline: 'none'}}/>
                    <p style={{color: '#fff', margin: '5px 0 0 0'}}></p>
                    <p style={{color: '#fff', margin: '5px 0 0 0'}}><span>We won't span pinky promise!</span></p>
                  </div>
                  <div className="col-sm-6">
                    <input type="submit" value="Subscribe" className="btn-car btn-sm btn-car-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
