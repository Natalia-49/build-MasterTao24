const swiperBanner = new Swiper('#banner-slider', {
    loop: true,
     
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
     
    navigation: {
      enabled: false,
    },

    breakpoints: {
      992: {
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }      
  });
  
  
  
  const advantageSlide = document.querySelectorAll('#advantages .swiper-slide')
  const swiperAdvantages = new Swiper('#advantages', {
    
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
  breakpoints:{
    992:{
      spaceBetween: 0,
      loop: false,
      slidesPerGroup: advantageSlide,
      simulateTouch: false,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      }
    }
  }
  });



 
const swiperTemplate = document.querySelectorAll('.slider-template')
const sliderTemplatePrevArrow = document.querySelectorAll('.swiper-button-prev-unique')
const sliderTemplateNextArrow = document.querySelectorAll('.swiper-button-next-unique')

sliderTemplatePrevArrow.forEach((arrow, index) => {
  arrow.classList.add('swiper-button-prev-unique-' + index)
})
sliderTemplateNextArrow.forEach((arrow, index) => {
  arrow.classList.add('swiper-button-next-unique-' + index)
})
  
swiperTemplate.forEach((item, index) => {
  new Swiper(item, {
  
  speed: 400,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next-unique-' + index,
    prevEl: '.swiper-button-prev-unique-' + index,
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      navigation: { 
        enabled: true, 
        nextEl: '.swiper-button-next-unique-' + index,
        prevEl: '.swiper-button-prev-unique-' + index,      
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
      },
    },
    861: {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        enabled: true, 
        nextEl: '.swiper-button-next-unique-' + index,
        prevEl: '.swiper-button-prev-unique-' + index,       
      },
      
      pagination: {
      enabled: false,
      el: '.swiper-pagination',
    },
    },
    1252: {
      slidesPerView: 3,
      spaceBetween: 30,

      navigation: {
        enabled: true, 
        nextEl: '.swiper-button-next-unique-' + index,
        prevEl: '.swiper-button-prev-unique-' + index, 
      },

      pagination: {
      enabled: false,
      el: '.swiper-pagination',
    },
    } 
  } 
  });
})
  
  
  
  


const typeFile = document.querySelectorAll('.custom-file')
  typeFile.forEach(item => {
    item.addEventListener('change', () => {
      const fileName = item.closest('.form-input').querySelector('.file-name')
      fileName.innerHTML = item.files[0].name;
    });
  })

  






  const latte = {
    type: "coffee drink",
    price: "1.5$",
    consist: {
      espresso: 80,
      milk: 220,
    }
  }
  console.log(latte.consist.milk)
  console.log(latte.price)
  

  const Moschino = {
    type: "Perfumed water",
    brand: "moschino",
    country: "Italy",
    volume: "50ml",
    price: 1741,
    note: {
      initial: "Magnolia, Tangerine, Apple",
      Heart: "Jasmine petals, Peony, Currant",
      End: "Amberwood, Musk, Sandalwood",
    }
  }
  console.log(Moschino.brand +" " + Moschino.country)


  const man = {
    name: "Fedor",
    old: 72,
    profession: "pensioner",
    children: {
      daughter:{
        name: "Taliana",
        old: 49,
        profession: "designer",
        son1: {
          name: "Alexandr",
          old: 27,
          profession: "programmer",
        },
        son2: {
          name: "Dmytro",
          old: 18,
          profession: "student",
        }
      }
    }
  }
  const woman = {
    name: "Tatiana",
    old: 71,
    profession: "pensioner",
    children: {
      daughter:{
        name: "Maria",
        old: 38,
        profession: "freelancer",
        son: {
          name: "Andrey",
          old: 5,
          profession: "preschooler",
        },
        daughter: {
          name: "Arina",
          old: 12,
          profession: "schoolgirl",
        }
      }
    }
  }
console.log(man.children.daughter.son2.name)
console.log(woman.children.daughter.son.name)