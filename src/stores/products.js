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
        picture:
          "https://i.pinimg.com/originals/ec/72/03/ec72038f840b3898499826767ba5ca43.webp",
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
        picture:
          "https://i.pinimg.com/originals/1a/e9/2c/1ae92c58547764de2fcedee149db6bdd.webp",
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
        picture:
          "https://i.pinimg.com/originals/5c/f9/74/5cf974540a0f9d2b05c264a9a9416071.webp",
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
        picture:
          "https://i.pinimg.com/originals/5b/70/d2/5b70d2721512a6778c7ba64c745d050c.webp",
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
        picture:
          "https://i.pinimg.com/originals/9c/68/53/9c6853561651c3a0740e5452fe0f74a4.webp",
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
        picture:
          "https://i.pinimg.com/originals/62/48/fb/6248fb0f61fad90cdfceb5dd90b2efd1.webp",
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
        picture:
          "https://i.pinimg.com/originals/71/f2/4b/71f24b346bc2dc9538e9a25315498b6b.webp",
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
        picture:
          "https://i.pinimg.com/originals/e8/8f/2b/e88f2ba055bafd61456b1d6038f85ee4.webp",
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
        picture:
          "https://i.pinimg.com/originals/c0/08/f8/c008f87e4e50052d0c53eefc5b524eaa.webp",
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
