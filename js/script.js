const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            images: [
                {
                    imagePath: "./img/01.webp",
                    title: "Marvel's Spiderman Miles Morales",
                    caption: "Spiderman dolor sit amet, consectetur adipisicing elit. Dicta iusto"
                },
                {
                    imagePath: "./img/02.webp",
                    title: "Ratchet and Clank 4 is coming",
                    caption: "Ratchet and Clank dolor sit amet, consectetur adipisicing elit. Dicta iusto."
                },
                {
                    imagePath: "./img/03.webp",
                    title: "Fortnite new season",
                    caption: "Fortnite dolor sit amet, consectetur adipisicing elit. Dicta iusto."
                },
                {
                    imagePath: "./img/04.webp",
                    title: "Stray",
                    caption: "The cat dolor sit amet, consectetur adipisicing elit. Dicta iusto."
                },
                {
                    imagePath: "./img/05.webp",
                    title: "Avengers endendgame?",
                    caption: "Thanos strikes back dolor sit amet, consectetur adipisicing elit. Dicta iusto."
                },
            ],
            showClass: "active",
            activeIndex: 0,
            autoSlide: setInterval(this.nextSlide, 3000)
        };
    },
    methods: {
        nextSlide() {
            (this.activeIndex === this.images.length - 1) ? this.activeIndex = 0 : this.activeIndex++;
        },

        prevSlide() {
            (this.activeIndex === 0) ? this.activeIndex = this.images.length - 1 : this.activeIndex--;
        },

        stopSlide() {
            clearInterval(this.autoSlide);
        },

        restartSlide() {
            this.autoSlide = setInterval(this.nextSlide, 3000);
        },

        showThis() {
            (this.activeIndex === 0) ? this.activeIndex = this.images.length - 1 : this.activeIndex--;
        }
    }
})

app.mount('#app');
