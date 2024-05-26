
export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '461f974219mshb0f4a4f7f32aafdp13fc3bjsn515aae987ec7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,

    })

    const result =  await response.json();

    // return cars in result
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number)=>{
	const basePricePerDay = 50; //base rental price per day in dollars

	const mileageFactor = 0.1; // additional rate per mile

	const ageFactor = 0.05; // additional rate per year of vehicle age

	// calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// calculate total rental rate per day

	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);

}

export const generateCarImageUrl = (car: CarProps, angle? : string) => {
	// key ..
	const url = new URL('https://cdn.imagin.studio/getimage');

	const {make, year, model } = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);
	// url.searchParams.append();

	return `${url}`;
}


export const updateSearchParams = () => {
	
}
// fetch method

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '461f974219mshb0f4a4f7f32aafdp13fc3bjsn515aae987ec7',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// by axios method

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': '461f974219mshb0f4a4f7f32aafdp13fc3bjsn515aae987ec7',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }



