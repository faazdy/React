import React from 'react'
import HouseList from './HouseList';

const items = [
    {
        id: 1,
        name: 'Cozy Cabin',
        location: 'Mountain View',
        rating: 4.8,
        pricePerNight: 120,
        picUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/902/914/small_2x/ai-generative-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-residence-concept-photo.jpg'
    },
    {
        id: 2,
        name: 'Modern Apartment',
        location: 'Downtown',
        rating: 4.5,
        pricePerNight: 90,
        picUrl: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 3,
        name: 'Beachfront Villa',
        location: 'Sunny Coast',
        rating: 4.9,
        pricePerNight: 250,
        picUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/902/914/small_2x/ai-generative-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-residence-concept-photo.jpg'
    },
    {
        id: 4,
        name: 'Countryside Cottage',
        location: 'Green Valley',
        rating: 4.7,
        pricePerNight: 75,
        picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqt-rm924lYSAhJUgwbwZSyYAVddodeE0F0Q&s'
    },
    {
        id: 5,
        name: 'Luxury Penthouse',
        location: 'Skyline City',
        rating: 4.6,
        pricePerNight: 300,
        picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTepYDUlT5TpbdJT3jixo5dlm8iIICR6szA&s'
    },
    {
        id: 6,
        name: 'Rustic Farmhouse',
        location: 'Meadowfield',
        rating: 4.4,
        pricePerNight: 80,
        picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2G1d6B4PQvqb8Gaur82u24B6FXRe6-2tgg&s'
    },
    {
        id: 7,
        name: 'Suburban Home',
        location: 'Pleasantville',
        rating: 4.3,
        pricePerNight: 100,
        picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2IZg4pFzkVOVoKll6Qos2NR130P4c6b3Xg&s'
    },
    {
        id: 8,
        name: 'Tiny House',
        location: 'Lakeview',
        rating: 4.2,
        pricePerNight: 50,
        picUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/902/914/small_2x/ai-generative-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-residence-concept-photo.jpg'
    },
    {
        id: 9,
        name: 'Treehouse Retreat',
        location: 'Forest Hills',
        rating: 4.9,
        pricePerNight: 200,
        picUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/902/914/small_2x/ai-generative-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-residence-concept-photo.jpg'
    }
];
export function App() {
  return (
    <HouseList houses={items}/>
  )
}
