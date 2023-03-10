/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "ResultJobs",
    //   [
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-87/s/v1/ig2/rrII0Ynvj53ldj0nJQ9lmVSpI7Zx5FfHAg9PGLF9q5LwDLotsn-jTGi7d5PNMU8nnV57ewLuWICIjex5k5rapPzX.jpg?size=453x604&quality=95&type=album",
    // //       review_id: 1,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-91/s/v1/ig2/BOt-vQF-MXxMZaahwIF5HdHk-gIMOW8SExzBdmI-ktkEG7GZpEM6mba7Fp_4p48teqSUIXOQdqhvxuoiluQXabrr.jpg?size=97x130&quality=95&type=album",
    // //       review_id: 1,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-97/s/v1/ig2/C_ZRD_faW4VzrtqQVloNIXtaD8bCRwITGxn_W-YAbxS3g7ChqyucwbUrifSA-0kQSbmsItj1JP0bEL-8qqeZMHC5.jpg?size=97x130&quality=95&type=album",
    // //       review_id: 1,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-94/s/v1/ig2/TeppdB4DiHJL-vofJbLuwJ34QAlmKLEY-twFGXnWxEeQxQ4cpbDeGZEr0ZerjzQVSHurcYF1caGiQ42O-muIKYkA.jpg?size=453x604&quality=95&type=album",
    // //       review_id: 1,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-99/s/v1/ig2/utue0znLgcrSytb66ivbcj04grkyetCGpUzbf-Ls9fRpuu3USqps3qxxH2OsO0dmcBFEmjKk92b5CFuSn1Dj22Bg.jpg?size=98x130&quality=95&type=album",
    // //       review_id: 2,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-95/s/v1/ig2/2I5MDNdwBc2HqvVijxXu1E4qiI9rxFAHZGYk2L2qEsyEntJIJkpduQRI3vG3IRn16UGhtm8Eu8CWS7veh839AQfa.jpg?size=98x130&quality=95&type=album",
    // //       review_id: 2,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-30/s/v1/ig2/XU6Rtryi5G89ToCz_UxgEfuFCWC_lkTuOCd-q0tNXOxeitoFf6IgF2rTQHUNjExr9p-3HjffMAtFX2gsgent410G.jpg?size=98x130&quality=95&type=album",
    // //       review_id: 2,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-27/s/v1/ig2/Uf-3aAZrAeYHFAE3FBjlnxWBqglu7REdbLmWemYfoyR52ESDlb3xH_sj5-wv-WOwfvDNe2gOPwQwJFBSWeDgOaGq.jpg?size=98x130&quality=95&type=album",
    // //       review_id: 2,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-24/s/v1/ig2/y-ziYKt262F1hnRkGtsv0ftiAoiNjfC26IxQcr4UXlQHv0LW2g4mq48Rl5XegzhPoSUTOFVVedhNZohwhYQMb9T-.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 3,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-55/s/v1/ig2/BcjmbFZDyEpyANts7Zur_Y83BNjspDQmKE-4nOutx_XTHQUtwUbcIZYoSgxTEvG-bZkRNjfLpfLHGjIuBUuJoPyf.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 3,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-86/s/v1/ig2/BSQHg0HE3uMBdDnE8xHhjIyA75tdf-Fqyll9Zntcqg5CB4BYn9ru8chlVKL5xb3uOU_UMpu1SdPG3g2HQCFEsaWv.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 3,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-24/s/v1/ig2/CTSZmnIytvVQPapo5KfgT68HNj1QJypAwXvqRXkbg8hxDBWhW9cpxkvtcoOfu92lPNr_GmYCbVcpdet80axlMRTY.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 3,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-83/s/v1/ig2/GOQJx6S_lzH8psHXqdwdQn6LYyfQ4fErISzybiSS4CHspVNQsJ2J-amibyIMLmkB-xcs0A0tkx9dXzAa-VhrbIlP.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 4,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-14/s/v1/ig2/pseRWuOt1uWyvGvNOFVNZkicgLkKjkvxjukB1hgy3A_a3X-lgfhNLipg5Cpr7Rc0MXynLnNXM1jQ9TkFU0nH0iDU.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 4,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-93/s/v1/ig2/RdqGjyUbnm1fcp3xHqVklxyB2UTSoCnVxmuZUYx5PL71VXg0OP0MXOyYO9PYTlECyFyHum5DjUI_LeKmVQdtTMOR.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 4,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-83/s/v1/ig2/2dHioMOHJ7QJ7oacsE04UxtMFRs4uaNWnjuuVFmahQzPGYJtM8_fw_9bh7YnldR3HQ-IgKaG4kB9ce06pOkYg460.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 4,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun9-west.userapi.com/sun9-38/s/v1/ig2/RNaH5_26J82oWBXZuDBTwRIg6UTaIVEhq5cQj4jQAi_v85_6D2RRAQ0xtv2brWxQpc4hhrnUlFiEVz5NT_9iR32d.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 5,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun9-east.userapi.com/sun9-75/s/v1/ig2/MsWYmJ_UuycXdso0ao2cwY859Eyu70115pZL7EpVoOiF1m8nWyRHA3_XgimdmkQa85stMh3Co09h1u5KpG0uxDyX.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 5,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-29/s/v1/ig2/o_g61JXoUrGxoIykqYDZ1oi8gAfO-BrL1dxp7FWudmkLOBSRpAfNIlCC28cQ4odj38IeVNURRBwKZOr7dQXleD1C.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 5,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun9-west.userapi.com/sun9-40/s/v1/ig2/Y_okuSsl2RGWc7L7B_fyD748y8atzFAIRZG_tJJUL3FNo5TmFdL6g5vJ9_2CWMs2eRmxLQERLesycJcBFCNQB90D.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 5,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-86/s/v1/ig2/kfCbjUFlnFgUhXBy0NPyK7H0ZkOjf5qnYXwTP3C5SwdCqJOu6nslxK9BKYLjNPfH94kw5Ej8EglaNAq6qCDde7q3.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 6,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-97/s/v1/ig2/8zQ2_66coU5CEepfneSVk96vNunYDwHPbMLg_qQSiNecIRp6U6QHHCq1tXGkJa1nFGxXZ0h9coRTbxhP1ej2C_9I.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 6,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-20/s/v1/ig2/Fu3Ml4o8d2_CssPUtzgaiUVMCKhj67l1N6h-45MhcOVs0mFBqUV2_rrbVLMfZmOQiys2E0dm-Zr6YNmasmhL61eP.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 6,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-22/s/v1/ig2/IthILOVaxe2rDb9h-ikuU6T3yx7eM84VK5YusNiV08ygHoERrXX3c5XHxZ3duq08Zk4vUK5-lmxRE5-EbpeShs46.jpg?size=960x1280&quality=95&type=album'",
    // //       review_id: 6,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-23/s/v1/ig2/A9vi326zaGoiouzgJ_VT0xKSQpUPnuM1K1cYYOgtRnP1cNAO7qT_x8h6L7Cmyq8PPykF2ZehjRUsPq63Uo8_afgk.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 7,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-19/s/v1/ig2/mXMG0CZlwJYEbaBTU3hoKO_YfdDt8Kgxe5XxMlC6TShNNdwUOMJEWNKcqvYTdcuH1_8Es2s3cOkIXJ7qZ5VEn3PL.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 7,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun9-east.userapi.com/sun9-32/s/v1/ig2/_L8eyybT9zLXmjLNnQvNwsrQgaNaqWjCRnTO8ZQ7BphOmg8Cs-3dFwuGEtgigsNgbYRq_Kkb9vZ82-bQ0ePxa1PM.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 7,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-22/s/v1/ig2/vZHwxlI_nw9xTuMVj970DyP9lc2QNPVpXqJ4oVWwFrBP5BcAcEOPKeNP9Cg16GtRvsIlTtD6WwTre0NNdUXaVg81.jpg?size=960x1280&quality=95&type=album",
    // //       review_id: 7,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-24/s/v1/ig2/-skcjE1ZEaUl_W9ZgWQCRScrH_PmUVx8VQIkk07hdCdr3LIkaHmfN0J5Nnrz9bvaro6WUPgfEhephgOp-3mo2Wkg.jpg?size=964x1280&quality=95&type=album",
    // //       review_id: 8,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun9-east.userapi.com/sun9-31/s/v1/ig2/bA2iTVVOffeohFkh8TGnXdTEGIDbFhh6veCE6oG_bToyOtzpA9Is_9g6VnSX8eXMGQhb1DHsukhXqh8w0srPd-lK.jpg?size=964x1280&quality=95&type=album",
    // //       review_id: 8,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-28/s/v1/ig2/3TXlqr3lJtbhfyu7uoetB6zY1dnyAJIHVph5cwMAm36YdOnGF2iRxkiMg0iCgCq3OLDgTyaN8IMDnSabkLvqxK_L.jpg?size=964x1280&quality=95&type=album",
    // //       review_id: 8,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //     {
    // //       img: "https://sun1.userapi.com/sun1-47/s/v1/ig2/aSPfxOqjg4KSx7XbFN7xW2mENQTzSe2o5LcdN3r2EzAnMXRSfflGFRsQCLsISGWkv--LXyjRGHOfjphgVxxclAsF.jpg?size=964x1280&quality=95&type=album",
    // //       review_id: 8,
    // //       createdAt: new Date(),
    // //       updatedAt: new Date(),
    // //     },
    // //   ],
    // //   {}
    // // );
  },

  async down(queryInterface, Sequelize) {
   // await queryInterface.bulkDelete("ResultJobs", null, {});
  },
};
