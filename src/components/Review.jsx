import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <div>
      <section>
        <div className=" max-w-screen-xl py-16 sm:px-6 sm:py-24  ">
          <h2 className=" text-4xl font-bold tracking-tight sm:text-5xl py-12">
            Reviews from customers
          </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <p>industry. Lorem Ipsum has been the industry</p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Review