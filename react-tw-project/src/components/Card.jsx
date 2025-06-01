import React from 'react'
import { Link } from 'react-router'

function Card({id , image , title, price , description}) {

    const img = image !== null ? image : `https://celestra.co.uk/wp-content/themes/consultix/images/no-image-found-360x250.png`

    return (
        <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div class="w-2/3 bg-cover" style={{ backgroundImage: `url('${img}')` }}></div>

            <div class=" md:p-4">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white h-[64px]">{title.substr(0, 23)}</h1>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description.substr(0, 80)}...</p>

                    <div class="flex mt-2 item-center mb-2">
                        <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                    </div>

                    <div class="flex justify-between mt-3 item-center">
                        <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                        <Link to={`/Ecommerce/${id}`} class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Details</Link>
                    </div>
                </div>
            </div>
    )
}

export default Card