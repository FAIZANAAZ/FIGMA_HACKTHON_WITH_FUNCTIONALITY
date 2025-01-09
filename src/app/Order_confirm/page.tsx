'use client'

import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; address?: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateForm = () => {
    const errors: { name?: string; email?: string; phone?: string; address?: string } = {}
    if (!formData.name.trim()) errors.name = 'Naam zaruri hai'
    if (!formData.email.trim()) errors.email = 'Email zaruri hai'
    if (!formData.phone.trim()) errors.phone = 'Phone number zaruri hai'
    if (!formData.address.trim()) errors.address = 'Address zaruri hai'
    return errors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData)
      toast.success('Aapka order successfully submit ho gaya hai!', {
        duration: 3000,
        position: 'top-center',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: ''
      })
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-8 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Delivery Information</h2>
      
      <div className="mb-5">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Naam:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">Delivery Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        ></textarea>
        {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
      </div>

      <div className="text-center">
        <Link href="/Thanks">
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit an Order
          </button>
        </Link>
      </div>
    </form>
  )
}
