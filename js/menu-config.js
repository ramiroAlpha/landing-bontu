var config = {
    brandName: 'Ramiro',
    menuComponents: [
        {
          title: 'Inicio',
          action: 'home',
          active: true
        },
        {
          title: 'Producto',
          action: 'producto',
          active: false
        },
        {
          title: 'Contacto',
          action: 'contacto',
          active: false
        },
        {
          title: 'Opciones',
          action: 'dropdown',
          active: false,
          children: [
            {
              title: 'Producto',
              action: 'producto',
              active: false
            },
            {
              title: 'Contacto',
              action: 'contacto',
              active: false
            }
          ]
        }
    ],
    socialNetworks: {
      fbAccountLink: 'https://www.facebook.com',
      googleAccount: 'https://www.google.com',
      twitterAccount: 'https://www.twitter.com',
    }
  };