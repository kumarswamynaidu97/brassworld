const mongoose = require('mongoose');


const Handicrafts = require('./models/Handicrafts');

mongoose.connect('mongodb://localhost:27017/brass-world', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connection Success!!")
})
.catch(err => {
    console.log("MongoDB error ocured!!!!");
    console.log(err);
});


const seed = [
    {
        title: 'Hindu God Lord Ganesha Statue',
        description:'Size: Height 6 Inches x Width 2.5 Inches x Length 4 Inches | Weight: 1.2 kg approx Hindu God Lord Ganesha Statue Handmade Brass Religious Sculpture Home Décor Showpiece Ganesha hindu religious Idol Statue God Bring prosperity and happiness in your home & Office Made from Quality Brass and Handmade in India, Gorgeous Hand work and perfect showpiece of Indian Handicrafts.',
        price: 4800,
        url:"/images/img24.jpg"
    },
    {
        title: 'Handmade Metal material',
        description:'Length:- 6 Inch Width:- 1.5 Inch Height 2.5 Inch Weight:- 400 Gram Approx of Each. Brass. Handmade, work very well Metal material, durable, easy to clean. Gently whisk the surface of brass with a soft cloth if it need clean. It Can be placed in your room to refresh the decor appeal of short spaces. Also a good gift and personal collection.',
        price: 3200,
        url:"/images/img25.jpg"
    },
    {
        title: 'Traditional Design Decor',
        description:'Length:- 3.5 Inch Width:- 1.5 Inch Height 4 Inch Weight:- 400 Gram Approx of Each.Enhance the decor value of the temple, house, office, hotel, etc. Great for gifting during weddings, anniversaries, house warming ceremonies, new venture, award ceremonies,christmas etc.Traditional Design Very appealing and Eye Catching',
        price: 5000,
        url:"/images/img26.jpg"
    },
    {
        title: 'Brass Statue - Aesthetic value',
        description:'Brass Statue - Aesthetic value of Brass makes it a popular choice for decorative applications. Brass enhance your home decor and gives an elegant look to your space. Authentic & a value gift for every occasion.Material: Brass, Dimension: 6.25cm (L ) 4.25 cm (H) 1.75 cm (W) , Weight: 101 Grams',
        price: 2500,
        url:"/images/img27.jpg"
    },
    {
        title: 'Lord Ganesha Statue',
        description:'Statue is about 1.5" tall and 1.5" wide Our Lord Ganesha was made by brass We packing this Ganesha Idol with a safe box. For Decoration: Perfect for Zen Garden Accessories/Yoga Room/Meditation Room/Bed Room Decor/Home Temple/Inida Mandir/Indian Pooja Items.',
        price: 3700,
        url:"/images/img28.jpg"
    },
    {
        title: 'Statue of dancing shiva (Natraj)',
        description:'Statue of dancing shiva (Natraj) Brass metal Height 4 Inch; Length 3 Inch;Width 1.5 Inch Weight 214 grams Made in Muradabad through sand casting',
        price: 4200,
        url:"/images/img29.jpg"
    },
    {
        title: 'Buddhist Healing Medicine Religious Figurine  ',
        description:'Buddhist Healing Medicine Religious Figurine This lovely rendition of the Thai Buddha measures 3 CM tall x 2 CM wide Buddha:the Buddha at home can bring good luck and auspiciousness, increase wealth, the Buddha and the bodhisattva is best to sit west to east.',
        price: 2800,
        url:"/images/img30.jpg"
    },
    {
        title: 'Brass statue: Kamdhenu cow ',
        description:'Brass statue: Kamdhenu cow with calf Dimensions (LxWxH): 13x6x10 centimeters Weight: 800 grams approximately Material: Pure solid brass metal Vintage collectible decor idol for home temple',
        price: 3000,
        url:"/images/img35.jpg"
    },
    {
        title: 'Brass Aladin',
        description: 'An exotic addition to any home or office Suitable to use as a decorative item Best for both indoor and outdoor use Please use safely when in use. This product is manufactured in India Ornately embossed Updated: a brass plate is included, for cone incense burning New & improved - solid brass, quality product Ornately embossed.',
        price: 4000,
        url:"/images/img33.jpg"
    }
];

Handicrafts.insertMany(seed)
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
});