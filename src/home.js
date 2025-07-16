export default function homeBtn() {
  content.textContent = "";
  const welcome = document.createElement("div");
  welcome.textContent = "Welcome to Taste Haven";
  welcome.classList.add("welcome");
  const intro1 = document.createElement("div");
  intro1.textContent =
    "At Taste Haven, we believe that food is more than just nourishment — it's an experience, a memory, and a celebration of life. From the moment you walk through our doors, you'll be greeted with the comforting aroma of freshly prepared dishes, the warmth of genuine hospitality, and a cozy ambiance that feels just like home.";
  const intro2 = document.createElement("div");
  intro2.textContent =
    "Founded with a passion for culinary excellence, Taste Haven is a place where traditional recipes meet modern twists, and every ingredient is chosen with care. Our chefs craft each dish with love, using only the finest and freshest local ingredients to ensure exceptional flavor in every bite. Whether you're craving classic comfort food, exploring bold international flavors, or simply in the mood for something new, our diverse menu offers something to satisfy every palate.";
  const intro3 = document.createElement("div");
  intro3.textContent =
    "We are more than just a restaurant — we are a gathering place for families, friends, and food lovers. Whether you're joining us for a romantic dinner, a celebration with loved ones, or a casual lunch with coworkers, we aim to make every moment special.";
  const intro4 = document.createElement("div");
  intro4.textContent =
    "Our commitment is to provide not just a meal, but a dining experience that lingers in your memory. Relax, take your time, and let our attentive staff take care of you.";
  const intro5 = document.createElement("div");
  intro5.textContent =
    "Thank you for choosing Taste Haven. We’re honored to serve you and look forward to sharing the joy of good food with you.";

  content.appendChild(welcome);
  content.appendChild(intro1);
  content.appendChild(intro2);
  content.appendChild(intro3);
  content.appendChild(intro4);
  content.appendChild(intro5);
}
