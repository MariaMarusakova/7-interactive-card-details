export default function CreditCardBack({ formData }) {
	return (
		<div className="mt-10 ml-10 bg-no-repeat w-9/12 h-[150px] bg-contain md:bg-auto absolute inset-y-0 md:top-[500px] md:right-[1050px] md:w-[447px] md:h-[245px]" 
		style={{ backgroundImage: "url(/bg-card-back.png)" }}>
			<p id="cvcnumber" name="backcvc" className="pr-9 mt-[67px] text-xs md:text-sm text-right md:pr-14 md:mt-[110px] text-white">000</p>
		</div>
	)
}