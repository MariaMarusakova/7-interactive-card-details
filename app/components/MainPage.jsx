'use client'
import { updateCard } from "@/lib/updateCard";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


export default function MainPage({ formData }) {
	const [submitted, setSubmitted] = useState(false);
	const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;
	const { name, ref, onBlur } = register("cardholdername", { required: "Can't be blank" })

	// Directly update state
	const handleClick = (e) => {
		setSubmitted(!submitted);
	}

	const onSubmit = (data) => {
		setSubmitted(!submitted);
		console.log("Form Submitted", data);
	}

	const CircleIcon = () => (
		<svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)" /><path d="M28 39.92 36.08 48l16-16" stroke="#fff" 
		strokeWidth="3" /><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE" />
		<stop offset="1" stopColor="#610595" /></linearGradient></defs></svg>
	);

	return (
		<div className="min-h-screen items-center justify-between md:w-96 md:mt-80 text-sm mt-24 font-medium ">
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				{!submitted && <>
					<div className="mb-8">
						<label className="uppercase">Cardholder name</label>
						<input type="text" className="flex h-10 w-72 rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none 
				focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="cardholdername" pattern="text" placeholder="e.g. Jane Appleseed" onChange={(e) => updateCard(e)} name={name} ref={ref} onBlur={onBlur} />
						<p className='text-red-500'>{errors.cardholdername?.message}</p>
					</div>
					<div className="mb-8">
						<label className="uppercase">Card number</label>
						<input className="flex h-10 w-72 rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none 
				focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							name="cardnumber" id="cn" placeholder="e.g. 1234 5678 9123 0000" {...register("cardnumber", {
								required: "Card number is required",
								pattern: { value: /\d/, message: "Wrong format, numbers only" },
								onChange: (e) => updateCard(e)
							})} />
						<p className='text-red-500'>{errors.cardnumber?.message}</p>

					</div>

					<div className="flex gap-x-2 mb-5 md:mb-11">
						<div className="flex-0">
							<label className="uppercase">Exp. date </label>
							<input name="expmonth" placeholder="MM" className="flex h-10 w-16 rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none 
				focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...register("expmonth", {
								required: "Can't be blank",
								onChange: (e) => updateCard(e)
							})} />						</div>

						<div className="flex-initial">
							<label className="uppercase">(MM/YY)</label>
							<input name="expyear" id="ey" placeholder="YY" className="flex h-10 w-16 rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none 
				focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...register("expyear", {
								required: "Can't be blank",
								onChange: (e) => updateCard(e)
							})} />
							<div>
						<p className='text-red-500 -ml-16'>{errors.expyear?.message}</p>
						</div>

						</div>
						<div className="flex-0 ml-4">
							<label className="uppercase">CVC</label>
							<input name="cvcnumber" mask="999" placeholder="e.g. 123" id="cvcn" className="flex h-10 w-32 rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none 
            focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...register("cvcnumber", {
								required: "Can't be blank",
								pattern: { value: /^\d{3}$/, message: "Provide a 3 digit number for CVC" },
								onChange: (e) => updateCard(e)
							})} />
							<div>
						<p className='text-red-500'>{errors.cvcnumber?.message}</p>
					</div>
						</div>
					</div>
					
					<button name="confirmbutton" className="bg-[hsl(278,68%,11%)] flex h-10 w-72 rounded-md py-1.5 text-lg mb-7 text-[hsl(270,3%,87%)] px-28"
						type="submit">Confirm</button>

				</>}

				{submitted && <>
					<div className="mb-6 ml-28 mt-20"><CircleIcon /></div>
					<h1 className="uppercase text-center w-72 pb-7 text-3xl">Thank you!</h1>
					<p className="text-center w-72 pb-7 text-sm text-[hsl(279,6%,55%)]">We have added your card details</p>

					<button name="continuebutton" className="bg-[hsl(278,68%,11%)] flex h-10 w-72 rounded-md py-1.5 text-lg mb-7
					 text-[hsl(270,3%,87%)] px-28" onClick={(e) => handleClick(e)} type="button">Continue</button>
				</>}




			</form>
			<DevTool control={control} />


		</div>
	)
}