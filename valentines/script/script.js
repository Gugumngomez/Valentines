document.getElementById("btn").addEventListener("click", function (e) {
    const messages = [
        "Happy Valentine's Day! You're my favorite person in the world! ❤️ <br> <br> -Love Gugu",
        "Sending hugs, love, and warm wishes your way! 💕 <br> <br> -Love Gugu",
        "You make every day feel like Valentine's Day! 🌸 <br> <br> -Love Gugu",
        "You are loved more than words can say! 🌹 <br> <br> -Love Gugu",
        "My heart beats a little faster just thinking of you! ❤️ <br> <br> -Love Gugu",
        "Wishing you endless love and joy today! 💖 <br> <br> -Love Gugu",
        "You're sweeter than all the chocolates in the world! 🍫 <br> <br> -Love Gugu",
        "Thanks for making life brighter! Happy Valentine's Day! 🌟 <br> <br> -Love Gugu",
        "Together forever, today and always. 🌷 <br> <br> -Love Gugu",
        "You're the best part of my day! Happy Valentine's! 🌹 <br> <br> -Love Gugu",
        "Love is in the air, and you're the reason why! 💞 <br> <br> -Love Gugu",
        "Every day with you is a new adventure. Happy Valentine's! 🌸 <br> <br> -Love Gugu",
        "To the one who stole my heart, happy Valentine's Day! 💝 <br> <br> -Love Gugu",
        "You fill my heart with love and laughter! 🥰 <br> <br> -Love Gugu",
        "You are truly one of a kind! Happy Valentine's! 💌 <br> <br> -Love Gugu",
        "May your day be filled with love and happiness! 🌺 <br> <br> -Love Gugu",
        "You're my person. Forever and always! ❤️ <br> <br> -Love Gugu",
        "Roses are red, violets are blue, my heart is happy because of you! 🌹 <br> <br> -Love Gugu",
        "I'm so lucky to have you in my life! 💕 <br> <br> -Love Gugu",
        "To the most amazing person, happy Valentine's Day! 🥰 <br> <br> -Love Gugu",
        "Let's make today even more special together! 🌟 <br> <br> -Love Gugu",
        "Sending you all the love today and every day! 💞 <br> <br> -Love Gugu",
        "You light up my world like no one else! 💖 <br> <br> -Love Gugu",
        "Thinking of you and smiling all day! 😊 <br> <br> -Love Gugu",
        "You make my heart skip a beat! ❤️ <br> <br> -Love Gugu",
        "Your love is the sweetest gift I could ever receive! 🎁 <br> <br> -Love Gugu",
        "Thank you for being my everything! 🌹 <br> <br> -Love Gugu",
        "I love every moment we spend together! 🌟 <br> <br> -Love Gugu",
        "With you, every day is special! 💖 <br> <br> -Love Gugu",
        "You're the reason my heart feels full! 💝 <br> <br> -Love Gugu",
        "Wishing you the happiest Valentine's Day ever! 🌺 <br> <br> -Love Gugu",
        "To my forever Valentine, I love you! 🌷 <br> <br> -Love Gugu",
        "Happiness is being with you. Happy Valentine's Day! 🌸 <br> <br> -Love Gugu",
        "Every moment spent with you is a treasure! 🌟 <br> <br> -Love Gugu",
        "You are the sunshine on my cloudy days! ☀️ <br> <br> -Love Gugu",
        "I love you to the moon and back! 🌙 <br> <br> -Love Gugu",
        "There's no one I'd rather spend Valentine's with than you! 🌹 <br> <br> -Love Gugu",
        "Your smile is the key to my happiness! 😊 <br> <br> -Love Gugu",
        "Forever grateful for your love and kindness! 💞 <br> <br> -Love Gugu",
        "Thanks for being my constant source of joy! 🌸 <br> <br> -Love Gugu",
        "You've captured my heart forever. Happy Valentine's! ❤️ <br> <br> -Love Gugu",
        "Your love is my greatest adventure! 🌍 <br> <br> -Love Gugu",
        "You're the cherry on top of my life! 🍒 <br> <br> -Love Gugu",
        "Here's to us, today and every day! 💕 <br> <br> -Love Gugu",
        "No one else could make me feel the way you do! 🥰 <br> <br> -Love Gugu",
        "Falling in love with you was the best thing ever! 💖 <br> <br> -Love Gugu",
        "You deserve the world, and I'm here to give it to you! 🌎 <br> <br> -Love Gugu",
        "Just thinking about you makes me smile! 😊 <br> <br> -Love Gugu",
        "To my special Valentine, you have all my love! 🌟 <br> <br> -Love Gugu",
        "Happy Valentine's to the one who has my heart! ❤️ <br> <br> -Love Gugu"
    ];

    // pick random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // display the message
    document.getElementById("message-text").innerHTML = randomMessage;

    // show the hidden message box
    document.getElementById("v-message").classList.remove("hidden");

    document.getElementById("btn").style.display = "none";

    for (let i = 0; i < 80; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Random position around the button click
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px%`;

        // Random size
        let size = Math.random() * 80;
        flower.style.width = `${20 + size}px`;
        flower.style.height = `${20 + size}px`;

        let rotation = Math.random() * 360;
        flower.style.transform = `rotate(${rotation}deg)`;



        document.body.appendChild(flower);

        // setTimeout(function () {
        //     flower.remove();
        // }, 5000
        // )
    }

});

