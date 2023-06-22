import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("Products", {
  state: () => ({
    summary: {
      shipping: 7,
      tax: 0,
      total: 0,
    },
    bag: [],
    products: [
      {
        id: 0,
        picture: "s",
        price: "150",
        name: 'Air Jordan 1 Zoom CMFT 2 "Valentines Day"',
        favorite: true,
        bestSeller: true,
        bag: 0,
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 5 / M 5.5"],
        description:
          "Anytime, anywhere, spread the love with some new J's this Valentines Day. From words of affirmation ('Damn, those look good') to feelings of pure on-foot bliss (check out the lush velvet accents and springy Nike Zoom Air cushioning), these kicks know all the ways to make your heart go pitter-patter. The recessed Swoosh and updated collar bring a sweet look and feel to the classic design, and the richly textured leather is more decadent than a box of chocolates. Love yourself first—that's all we're saying.",
      },
      {
        id: 1,
        picture: "d",
        price: "150",
        name: "Air Jordan 1 Zoom CMFT 2",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: true,
        bestSeller: false,
        bag: 0,
        description:
          "Anytime, anywhere, spread the love with some new J's this Valentines Day. From words of affirmation ('Damn, those look good') to feelings of pure on-foot bliss (check out the lush velvet accents and springy Nike Zoom Air cushioning), these kicks know all the ways to make your heart go pitter-patter. The recessed Swoosh and updated collar bring a sweet look and feel to the classic design, and the richly textured leather is more decadent than a box of chocolates. Love yourself first—that's all we're saying.",
      },
      {
        id: 2,
        picture: "w",
        price: "125",
        name: "Air Jordan 1 Mid",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: false,
        bag: 0,
        description:
          "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
      },
      {
        id: 3,
        picture: "g",
        price: "125",
        name: "Air Jordan 1 Mid",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: false,
        bag: 0,
        description:
          "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
      },
      {
        id: 4,
        picture: "b",
        price: "125",
        name: "Air Jordan 1 Mid",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: false,
        bag: 0,
        description:
          "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
      },
      {
        id: 5,
        picture: "black",
        price: "180",
        name: "Air Jordan 1 Retro High",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: false,
        bag: 0,
        description:
          "This iteration of the AJ1 reimagines MJ's first signature shoe with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
      },
      {
        id: 6,
        picture: "o",
        price: "180",
        name: "Air Jordan 1 Retro High OG",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: true,
        bag: 0,
        description:
          "This iteration of the AJ1 reimagines MJ's first signature shoe with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
      },
      {
        id: 7,
        picture: "p",
        price: "130",
        name: "Air Jordan 1 Mid SE",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: false,
        bag: 0,
        description:
          "With these mid-top AJ1s, you don't have to choose a favorite color. Contrasting panels make these sneaks stand out, proving that every side is your good side. Durable leather up top and Air cushioning underfoot make 'em perfect for all-day wear—so lace up, and let the compliments roll in.",
      },
      {
        id: 8,
        picture: "y",
        price: "150",
        name: "Air Jordan 1 Acclimate",
        sizes: ["W 5 / M 3.5", "W 6 / M 4.5", "W 6 / M 4.5"],
        favorite: false,
        bestSeller: false,
        bag: 0,
        description:
          "With these mid-top AJ1s, you don't have to choose a favorite color. Contrasting panels make these sneaks stand out, proving that every side is your good side. Durable leather up top and Air cushioning underfoot make 'em perfect for all-day wear—so lace up, and let the compliments roll in.",
      },
    ],
  }),

  getters: {
    bagItems() {
      return this.products.filter((pro) => pro.bag > 0);
    },

    bagNumbers() {
      return this.bag.length;
    },
  },

  actions: {
    toggleFav(targetId) {
      const index = this.products.findIndex(
        (product) => product.id === targetId
      );
      this.products[index].favorite = !this.products[index].favorite;
      this.bag[index].favorite = !this.bag[index].favorite;
    },

    addToBag(targetId, selectedsize) {
      const product = this.products.find((p) => p.id === targetId);

      if (!product) {
        return;
      }

      const index = this.bag.findIndex((p) => p.id === targetId);

      if (index !== -1) {
        this.bag[index].bag++;
        this.bag[index].selectedsize = selectedsize;
      } else {
        this.bag.push({ ...product, bag: 1, selectedsize: selectedsize });
      }
      this.updateSummary();
    },
    updateBagItem(targetId, operator) {
      const item = this.bag.find((item) => item.id === targetId);
      if (!item) throw new Error(`Item with ID ${targetId} not found in bag`);
      item.bag += operator === "+" ? 1 : -1;
      this.updateSummary();
    },
    removeFromBag(targetId) {
      const index = this.bag.findIndex((p) => p.id === targetId);
      if (index !== -1) {
        this.bag.splice(index, 1);
      }
      this.updateSummary();
    },
    updateSummary() {
      const t = ref(0);
      this.bag.forEach((item) => {
        t.value += item.bag * item.price;
      });
      this.summary.total = this.summary.shipping + t.value;
      if (this.bag.length === 0) {
        this.summary.total = 0;
      }
    },
  },
});
