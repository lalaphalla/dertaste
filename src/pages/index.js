import StoreCard from "../components/StoreCard";
import imgAmazon from "../assets/coffee-amazon.png"
import imgMixue from "../assets/dessert-mixue.png"
import ReviewCard from "../components/ReviewCard";
import Carousel from "../components/Carousel";
import CategoryPreview from "../components/CategoryPreview";

export default function Home() {
    const stores = [
        {
            id: 1,
            title: "Amazon",
            description: "Taste of Nature and comfort space.",
            category: "coffee",
            image: imgAmazon,
        },
        {
            id: 2,
            title: "Tube Coffe",
            description: "Taste of Nature and comfort space.",
            category: "coffee",
            image: imgAmazon,
        },
        {
            id: 3,
            title: "Pong",
            description: "Toast Chain No.1 in Cambodia Pong offers",
            category: "fastfood",
            image: imgAmazon,
        },
        {
            id: 4,
            title: "Mixue",
            description: "I Love You You Love Me MIXUE Ice Cream & Tea",
            category: "dessert",
            image: imgMixue,
        },
    ];

    const reviewers = [
        {
            userName: 'Sok Pitha',
            reviewTime: 5,
            comment: 'Strawberry good',
            rating: 3,
            image: '',
            storeId: '1',
        },
        {
            userName: 'Sok Pitha',
            reviewTime: 5,
            comment: 'Strawberry good',
            rating: 3,
            image: '',
            storeId: '1',
        },
        {
            userName: 'Sok Pitha',
            reviewTime: 5,
            comment: 'Strawberry good',
            rating: 3,
            image: '',
            storeId: '1',
        }
    ]
    return (
        <>
            <Carousel />
            <h2 class="text-3xl font-bold mt-24 mx-auto text-center">Most Popular Place</h2>
            <p className="text-gray-400 mb-4">Choose place you interesting in our popular selections</p>
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-auto mb-12 gap-4">
                {
                    stores.map(store => (
                        <StoreCard title={store.title} description={store.description} category={store.category} image={store.image} />
                    ))
                }
            </div>

            <CategoryPreview />
            <section class="bg-gray-100 py-8 px-4">
                <h2 class="text-3xl font-bold mb-8">Reviewer</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
                    {reviewers.map(reviewer => (
                        <ReviewCard userName={reviewer.userName} comment={reviewer.comment} rating={reviewer.rating} />
                    ))
                    }
                </div>
            </section>

        </>
    )
}
