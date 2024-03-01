export default function CreditCardFront({ formData }) {
/* 	const CardLogo = () => {
		<svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" 
		fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
	};
 */
	const CardLogo = () => (
		<svg fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" 
		fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
	);


	return (
		<div className="mt-[8rem] ml-[-35px] bg-no-repeat w-9/12 h-[150px] bg-contain md:bg-auto absolute inset-y-0 md:top-[130px] md:right-[1180px] md:w-[447px] md:h-[245px]"
			style={{ backgroundImage: "url(/bg-card-front.png)" }}>
			<div className="w-[0px] h-[0px] mt-3 md:mt-8 ml-8 md:w-[84px] md:h-[47px] fill"><CardLogo /></div>
			<p id="cardnumber" name="cardnumber"
				className="pr-9 mt-[67px] text-lg md:text-3xl text-right md:pr-12 md:mt-[70px] text-white tracking-wider font-semibold">0000 0000 0000 0000</p>
			<div className="flex uppercase mt-[15px] text-xs md:text-sm text-left md:mt-[20px] text-white tracking-wider font-normal"><p id="cardholdername" name="cardholdername"
				className="pl-7 md:pl-10">Jane Appleseed</p>
				<p className="pl-20 md:pl-52" id="expmonth" >00</p>/
				<p className="" id="expyear" >00</p>
			</div>
		</div>

	)
}


