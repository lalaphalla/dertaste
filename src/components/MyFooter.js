import React from 'react'

export default function MyFooter() {
  return ( 
        <footer class="mt-10">
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
                <div>
                    <h4 class="text-3xl">Quick Link</h4>
                    <ul class="text-gray-500">
                        <li>Home</li>
                        <li>Category</li>
                        <li>Blog</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-3xl">Services</h4>
                    <ul class="text-gray-500">
                        <li>Home</li>
                        <li>Category</li>
                        <li>Blog</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-3xl">Sitemaps</h4>
                    <ul class="text-gray-500">
                        <li>Home</li>
                        <li>Category</li>
                        <li>Blog</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-3xl">Contact</h4>
                    <ul class="text-gray-500">
                        <li><i class="fa-brands fa-facebook"></i> Facebook</li>
                        <li><i class="fa-brands fa-telegram"></i> Telegram</li>
                        <li><i class="fa-brands fa-instagram"></i> Instagram</li>
                    </ul>
                </div>
    
            </div>
            <p class="mx-auto w-32 py-4 text-gray-500">Copyright ©2023</p>
        </footer>
  )
}
