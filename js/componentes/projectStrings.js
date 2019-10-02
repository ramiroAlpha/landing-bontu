const const_strings = {header: 'Tus ventas a través de plataformas digitales son la llave para obtener el crédito que esperabas',
span_header: 'Sin garantías ni avales',
bontu: "Bontu",
product:"Producto",
funciona: "¿Cómo funciona?",
contacto: "Contactanos",
login: "Iniciar Sesión",
};

const const_ref = {
    navbarNav: "#navbarNav",
    producto: "#producto",
    funciona: "#funciona",
    contacto: "#contacto", 
    login: "#LOGIN",
    home: "#"
};

let howItWorksConfig = {
    sectionTitle:
      "Si vendes tus productos o servicios a través de una plataforma digital, tienes un crédito pre-aprobado",
    titleSpan: " para crecer tu negocio",
    description:
      "Obtén tu crédito de forma rápida y sencilla. Gracias a tu historial de ventas, puedes acceder a capital de trabajo de una manera simple",
    videoURL: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
    endText:
      "Diseñado a tu medida y con la flexibilidad que necesitas para hacer crecer tu negocio",
    items: [
      {
        orientation: "right",
        mainImage: "./images/woman-table.jpg",
        title: "¿Cuánto puedo solicitar?",
        subtitle: "Adaptable y escalable",
        footerText: "Más ventas, más dinero para crecer mi negocio",
        children: [
          {
            icon: "fa fa-sliders-h",
            description:
              "El monto de tu crédito y cuánto vas a pagar se calcula gracias al historial de tus ventas, así te acompañamos durante el cíclo productivo de tu negocio."
          },
          {
            icon: "fa fa-hand-point-right",
            description:
              "Sabemos que tus ventas son variables, te ofrecemos un crédito accesible que se adapta a tus ganancias."
          },
          {
            icon: "fa fa-chart-line",
            description:
              "Si tu negocio crece, te damos acceso a capital adicional. Mientras más vendas, podrás solicitar más capital."
          }
        ]
      },
      {
        orientation: "left",
        mainImage: "./images/man-coffee.jpg",
        title: "¿Cómo pago?",
        subtitle: "Fácil, flexible y confiable",
        footerImage: "./images/tabla_ejemplo_credito20.png",
        children: [
          {
            icon: "fa fa-check-circle",
            description:
              "Tu crédito se paga en automático al descontar un porcentaje fijo de tus ventas que tú decides al inicio."
          },
          {
            icon: "fa fa-ruler-combined",
            description:
              "Nosotros nos adaptamos a los ciclos de venta de tu negocio. Si tus ventas crecen, tu crédito se paga más rápido y te da acceso a capital adicional."
          },
          {
            icon: "fa fa-shield-alt",
            description:
              "Puedes hacer pagos extras en cualquier momento, sin penalizaciones ni cargos adicionales."
          }
        ]
      },
      {
        orientation: "right",
        mainImage: "./images/man-bikeshop.jpg",
        title: "¿Cómo lo configuro?",
        subtitle: "Decide cómo quieres que sea tu crédito, elige:",
        footerImage: "./images/bontu-payments.png",
        children: [
          {
            icon: "fa fa-coins",
            description: "El monto de tu crédito"
          },
          {
            icon: "fa fa-percentage",
            description: "El porcentaje de tus ventas que escojas para pagarlo"
          },
          {
            icon: "fa fa-calendar-week",
            description: "El plazo de pago"
          }
        ]
      }
    ]
  };

export {const_strings, const_ref, howItWorksConfig};