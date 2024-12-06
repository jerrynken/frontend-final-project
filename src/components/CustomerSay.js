import  icon1Image from '../assets/image.jpg';
import icon2Image from '../assets/image1.jpg';
import  icon3Image from '../assets/image2.jpg';
import  icon4Image from '../assets/image3.jpg';
import Testimonial from './Testimonial';

const TestimonialsData=[
    {
        id: 1,
        name: 'Jane Doe',
        photo: icon1Image, // Placeholder image path
        review: 'This service was excellent! Highly recommended.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Jane Nken',
        photo: icon2Image, // Placeholder image path
        review: 'This service was excellent! Highly recommended.',
        rating: 4,
    },
    {
        id: 3,
        name: 'Babila Doe',
        photo: icon3Image, // Placeholder image path
        review: 'This service was excellent! Highly recommended.',
        rating: 3.5,
    },
    {
        id: 4,
        name: 'Jerry Doe',
        photo: icon4Image, // Placeholder image path
        review: 'This service was excellent! Highly recommended.',
        rating: 4.5,
    },
]

function CustomerSay(){
    return(
        <div className="main-say">
            <div className="first-say">    
               <h2>Testimonials</h2>
            </div>
            <div className="second-say">
                {TestimonialsData.map((testimonial) => (
                <Testimonial key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </div>
    )
}

export default CustomerSay;