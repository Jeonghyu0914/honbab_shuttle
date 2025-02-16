const images = import.meta.glob("../assets/menu_images/*.jpg", { eager: true });

const getImage = (fileName) => {
  const key = `../assets/menu_images/${fileName}.jpg`;
  return images[key]?.default || "https://via.placeholder.com/300";
};

export default getImage;
