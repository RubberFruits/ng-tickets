export class GetWidgetDataMockup {
  static response = {
    success: {
      payload: {
        discountTickets: 2,
        countBuyTickets: 2,
        matchInfo: {
          teams: [
            {
              name: 'крылья советов',
              image: './assets/img/mockup/init-widget-pics/wings.svg',
            },
            {
              name: 'арсенал тула',
              image: './assets/img/mockup/init-widget-pics/arsenal.svg',
            },
          ],
          date: '30 ОКТ, сб, 20:00',
        },
        partners: [
          './img/mockup/initMockup/puma_logo.svg',
          './img/mockup/initMockup/solidar_logo.svg',
          './img/mockup/initMockup/sogaz_logo.svg',
        ],
        user: {
          phone_or_email: 'i.ilyin@ks-samara.com',
          lastName: '',
          firstName: '',
          seatInReserve: [
            /*  {
                  "seat": "80338",
                  "sector": "89830",
                  "price": "600.00",
                  "zoneId": "60",
                  "categoryId": "30",
                  "matchId": "3237",
                  "discount": false
              },
              {
                  "seat": "80374",
                  "sector": "89830",
                  "price": "300.00",
                  "zoneId": "60",
                  "categoryId": "30",
                  "matchId": "3238",
                  "discount": true
              },
             {
                 "seat": "80521",
                 "sector": "89830",
                 "price": "600.00",
                 "zoneId": "60",
                 "categoryId": "30",
                 "matchId": "3237",
                 "discount": false
             },
             {
                 "seat": "80522",
                 "sector": "89830",
                 "price": "300.00",
                 "zoneId": "60",
                 "categoryId": "30",
                 "matchId": "3239",
                 "discount": true
             }*/
          ],
        },
        arenaId: '23',
        /*subscription: {
            seatInfo: {
               /!* seat: "80521",
                sector: "92618",
                zoneId: "60",
                categoryId: "30",*!/
            },
            limit: 5,
            info: {
                name: "Абонемент",
                year: "2022/23",
                img: "./img/mockup/initMockup/wings.svg"
            }
        },*/
        status: 'success',
      },
      resultCode: '200',
    },
    error: {
      payload: 'Клиент с таким названием уже существует!',
      resultCode: 400,
    },
  }
}
