import StoreCard from "../components/StoreCard";
import imgAmazon from "../assets/coffee-amazon.png"
import imgMixue from "../assets/dessert-mixue.png"
import imgPong from "../assets/fastfood-pong.png"
import imgTube from "../assets/coffee-tube.png"
import ReviewCard from "../components/ReviewCard"; 
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
            image: imgTube,
        },
        {
            id: 3,
            title: "Pong",
            description: "Toast Chain No.1 in Cambodia Pong offers",
            category: "fastfood",
            image: imgPong,
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
            <h2 class="text-3xl font-bold mt-24 mx-auto text-center">Most Popular Place</h2>
            <p className="text-gray-400 mb-4">Choose place you interesting in our popular selections</p>
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-auto mb-12 gap-4 max-w-screen-xl">
                {
                    stores.map(store => (
                        <StoreCard title={store.title} description={store.description} category={store.category} image={store.image} />
                    ))
                }
            </div>

            <CategoryPreview />
            <section class="pb-4 pt-10">
                <h2 class="text-3xl font-bold pt-4">Reviewer</h2>
                <p className="text-gray-400 mb-6">Find our user review about each place</p>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto">
                    {reviewers.map(reviewer => (
                        <ReviewCard userName={reviewer.userName} comment={reviewer.comment} rating={reviewer.rating} />
                    ))
                    }
                </div>
            </section>

        </>
    )
}
