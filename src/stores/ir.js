import { defineStore } from 'pinia'

export const useIrStore = defineStore({
  id: 'ir',
  state: () => ({
    // Result
    resultData: [
      {
        value: 'Image1',
        label: 'Image1',
        img: '/img/origin/imgFC19.png',
        reimg: {
          img1_200: '/img/unet_200/img19.png',
          img1_300: '/img/unet_300/img19.png',
          img2_200: '/img/segnet_200/img19.png',
          img2_300: '/img/segnet_300/img19.png',
          img3_200: '/img/unet++_200/img19.png',
          img3_300: '/img/unet++_300/img19.png',
        },
      },
      {
        value: 'Image2',
        label: 'Image2',
        img: '/img/origin/imgFC61.png',
        reimg: {
          img1_200: '/img/unet_200/img61.png',
          img1_300: '/img/unet_300/img61.png',
          img2_200: '/img/segnet_200/img61.png',
          img2_300: '/img/segnet_300/img61.png',
          img3_200: '/img/unet++_200/img61.png',
          img3_300: '/img/unet++_300/img61.png',
        },
      },
      {
        value: 'Image3',
        label: 'Image3',
        img: '/img/origin/imgFC74.png',
        reimg: {
          img1_200: '/img/unet_200/img74.png',
          img1_300: '/img/unet_300/img74.png',
          img2_200: '/img/segnet_200/img74.png',
          img2_300: '/img/segnet_300/img74.png',
          img3_200: '/img/unet++_200/img74.png',
          img3_300: '/img/unet++_300/img74.png',
        },
      },
      {
        value: 'Image4',
        label: 'Image4',
        img: '/img/origin/imgFC145.png',
        reimg: {
          img1_200: '/img/unet_200/img145.png',
          img1_300: '/img/unet_300/img145.png',
          img2_200: '/img/segnet_200/img145.png',
          img2_300: '/img/segnet_300/img145.png',
          img3_200: '/img/unet++_200/img145.png',
          img3_300: '/img/unet++_300/img145.png',
        },
      },
      {
        value: 'Image5',
        label: 'Image5',
        img: '/img/origin/imgFC278.png',
        reimg: {
          img1_200: '/img/unet_200/img278.png',
          img1_300: '/img/unet_300/img278.png',
          img2_200: '/img/segnet_200/img278.png',
          img2_300: '/img/segnet_300/img278.png',
          img3_200: '/img/unet++_200/img278.png',
          img3_300: '/img/unet++_300/img278.png',
        },
      },
      {
        value: 'Image6',
        label: 'Image6',
        img: '/img/origin/imgFC296.png',
        reimg: {
          img1_200: '/img/unet_200/img296.png',
          img1_300: '/img/unet_300/img296.png',
          img2_200: '/img/segnet_200/img296.png',
          img2_300: '/img/segnet_300/img296.png',
          img3_200: '/img/unet++_200/img296.png',
          img3_300: '/img/unet++_300/img296.png',
        },
      },
      {
        value: 'Image7',
        label: 'Image7',
        img: '/img/origin/imgFC387.png',
        reimg: {
          img1_200: '/img/unet_200/img387.png',
          img1_300: '/img/unet_300/img387.png',
          img2_200: '/img/segnet_200/img387.png',
          img2_300: '/img/segnet_300/img387.png',
          img3_200: '/img/unet++_200/img387.png',
          img3_300: '/img/unet++_300/img387.png',
        },
      },
      {
        value: 'Image8',
        label: 'Image8',
        img: '/img/origin/imgFC580.png',
        reimg: {
          img1_200: '/img/unet_200/img580.png',
          img1_300: '/img/unet_300/img580.png',
          img2_200: '/img/segnet_200/img580.png',
          img2_300: '/img/segnet_300/img580.png',
          img3_200: '/img/unet++_200/img580.png',
          img3_300: '/img/unet++_300/img580.png',
        },
      },
      {
        value: 'Image9',
        label: 'Image9',
        img: '/img/origin/imgFC675.png',
        reimg: {
          img1_200: '/img/unet_200/img675.png',
          img1_300: '/img/unet_300/img675.png',
          img2_200: '/img/segnet_200/img675.png',
          img2_300: '/img/segnet_300/img675.png',
          img3_200: '/img/unet++_200/img675.png',
          img3_300: '/img/unet++_300/img675.png',
        },
      },
      {
        value: 'Image10',
        img: '/img/origin/imgFC705.png',
        reimg: {
          img1_200: '/img/unet_200/img705.png',
          img1_300: '/img/unet_300/img705.png',
          img2_200: '/img/segnet_200/img705.png',
          img2_300: '/img/segnet_300/img705.png',
          img3_200: '/img/unet++_200/img705.png',
          img3_300: '/img/unet++_300/img705.png',
        },
      },
    ],
  }),
  getters: {},
  actions: {
    //
  },
})
