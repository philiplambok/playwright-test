// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Trigger when the page is loaded
document.addEventListener("turbo:load", () => {
  // Get the element with the id "hello"
  const element = document.getElementById("js-content")
  element.innerHTML = "Hello from JavaScript!"
})