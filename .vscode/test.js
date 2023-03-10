                // კონსოლში ყველა მნიშვნელობის დაბეჭვდა for of propert - თ
// const cars = ['ferrari','porsche','subaru','opel'];

// for (const car of cars){
//     console.log(car);
// }



                    // კონსოლში ყველა მნიშვნელობის დაბეჭდვა while property - თ
// const cars = ['ferrari','porsche','subaru','opel'];

// let i = 0;

// while (i < cars.length){
//     console.log(cars[i])
//     i++
// }
                    // კონსოლში hello დაიბეჭდება მხოლოდ ერთხელ
// const cars = ['ferrari','porsche','subaru','opel'];

// let i = 20;

// do{
//     console.log('hello');
// }
// while (i < 10 );


                    // თუ ვიყენებთ break-ს მაშინ კონსოლში დაიბეჭდება მხოლოდ ferrari 
                    // თუ ვიყენებთ continue მაშინ if ში ჩაწერილ porsche ს გამოტოვებს
// const cars = ['ferrari','porsche','subaru','opel'];

// for (const car of cars){
//     if (car == 'porsche') continue;
//     console.log(car);
// }
                
                        // foreach ფუნქცია
                        // კონსოლში დაიბეჭდება
                        // car name is - ferrari and index is - 0
                        // car name is - porsche and index is - 1
                        // car name is - subaru and index is - 2
                        // car name is - opel and index is - 3

// const cars = ['ferrari','porsche','subaru','opel'];

// cars.forEach((car, index, array) => {
//     console.log(`car name is - ${car} and index is - ${index} ${array}`);
// });

                    // მეთოდი
                    // კონსოლში დაიბეჭდება სახელი და გვარი
// const user = {
//     firstName: `ბექა`,
//     lastName: `დვალიშვილი`,
//     fullName() {   
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//     console.log(user.fullName());

                // set ფუნქცია
                // ინახავს უნიკალურ მნიშვნელობებს,cars.add-ში უკვე გამოყენებული მნიშვნელობა, 
                // აღარ დაიბეჭდება კონსოლში
// const cars = new Set([`ferrari`,`porsche`,`subaru`]);

// cars.add(`porsche`);
// cars.delete(`porsche`); - არეალიდან მნიშვნელობის წაშლა

// cars.forEach(car => {
//     console.log(car);
// })


                // კლასები
                // კონსოლში დაიბეჭდება-car { brand: 'subaru', model: 'legacy', color: 'black' }
// class car {
    // კონსტრუქტორის დახმარებით ვაწყობთ property-ებს brand,model,color
//     constructor(brand, model, color) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//     }
// }

// const mycar = new car(`subaru`,`legacy`,`black`)

// console.log(mycar);

            // კონსოლ ლოგში გამოჩნდება a და b მნიშვნელობის გარდა rest ანუ დანარჩენი
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const [a,b, ...rest] = numbers

// console.log(rest);

                    // callback
                    // კონსოლში დაიბჭდება ტექსტი 5 წამში
// const a = callback => {
//     setTimeout(() => {
//         console.log(`it's me mario`);
//         callback()
//     }, 5000);
// }

// const b = () => {
//     console.log(`it's me mar1o`);
// }
// a(b)

                    // რამდენიმე მასივის გაერთიანება "concat"

// const cars = [`ferrari`,`lamborghini`,`porsche`];
// const trucks = [`man`,`volvo`, `scania`];
// const bikes = [`bmw`,`honda`,`kawasaki`];

// const allcars = cars.concat(trucks,bikes);

// console.log(allcars);