$(async () => {
  $('.navigation').each((i, el) => {
    $(el).on('click', () => {
      $('body, html').animate({
        scrollTop: $('.subtitle').eq(i).position().top - $('#navigation').height()
      }, {
        duration: 400
      })
    })
  })
  window.addEventListener('scroll', async () => {
    const scrollPosition = Math.max($('body').scrollTop(), $('html').scrollTop())
    let last = 0
    $('.subtitle').each(async (i, el) => {
      if ($(el).position().top - $(el).height() - $('#navigation').height() - $(window).height() * 0.08 < scrollPosition) last = i
    })
    const previous = $('.navigation.active')
    if (!previous || previous.text() !== $('.navigation').eq(last).text()) {
      if (previous)
        previous.removeClass('active')
      $('.navigation').eq(last).addClass('active')
    }
  }, {
    passive: true,
    capture: true
  })
  const links = ['https://www.facebook.com/profile.php?id=100005511469469', 'https://www.linkedin.com/in/tea-toth/', 'https://github.com/Izabellle13']
  $('.social').each(async (i, el) => {
    $(el).on('click', async () => {
      location.href = links[i]
    })
  })
  window.addEventListener('scroll', async () => {
    const scrollPosition = Math.max($('body').scrollTop(), $('html').scrollTop())
    if ($('.skill-indicator').last().position().top < scrollPosition + $(window).height() ||
      $('.skill-indicator').first().position().top < scrollPosition + $(window).height() * 0.2)
      $('.skill-indicator').each((i, el) => {
        setTimeout(() => $(el).addClass('animate'), i * 40)
      })
    if ($('#interests p').first().position().top < scrollPosition + $(window).height() * 0.2 ||
      $('#interests p').last().position().top < scrollPosition + $(window).height()) {
      $('#interests svg').each((i, el) => {
        setTimeout(() => $(el).css({
          animation: 'list 1s forwards'
        }), i * 50)
      })
      $('#interests p').each(async (i, el) => {
        setTimeout(async () => $(el).css({
          animation: 'list 1s forwards'
        }), i * 50)
      })
      $('.timeline-date').each((i, el) => {
        el = $(el)
        if (el.hasClass('highlight') || el.position().top < scrollPosition + $(window).height() * 0.85) {
          el.css({
            transform: 'unset'
          })
          el.addClass('highlight')
        } else {
          const offset = el.position().top - scrollPosition - $(window).height() * 0.85
          el.css({
            transform: `translateX(${offset}px)`
          })
          el.removeClass('highlight')
        }
      })
    }
  })
  dispatchEvent(new Event('scroll'))

  $('.slideshow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  })
})
