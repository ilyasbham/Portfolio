import React, { useState } from 'react'

import {
  MessageSquare,
  Star,
  User,
  Briefcase
} from "lucide-react"

import SectionWrapper from '../SectionWrapper'

const Reviews = () => {

  const [rating, setRating] = useState(0)

  const [reviews, setReviews] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    feedback: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newReview = {
      ...formData,
      rating
    }

    setReviews([newReview, ...reviews])

    setFormData({
      name: '',
      role: '',
      feedback: ''
    })

    setRating(0)
  }

  return (

    <div
      id='reviews'
      className='w-full min-h-screen text-white px-6 md:px-10 py-20'
    >

      {/* Title */}
      <div className='flex justify-center mb-14'>

        <SectionWrapper>
          <h2 className='section-title'>
            Client <span className='text-gradient'>Reviews</span>
          </h2>
        </SectionWrapper>

      </div>

      {/* Main Layout */}
      <div className='
        flex
        flex-col
        lg:flex-row
        gap-10
        max-w-7xl
        mx-auto
      '>

        {/* LEFT SIDE */}
        <div className='lg:w-3/5'>

          <div className='
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-8
            h-full
          '>

            {/* Header */}
            <div className='flex items-center gap-4 mb-8'>

              <div className='
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
              '>

                <MessageSquare className='w-7 h-7 text-cyan-400' />

              </div>

              <div>

                <h2 className='text-3xl font-bold'>
                  Recent Reviews
                </h2>

                <p className='text-gray-400 text-sm'>
                  What people say about working with me
                </p>

              </div>

            </div>

            {/* Reviews */}
            <div className='space-y-6'>

              {reviews.length === 0 ? (

                <div className='
                  border
                  border-dashed
                  border-gray-700
                  rounded-2xl
                  p-10
                  text-center
                '>

                  <h3 className='text-xl font-semibold mb-2'>
                    No reviews yet
                  </h3>

                  <p className='text-gray-400'>
                    Be the first to leave one 
                  </p>

                </div>

              ) : (

                reviews.map((review, index) => (

                  <div
                    key={index}
                    className='
                      bg-black/30
                      border
                      border-white/10
                      rounded-2xl
                      p-6

                      hover:border-cyan-400/30
                      transition
                    '
                  >

                    {/* User */}
                    <div className='flex justify-between items-start mb-4'>

                      <div>

                        <h3 className='font-bold text-lg'>
                          {review.name}
                        </h3>

                        <p className='text-sm text-gray-400'>
                          {review.role}
                        </p>

                      </div>

                      {/* Stars */}
                      <div className='flex gap-1'>

                        {[1, 2, 3, 4, 5].map((star) => (

                          <Star
                            key={star}
                            size={18}
                            className={
                              star <= review.rating
                                ? "fill-cyan-400 text-cyan-400"
                                : "text-gray-600"
                            }
                          />

                        ))}

                      </div>

                    </div>

                    {/* Feedback */}
                    <p className='text-gray-300 leading-7'>
                      {review.feedback}
                    </p>

                  </div>

                ))

              )}

            </div>

            {/* View All */}
            <div className='mt-8'>

              <button
                className='
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-500

                  hover:from-purple-700
                  hover:to-blue-600

                  px-6
                  py-3
                  rounded-xl

                  font-semibold
                  transition
                '
              >
                View All Reviews
              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className='lg:w-2/5'>

          <div className='
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-8
          '>

            {/* Title */}
            <h2 className='text-3xl font-bold mb-3'>
              Leave a Review
            </h2>

            <p className='text-gray-400 mb-8 leading-7'>
              Share your experience working with me.
              Your feedback helps improve future collaborations
              and builds trust with others.
            </p>

            <form
              onSubmit={handleSubmit}
              className='space-y-6'
            >

              {/* Rating */}
              <div>

                <label className='block mb-3 font-medium'>
                  Your Rating
                </label>

                <div className='flex gap-2'>

                  {[1, 2, 3, 4, 5].map((star) => (

                    <button
                      type='button'
                      key={star}
                      onClick={() => setRating(star)}
                      className='transition'
                    >

                      <Star
                        size={30}
                        className={
                          star <= rating
                            ? "fill-cyan-400 text-cyan-400"
                            : "text-gray-500 hover:text-cyan-400"
                        }
                      />

                    </button>

                  ))}

                </div>

              </div>

              {/* Name */}
              <div>

                <label className='block mb-2 font-medium'>
                  Name
                </label>

                <div className='relative'>

                  <User
                    className='
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    '
                    size={18}
                  />

                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='John Doe'
                    required
                    className='
                      w-full
                      bg-black/30
                      border border-gray-700
                      rounded-xl

                      py-3
                      pl-12
                      pr-4

                      outline-none

                      focus:border-cyan-400
                      transition
                    '
                  />

                </div>

              </div>

              {/* Role */}
              <div>

                <label className='block mb-2 font-medium'>
                  Role / Company
                </label>

                <div className='relative'>

                  <Briefcase
                    className='
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    '
                    size={18}
                  />

                  <input
                    type='text'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                    placeholder='CEO at Company'
                    required
                    className='
                      w-full
                      bg-black/30
                      border border-gray-700
                      rounded-xl

                      py-3
                      pl-12
                      pr-4

                      outline-none

                      focus:border-cyan-400
                      transition
                    '
                  />

                </div>

              </div>

              {/* Feedback */}
              <div>

                <label className='block mb-2 font-medium'>
                  Feedback
                </label>

                <textarea
                  name='feedback'
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={5}
                  placeholder='Share your experience working with me...'
                  required
                  className='
                    w-full
                    bg-black/30
                    border border-gray-700
                    rounded-xl

                    p-4

                    outline-none

                    focus:border-cyan-400
                    transition
                  '
                ></textarea>

              </div>

              {/* Button */}
              <button
                type='submit'
                className='
                  w-full

                  bg-gradient-to-r
                  from-purple-600
                  to-blue-500

                  hover:from-purple-700
                  hover:to-blue-600

                  py-3
                  rounded-xl

                  font-semibold

                  transition
                '
              >
                Submit Review
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Reviews