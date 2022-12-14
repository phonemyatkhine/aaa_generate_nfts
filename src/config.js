const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Aptos Alpha Alpacas";
const description = "A community of 3333 Alpacas vibing and MOVING on the Aptos Blockchain.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "AAA",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    growEditionSizeTo: 2300,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Pacas" },
      { name: "Items" },
      { name: "Body" },
      { name: "Face" },
      { name: "OverHead" },
    ],
  },
  {
    growEditionSizeTo: 2633,
    layersOrder: [
      { name: "SpecialBackground" },
      { name: "Pacas" },
      { name: "Items" },
      { name: "Body" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 5,
    growEditionSizeTo: 3283,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "SpecialPacas" },
      { name: "Items" },
      { name: "Body" },
      { name: "Face" },
      { name: "OverHead" },
    ],
  },
  {
    growEditionSizeTo: 3333,
    layersOrder: [
      { name: "SpecialBackground" },
      { name: "SpecialPacas" },
      { name: "Items" },
      { name: "Body" },
      { name: "Face" },
    ],
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
